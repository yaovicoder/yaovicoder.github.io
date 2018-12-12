(function () {

var dt0 = parseInt($('#overview-table').attr('dt0')), dt = dt0, maxrows = 10;
var tbody, endReached, pending, coin=coinShort.toLowerCase();
var tail = '&fmt=' + lastOutstanding + '.js';

function pad2(v) { return v<10?'0'+v:v }

function gotDt(data) {
   if (!data.d) {
      endReached = 1;
      return;
   }

   if (!tbody) {
      tbody = $('#overview-table tbody');
      tbody.empty();
      $(window).on('resize scroll', addRowIfVisible);
   }

   var d = new Date((data.d-25569)*864e5);
   var nb = data.minh ? data.maxh-data.minh+1 : 0;
   var avgDiff = (data.mind+data.maxd)*0.5;
   var deltaDiff = (data.maxd-avgDiff)/avgDiff*100;
   
   var h = '<tr id="dt-' + dt + '">'
      + '<td><span class="glyphicon glyphicon-plus-sign row-icon" dt="' +  dt + '"></span> '
            + d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())+' '
            + ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()]
      + '<td>' + nb
      + '<td>' + (data.maxh || 0)
      + '<td>' + (data.d!==dt0 && nb ? (86400/nb).toFixed(1) : '-')
      + '<td>' + (data.txc || 0)
      + '<td class="amount">' + fmtAmount( parseFloat((data.txa-data.gen).toFixed(3)) )
      + '<td>' + (nb ? (fmtDiff(avgDiff) + ' <span class="trend">&#177;&nbsp' + deltaDiff.toFixed(0) + '%</span>') : '-')
      + '<td class="amount">' + fmtAmount( data.gen );
   var jh = $(h);
   jh.find('td:first-child>span').click(toggleDt);
   tbody.append(jh);

   dt -= 1;
}

function getDt() {
   if (pending) return;
   pending = 1;
   $.get('/explorer/overview.day.dws?coin='+coin+'&d='+dt+tail, gotDt)
    .done(function () {
      pending = 0;
      maxrows--;
      if (maxrows) {
         addRowIfVisible();
      } else if (!endReached) {
         $('#overview-table tbody').append(
            '<tr><td><td colspan=7 style="text-align:left"><button id="overview-more" class="btn btn-xs btn-default">Show More days...</button></tr>'
         );
         var moreBtn = $('#overview-more');
         moreBtn.click(function () {
            maxrows = 10;
            moreBtn.closest('tr').remove();
            addRowIfVisible();
         });
      }
    });
}

function addRowIfVisible() {
   if (endReached || !maxrows) return;
   var tblBottom = tbody[0].getBoundingClientRect().bottom - 250;
   if (tblBottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      getDt('');
   }
}

function toggleDt() {
   var dt = parseInt($(this).attr('dt'));
   var dtr = $('#dt-'+dt);
   var cls = 'dt-'+dt+'-blocks';
   var e = $('.'+cls);
   if (!e.length) {
      dtr.find('.row-icon').removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
      var h = '<tr class="' + cls + '"><td colspan="6">Loading... <img src="/theme/bars.gif">';
      e = $(h);
      dtr.after(e);
      $.get('/explorer/overview.detail.dws?coin='+coin+'&d='+dt, function (data) {
         e.remove();
         h = '';
         for (var i=0; i<data.length; i++) {
            var r = data[i];
            var d = new Date((dt-25569)*864e5 + r.d*1000);
            h += '<tr class="' + cls + '">'
               + '<td align="right">' + pad2(d.getUTCHours()) + ':' + pad2(d.getUTCMinutes()) + ':'+pad2(d.getUTCSeconds())
               + '<td>1'
               + '<td><a href="block.dws?' + r.id + '.htm">' + r.id + '</a>'
               + '<td>-'
               + '<td>' + r.txc
               + '<td class="amount">' + fmtAmount(r.txa-r.gen)
               + '<td>' + fmtDiff(r.diff)
               + '<td class="amount">' + fmtAmount(r.gen);
         }
         dtr.after(h);
      });
   } else {
      dtr.find('.row-icon').removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
      e.remove();
      addRowIfVisible();
   }
}

$('#overview [data-content]').popover({container:"body",trigger:"hover",placement:"top"});
getDt('');

})();

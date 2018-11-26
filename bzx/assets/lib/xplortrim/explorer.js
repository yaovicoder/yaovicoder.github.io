var coinParam = 'coin=' + coinShort.toLowerCase();
var updateAgeOn;

function updateAge() {
    updateAgeOn = 1;
    $('td[block-dt]').each(function() {
        var dt = parseInt($(this).attr('block-dt'));
        $(this).text(ageString(dt));
    });
    setTimeout(updateAge, 5000);
}

function fmtOutstanding(v, lbl) {
    lbl = lbl || coinShort;
    if (v > 1e9) {
        v /= 1e6;
        lbl = '&nbsp;M&nbsp;' + lbl;
    } else if (v < 10) {
        return v.toFixed(3) + ' ' + lbl;
    } else if (v < 100) {
        return v.toFixed(2) + ' ' + lbl;
    }
    return fmtThousandths(Math.floor(v).toString()) + ' ' + lbl;
}
var nbRecent = 10,
    lastRecentData, lastOutstanding, lastHashes, $notary;

function scheduleGetRecent(delay) {
    if (getRecent.scheduled) return;
    getRecent.scheduled = 1;
    setTimeout(function() {
        getRecent.scheduled = 0;
        getRecent();
    }, delay);
}

function updateRecent(data) {
    if (data.ev != explorerVersion) {
        location = 'https://' + 'chainz' + '.cryptoid.info/' + coinShort.toLowerCase() + '/';
    }
    if (data == 'idem') {
        scheduleGetRecent(15000);
        return
    };
    if (data.notarizedhash) {
        if (!$notary) {
            $notary = $('<div class="row" style="margin:10px -5px">' +
                '<div class="col-md-6">Notarized Hash <a><code id="notary-hash"></code></a></div>' +
                '<div class="col-md-6">Notarized TxID <code id="notary-txid"></code></div>' +
                '</div>');
            $('#recentTab').prepend($notary);
        }
        $('#notary-hash').text(data.notarizedhash).parent().attr('href', 'block.dws?' + data.notarizedhash);
        $('#notary-txid').text(data.notarizedtxid);
    }
    var jsData = JSON.stringify(data);
    if (lastRecentData != jsData) {
        lastRecentData = jsData;
        var h = '',
            row, diffAvg = 0,
            newHashes = {};
        for (var i = 0; i < data.blocks.length; i++) {
            row = data.blocks[i];
            diffAvg += row.diff;
            h += '<tr block-id="' + row.height + '"' + (!lastHashes || lastHashes[row.hash] ? '' : ' class="row-flash"') + '>' +
                '<td><a href="block.dws?' + row.height + '.htm">' + row.height + '</a>' +
                '<td block-dt="' + row.dt + '">' + ageString(row.dt) +
                '<td><span>' + row.tx + '</span>' + (row.size ? '<span>' + fmtBytes(row.size) + 'B</span>' : '') +
                '<td class="amount hidden-xs">' + fmtAmount(row.value) +
                '<td>' + fmtDiff(row.diff);
            if (row.miner_id >= 0) {
                h += '<td><a href="extraction.dws?' + row.miner_id + '.htm">' + row.miner + '</a>';
            } else {
                var comma = row.miner.indexOf(',');
                if (comma > 0) {
                    h += '<td><small><a style="color:#779" href="extraction.dws?' + row.miner.substr(0, comma) + '.htm">' + row.miner.substr(comma + 1) + '...</a></small>';
                } else {
                    h += '<td>' + row.miner;
                }
            }
            newHashes[row.hash] = 1;
        }
        lastHashes = newHashes;
        var nextN = 0;
        if (nbRecent == 10) {
            nextN = 100
        } else if (nbRecent == 100) {
            nextN = 500
        } else if (nbRecent == 500) {
            nextN = 1000
        }
        if (nextN) {
            h += '<tr><td><td colspan="5"><a href="javascript:getMoreRecent()">Show last ' + nextN + ' blocks...';
        }
        $('#recent-blocks tbody').html(h);
        setTimeout(function() {
            $('#recent-blocks tr').removeClass('row-flash')
        }, 150);
        $('#recent-blocks tr').click(function() {
            var id = $(this).attr('block-id');
            if (id) window.location.href = 'block.dws?' + $(this).attr('block-id');
        });
        $('#up-to-block').text(data.blocks[0].height);
        diffAvg /= data.blocks.length;
        var diffDir = 'right';
        var lastDiff = data.diff;
        if (lastDiff > diffAvg) {
            diffDir = 'up'
        } else if (lastDiff < diffAvg) diffDir = 'down';
        $('#difficulty').html(fmtDiff(lastDiff) + ' <span class="glyphicon glyphicon-arrow-' + diffDir + '"></span>');
        lastOutstanding = data.suply || data.blocks[0].out;
        if (data.sdt) {
            $('#shadowtokens').html(fmtOutstanding(data.sdt, 'Tokens'));
            lastOutstanding += data.sdt;
        }
        $('#outstanding').html(fmtOutstanding(lastOutstanding));
        if (data.ticker != 0) {
            $('#ticker').html(fmtBTC(data.ticker.btc));
            $('#tickerUSD').html('$' + fmtCurr(data.ticker.usd));
            var cap = data.ticker.usd * (data.out || lastOutstanding);
            if (cap < 1e6) {
                $('#marketCap').html('$' + fmtThousandths(cap.toFixed(0)));
            } else {
                $('#marketCap').html('$' + (cap * 1e-6).toFixed(2) + '&nbsp;M');
            }
        }
        if (data.hashrate) {
            $('#hashrate').html(data.hashrate);
        }
        if (data.masternodes) {
            $('#masternodes').html('<a href="masternodes.dws">' + data.masternodes + '</a>');
        }
        if (data.out) {
            $('#circulating').html(fmtOutstanding(data.out));
        }
        var $conn = $('#connections');
        if ($conn && data.peers) {
            $('#connections').html('<a href="#!network"><i class="glyphicon glyphicon-flash"></i> ' + data.peers + '</a>').find('a').click(function() {
                $('#networkTab-link').click()
            });
        }
    }
    scheduleGetRecent(15000)
}

function getRecent() {
    $.get("/explorer/index.data.dws?" + coinParam + "&n=" + nbRecent, updateRecent).fail(function() {
        scheduleGetRecent(15000)
    });
    if (!updateAgeOn) updateAge();
}

function getMoreRecent() {
    if (nbRecent < 1000) {
        if (nbRecent == 10) {
            nbRecent = 100
        } else if (nbRecent == 100) {
            nbRecent = 500
        } else if (nbRecent == 500) {
            nbRecent = 1000
        }
        lastHashes = 0;
        getRecent();
    }
}

function unGroupPrimes() {
    $.get('/explorer/index.stats.dws?ng=1&' + coinParam, updateStats);
}

function updateTopRich(n) {
    var largest = statsLoaded.largestAddresses;
    var tags = statsLoaded.tags,
        tagMap = {};
    var h = '';
    var now = (new Date()).getTime() / 1000;
    n = Math.min(n, largest.length);
    if (tags) {
        for (var tn in tags) {
            var ta = tags[tn];
            for (var ti = 0; ti < ta.length; ti++) tagMap[ta[ti]] = tn;
        }
    }
    var maxAmount = largest[0].amount || 1;
    for (var i = 0; i < n; i++) {
        var row = largest[i];
        h += '<tr><td>' + (i + 1) +
            '<td><div>';
        if (row.addr == 'Anonymous') {
            h += row.addr;
        } else {
            h += '<a href="address.dws?' + row.id + '.htm">' + row.addr.substr(0, 8) + '...</a>';
        }
        var rn = row.name || tagMap[row.id];
        if (rn) h += '<span class="tag">' + rn + '</span></div>';
        var chartP = row.amount / maxAmount * 100;
        if (maxAmount < 10) {
            h += '<td class="amount">' + fmtAmount(row.amount * 1e6, 1, '&micro;' + coinShort)
        } else {
            h += '<td class="amount">' + fmtAmount(row.amount, 2)
        }
        h += '<td class="bkgnd-chart" style="background-image:linear-gradient(90deg, ' +
            (darkTheme ? '#778, #778 ' : '#eef, #eef ') + chartP + '%, transparent ' + chartP + '%, transparent)">' +
            (100 * row.amount / lastOutstanding).toFixed(2) + ' %' +
            '<td>' + ageString(Math.max(row.dtIn, row.dtOut));
    }
    if (n <= 100) {
        h += '<tr><td><td colspan="4">';
        if (n < 100) {
            h += '<a href="javascript:updateTopRich(100)">Show Top 100</a>';
        } else {
            h += '<a href="javascript:updateTop500Rich()" id="more-rich">Show Top 500</a>';
        }
    }
    $('#largest-addresses tbody').html(h);
}

function updateTop500Rich() {
    $('#more-rich').replaceWith('<span>Loading... <img src="/theme/bars.gif"></span>');
    $.get('/explorer/index.stats.dws?n=500&' + coinParam, function(data) {
        statsLoaded = data;
        updateTopRich(500);
    });
}
var statsLoaded;

function updateStats(data) {
    statsLoaded = data;
    updateTopRich(20);
    var distribution = data.distribution;
    var chart = [];
    var h = '';
    var prev = 0;
    var delta = data.sdt || 0;
    var decimals = (lastOutstanding > 1e6) ? 0 : (lastOutstanding >= 10) ? 1 : 3;
    var distribRow = distribution[distribution.length - 1];
    var outstanding = (data.nonZeroAddresses <= 1e3) ? distribRow.total : lastOutstanding;
    for (var i = 0; i < distribution.length; i++) {
        distribRow = distribution[i];
        var rowTotal = distribRow.total - delta;
        h += '<tr><td>' + paletteDot(i) + 'Top ' + distribRow.nb +
            '<td class="amount">' + fmtThousandths(rowTotal.toFixed(decimals)) + ' ' + coinShort +
            '<td>' + (100 * rowTotal / outstanding).toFixed(2) + ' %';
        if (i > 0) {
            chart.push(['Top ' + (distribution[i - 1].nb + 1) + '-' + distribRow.nb, 1e3 * (rowTotal - prev)]);
        } else {
            chart.push(['Top ' + distribRow.nb, 1e3 * rowTotal]);
        }
        prev = rowTotal;
    }
    var otherAmount = data.nonZeroAddresses <= 1e3 ? distribRow.total - delta : outstanding;
    chart.push(['Others', 1e3 * (otherAmount - prev)]);
    h += '<tr><td>' + paletteDot(distribution.length) + 'All ' + data.nonZeroAddresses +
        '<td class="amount">' + fmtThousandths(otherAmount.toFixed(decimals)) + ' ' + coinShort +
        '<td>100 %';
    $('#wealth-distribution tbody').html(h);
    loadScript('/js/donut.pas.js', function() {
        DonutChart($('#wealth-pie'), null, chart);
    });
}
var walletsLoaded;

function walletsByNb() {
    $('#wallets-sort').text('By Address Count');
    walletsLoaded.byNb = 1;
    updateWallets(walletsLoaded)
};

function walletsByWorth() {
    $('#wallets-sort').text('By Net Worth');
    walletsLoaded.byNb = 0;
    updateWallets(walletsLoaded)
};

function updateWallets(data) {
    if (walletsLoaded == 1) {
        walletsLoaded = data;
        if (data.wallets_by_nb) {
            $('#wallets h4').before('<div class="dropdown pull-right" style="top:7px"><button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">' +
                '<span id="wallets-sort">By Net Worth</span>&nbsp;<span class="caret"></span></button>' +
                '<ul class="dropdown-menu">' +
                '<li><a onclick="walletsByWorth()">By Net Worth</a></li>' +
                '<li><a onclick="walletsByNb()">By Address Count</a></li>' +
                '</ul></div>');
        }
    }
    var h = '',
        cum = 0,
        f = 100 / lastOutstanding;
    var wallets = data.byNb ? data.wallets_by_nb : data.wallets;
    var maxAmount = (wallets.length > 0) ? wallets[0].amount : 1;
    for (var i = 0; i < wallets.length; i++) {
        var w = wallets[i];
        cum += w.amount;
        h += '<tr><td class="text-right">' + (i + 1) + '<td><a href="' +
            (w.id ? 'wallet.dws?' + w.id + '.htm' : 'address.dws?' + w.addr + '.htm') +
            '">' +
            (w.name ? '<span class="tag-link">' + w.name + '</span>' : w.addr.substr(0, 8) + '...') + '</a>' +
            '<td>' + w.nb;
        if (maxAmount < 10) {
            h += '<td class="amount">' + fmtAmount(w.amount * 1e6, 1, '&micro;' + coinShort)
        } else {
            h += '<td class="amount">' + fmtAmount(w.amount, 2)
        }
        h += '<td>' + (f * w.amount).toFixed(2) + ' %' +
            '<td>' + (f * cum).toFixed(2) + ' %' +
            '<td>' + ageString(Math.max(w.dtIn, w.dtOut));
    }
    $('#largest-wallets tbody').html(h);
}
var nodeListModal;

function showNodeList(i) {
    if (!nodeListModal) {
        nodeListModal = $('<div class="modal fade" role="dialog" id="info-modal"><div class="modal-dialog"><div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>' +
            '<h4 class="modal-title" id="myModalLabel"></h4>' +
            '</div><div class="modal-body"><p>Seen by explorer wallet in the last 24hours:</p>' +
            '<textarea class="form-control" readonly style="cursor:text"></textarea>' +
            '</div></div></div></div>');
        $('body').append(nodeListModal);
    }
    var sv = networkLoaded[i].subver;
    $.get('/explorer/peers.nodes.dws', {
        coin: coinShort.toLowerCase(),
        subver: sv
    }, function(data) {
        nodeListModal.find('.modal-title').text('Node List for ' + sv);
        var ta = nodeListModal.find('.modal-body textarea');
        ta.text('addnode=' + data.join('\naddnode='));
        ta.attr('rows', Math.min(data.length, 15));
        nodeListModal.modal('show');
    });
}

function paletteColor(i) {
    return ['#36C', '#DC3912', '#F90', '#109618', '#909', '#3B3EAC', '#0099C6', '#D47', '#6A0', '#B82E2E', '#316395', '#949', '#2A9', '#AAA1', '#63C', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'][i % 20];
}

function paletteDot(i) {
    return '<span style="background-color:' + paletteColor(i) + '" class="bigbullet"></span>';
}
var networkLoaded;

function updateNetwork(data) {
    $('#network-connections').text(data.current + ' connection' + (data.current > 1 ? 's' : ''));
    networkLoaded = data = data.peers;
    var nb = 0,
        i = 0,
        h = '',
        cum = 0,
        subver = {};
    for (i = 0; i < data.length; i++) nb += data[i].nb;
    var f = (nb == 0) ? 1 : 100 / nb;
    for (i = 0; i < data.length; i++) {
        var p = data[i];
        cum += p.nb;
        h += '<tr><td>' + paletteDot(i) + p.subver +
            '<td><button type="button" class="btn btn-default btn-xs hidden-xs" ' +
            'style="margin: 0 5px; vertical-align: top" ' +
            'onclick="showNodeList(' + i + ')">node list</button>' +
            '<td>' + p.version +
            '<td>' + p.nb +
            '<td>' + (p.nb * f).toFixed(1) + '&nbsp;%' +
            '<td>' + (cum * f).toFixed(1) + '&nbsp;%';
        subver[p.subver] = (subver[p.subver] || 0) + p.nb;
    }
    $('#network-clients tbody').html(h);
    loadScript('/js/donut.pas.js', function() {
        DonutChart($('#subversions-donut'), null, subver);
    });
}
var networkGeoLoaded = 0;

function updateNetworkGeo(data) {
    if (!networkGeoLoaded) {
        networkGeoLoaded = 1;
        $.get('/explorer/index.peers.geo.dws?' + coinParam + '&fmt.js', updateNetworkGeo);
        return;
    }
    if (networkGeoLoaded == 2) return;
    networkGeoLoaded = 2;
    var chart = {},
        geod = {};
    for (var i = 0; i < data.nodes.length; i++) {
        var r = data.nodes[i];
        chart[r.cc] = (chart[r.cc] || 0) + 1;
    }
    var f = 100 / data.nodes.length;
    var chartN = {};
    for (var k in chart) {
        var n = chart[k];
        chartN[data.countries[k]] = n;
        geod[k.toLowerCase()] = [n, data.countries[k] + ': ' + n + '<center style="font-size: 120%"><b>' + (n * f).toFixed(1) + '%</b></center>'];
    }
    loadScript('/js/donut.pas.js', function() {
        DonutChart($('#network-country-donut'), $('#network-country-legend'), chartN);
    });
    loadScript('/js/jqGeoChart.js', function() {
        $('#network-geo-map').geoChart(geod, {
            map: '/js/jqGeoChart.WorldMap.txt'
        });
    });
};
var networkOrgsLoaded = 0;

function updateNetworkOrgs(data) {
    if (!networkOrgsLoaded) {
        networkOrgsLoaded = 1;
        $.get('/explorer/index.peers.org.dws?' + coinParam + '&fmt.js', updateNetworkOrgs);
        return;
    }
    if (networkOrgsLoaded == 2) return;
    networkOrgsLoaded = 2;
    loadScript('/js/donut.pas.js', function() {
        DonutChart($('#network-org-donut'), null, data);
    });
    var nb = 0,
        h = '',
        cum = 0,
        orgs = [];
    for (var o in data) {
        nb += data[o];
        orgs.push({
            name: o,
            n: data[o]
        });
    }
    orgs.sort(function(a, b) {
        return b.n - a.n
    });
    var f = (nb == 0) ? 1 : 100 / nb;
    for (var i = 0; i < orgs.length; i++) {
        var p = orgs[i];
        cum += p.n
        h += '<tr><td>' + paletteDot(i) + p.name +
            '<td>' + p.n +
            '<td>' + (p.n * f).toFixed(1) + '&nbsp;%' +
            '<td>' + (cum * f).toFixed(1) + '&nbsp;%';
    }
    $('#network-orgs tbody').html(h);
}
var poolsLoaded, poolsHtml, poolsCharted = 0;

function updatePools(data) {
    var pools = data.pools;
    var h = '',
        chart = {},
        hasStake = 0,
        tot1000 = 1000,
        tot100 = 100;
    for (var i = 0; i < pools.length; i++) {
        var row = pools[i];
        tot1000 -= row.nb1000;
        tot100 -= row.nb100;
    }
    if (tot1000 > 0) {
        pools.push({
            name: "Others",
            nb100: tot100,
            nb1000: tot1000,
            id: -1
        });
        pools.sort(function(a, b) {
            return b.nb100 - a.nb100
        });
    }
    for (var i = 0; i < pools.length; i++) {
        var row = pools[i];
        var delta = row.nb100 - Math.round(row.nb1000 * 0.1);
        var rankDir = (delta > 1) ? 'up' : (delta < -1) ? 'down' : 'right';
        if (row.id === "0") hasStake = 1;
        h += '<tr><td class="text-right">' + (i + 1) +
            '<td>' + paletteDot(i) + ((row.id >= 0) ? ('<a href="extraction.dws?' + row.id + '.htm">' + row.name + '</a>') : 'All others <small class="glyphicon glyphicon-question-sign text-info" title="Addresses that mined only 1 block, solo miners or very small pools"></small>') +
            '<td class="trend"><span class="glyphicon glyphicon-arrow-' + rankDir + '"></span>' +
            '<td class="text-right" style="white-space: nowrap">' + row.nb100 + ' %' +
            '<td class="text-right" style="white-space: nowrap">' + (row.nb1000 * 0.1).toFixed(1) + ' %';
        chart[row.name] = row.nb100;
    }
    poolsHtml = h;
    $('#pools-share tbody').html(h);
    var urlTail = coinParam + '&' + lastOutstanding + '.js';
    if (hasStake) {
        $.get('/explorer/index.stakes.dws?' + urlTail, updateStakes);
    }
    if (pools.length > 1 || !hasStake) {
        poolsCharted = 1;
        loadScript('/js/donut.pas.js', function() {
            DonutChart($('#pools-donut'), null, chart);
        });
        chartsCallback(function() {
            $.get('/explorer/index.orphans.dws?' + urlTail, updateOrphans);
        });
    }
    if (hasStake) {
        $.get('/explorer/index.stakesize.dws?' + urlTail, updateStakeSize);
    }
}
var stakesData;

function updateStakes(data) {
    var stakes, lim = 10,
        stakeSum = 0;
    if (!data) {
        stakes = JSON.parse(stakesData);
        lim = 1e9;
    } else {
        stakes = data.stakes;
        stakesData = JSON.stringify(stakes);
    }
    var h = '',
        n = stakes.length,
        stakeSum = 0;
    for (var i = 0; i < stakes.length; i++) stakeSum += stakes[i].amount;
    while (stakes.length > lim + 1) {
        stakes[lim].nb100 += stakes[stakes.length - 1].nb100;
        stakes[lim].nb1000 += stakes[stakes.length - 1].nb1000;
        stakes.pop();
    }
    for (var i = 0; i < stakes.length; i++) {
        var row = stakes[i];
        var delta = row.nb100 - Math.round(row.nb1000 * 0.1);
        var rankDir = (delta > 1) ? 'up' : (delta < -1) ? 'down' : 'right';
        if (i < lim) {
            h += '<tr title="Rich list #' + row.rank + ' with ' + (row.amount * 100 / lastOutstanding).toFixed(2) + '% of coins (' +
                fmtThousandths(Math.floor(row.amount).toString()) + ' ' + coinShort + ')"><td class="text-right">' + (i + 1) +
                '<td><a href="address.dws?' + row.addr + '.htm">' + row.addr.substr(0, 8) + '...</a> <small class="text-muted">(Rich #' + row.rank + ')</small>';
        } else {
            h += '<tr><td><td><a href="javascript:updateStakes()">Show all ' + n + ' addresses...</a>';
        }
        h += '<td class="trend"><span class="glyphicon glyphicon-arrow-' + rankDir + '"></span>' +
            '<td class="text-right" style="white-space: nowrap">' + row.nb100 + ' %' +
            '<td class="text-right" style="white-space: nowrap">' + (row.nb1000 * 0.1).toFixed(1) + ' %';
    }
    $('#pools-share tbody').html(poolsHtml + '<tr><td colspan="5" style="border-bottom: 2px solid #ddd;"><h4>Staking Addresses</h4></td></tr>' + h);
    if (!poolsCharted) {
        loadScript('/js/donut.pas.js', function() {
            DonutChart($('#pools-donut'), null, [
                ["Staking", stakeSum],
                ["Not Staking", lastOutstanding - stakeSum]
            ]);
        });
        $('#pools-pie-title').text('Staking Coins for the last 1000 Blocks');
        chartsCallback(function() {
            $.get('/explorer/index.orphans.dws?' + coinParam + '&' + lastOutstanding + '.js', updateOrphans);
        });
    }
}
var orphansLoaded;

function updateOrphans(d) {
    orphansLoaded = d;
    chartsCallback(function() {
        var data = new google.visualization.DataTable(),
            rows = [],
            r = orphansLoaded;
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Orphans');
        data.addColumn('number', '10 days average');
        for (var i = 0; i < r.n.length; i++) {
            for (var k = j = Math.max(0, i - 9), a = 0; j <= i; j++) a += r.n[j];
            a /= (i - k + 1);
            rows.push([new Date((r.d + i) * 864e5), r.n[i], a]);
        }
        data.addRows(rows);
        var chart = new google.visualization.LineChart(document.getElementById('orphans-chart'));
        chart.draw(data, {
            hAxis: {
                format: "yyyy-MM-dd",
                baselineColor: "transparent",
                gridlines: {
                    color: "transparent"
                }
            },
            vAxis: {
                minValue: 0,
                textPosition: 'in'
            },
            legend: {
                position: "in"
            },
            chartArea: {
                left: "5%",
                top: "5%",
                width: "90%",
                height: "80%"
            },
            backgroundColor: {
                fill: darkTheme ? '#bbb' : '#fff'
            }
        });
    });
}
var stakeSizeLoaded;

function updateStakeSize(d) {
    stakeSizeLoaded = d;
    var rows = [
        ['Block', 'Input Size', 'Difficulty']
    ];
    for (var i = 0, b = 0; i < d.length; i += 3) {
        b += d[i];
        rows.push([b, d[i + 1], d[i + 2]]);
    }
    chartsCallback(function() {
        var data = google.visualization.arrayToDataTable(rows);
        if (document.getElementById('stake-input')) {
            $('#stake-input-blocks').text(10000);
        } else {
            $('#extraction').append('<div class="col-md-12" id="stake-input"><h4>Stake Input Size for the last <span id="stake-input-blocks">1000</span> blocks' +
                '<a href="#" id="more-stake-inputs" style="font-size:60%;padding-left:2em">show more</a></h4>' +
                '<center id="stakesize-chart" style="width:95%; height:300px"></center></div>');
            var $more = $('#more-stake-inputs');
            $more.click(function() {
                $.get('/explorer/index.stakesize.dws?n=10000&' + coinParam + '&' + lastOutstanding + '.js', updateStakeSize);
                $more.remove();
                return false;
            });
        }
        var chart = new google.visualization.LineChart(document.getElementById('stakesize-chart'));
        google.visualization.events.addListener(chart, 'select', function() {
            var s = chart.getSelection()[0];
            if (s) {
                window.open('block.dws?' + data.getValue(s.row, 0));
            }
        });
        chart.draw(data, {
            series: {
                0: {
                    targetAxisIndex: 0,
                    lineWidth: 0.25,
                    pointSize: 3
                },
                1: {
                    targetAxisIndex: 1,
                    color: '#f80'
                }
            },
            vAxes: {
                0: {
                    logScale: true
                },
                1: {}
            },
            legend: {
                position: "none"
            },
            chartArea: {
                left: "15%",
                top: "10%",
                width: "85%",
                height: "80%"
            },
            backgroundColor: {
                fill: darkTheme ? '#bbb' : '#fff'
            }
        });
    });
}
var chartsLoaded, chartsPendingCallbacks = [];

function chartsCallback(fn) {
    if (chartsLoaded == 2) {
        fn();
        return
    }
    chartsPendingCallbacks.push(fn);
    if (chartsLoaded) return;
    chartsLoaded = 1;
    google.load("visualization", "1", {
        packages: ["corechart"],
        callback: function() {
            chartsLoaded = 2;
            for (var i = 0; i < chartsPendingCallbacks.length; i++) chartsPendingCallbacks[i]();
        }
    });
}

function showContribute() {
    var m = $('#contributeModal');
    m.load('/explorer/contribute.modal.dws?' + coinParam, function() {
        m.modal('show');
        clipboard('.copy-button', '#contrib-addr');
    });
}
var chartsPanel, chartsBefore = '';

function showChart(name) {
    if (!chartsPanel) {
        $('#data-panels').after('<div class="row" id="charts-panel"></div>');
        chartsPanel = $('#charts-panel');
    }
    $('#ticker-panels,#data-panels').hide();
    chartsPanel.show();
    if (location.hash.substr(0, 2) != "#@") {
        chartsBefore = location.hash;
    }
    location.replace("#@" + name);
    chartsPanel.load('/explorer/charts/' + name + '.dws?' + coinParam, function() {
        loadScript('/js/' + name + '.chart.js?1');
    });
}

function hideCharts() {
    chartsPanel.hide();
    $('#ticker-panels,#data-panels').show();
    location.replace(chartsBefore);
}
var cryptoLoaded, overviewLoaded, marketsLoaded, newsLoaded;
$(document).ready(function() {
    getRecent();
    $('#recentTab-link').click(function() {
        location.replace("#");
    });
    $('#richTab-link').click(function() {
        if (!statsLoaded) {
            statsLoaded = 1;
            $.get('/explorer/index.stats.dws?' + coinParam, updateStats);
        }
        location.replace("#!rich");
    });
    $('#walletsTab-link').click(function() {
        if (!walletsLoaded) {
            walletsLoaded = 1;
            getWithRetry('/explorer/index.wallets.dws?' + coinParam, updateWallets);
        }
        location.replace("#!wallets");
    });
    $('#overviewTab-link').click(function() {
        if (!overviewLoaded) {
            overviewLoaded = 1;
            $('#overview').load('/explorer/overview.dws', function() {
                loadScript(overviewJS, function() {});
            });
        }
        location.replace("#!overview");
    });
    $('#extractionTab-link').click(function() {
        if (!poolsLoaded) {
            poolsLoaded = 1;
            $.get('/explorer/index.pools.dws?' + coinParam, updatePools);
        }
        location.replace("#!extraction");
    });
    $('#networkTab-link').click(function() {
        if (!networkLoaded) {
            networkLoaded = 1;
            $('#network').load('/explorer/index.network.dws?' + coinParam + '&fmt.htm', function() {
                $.get('/explorer/index.peers.dws?' + coinParam, updateNetwork);
                $('#network-geo-link').click(updateNetworkGeo);
                $('#network-org-link').click(updateNetworkOrgs);
            });
        }
        location.replace("#!network");
    });
    $('#marketsTab-link').click(function() {
        if (!marketsLoaded) {
            marketsLoaded = 1;
            $('#markets').load('/explorer/index.markets.dws?' + coinParam + '&fmt.htm', function() {
                loadScript('/js/markets.pas.js?2', function() {});
            });
        }
        location.replace("#!markets");
    });
    $('#newsTab-link').click(function() {
        if (!newsLoaded) {
            newsLoaded = 1;
            $('#news').load('/explorer/index.news.dws?' + coinParam + '&fmt.htm', function() {
                loadScript('/js/news.pas.js?3', function() {});
            });
        }
        location.replace("#!news");
    });
    $('#cryptoTab-link').click(function() {
        if (!cryptoLoaded) {
            cryptoLoaded = 1;
            $('#crypto').load('/explorer/index.about.dws?' + coinParam);
        }
        location.replace("#!crypto");
    });
    if (location.hash.substr(0, 2) == "#!") {
        $("#" + location.hash.substr(2) + "Tab-link").click();
    }
    if (location.hash.substr(0, 2) == "#@") {
        showChart(location.hash.substr(2));
    }
    $('.navbar-nav').append('<li id="start-tour"><a href="#">Tour</a></li>');
    $('#start-tour').click(function() {
        loadScript('/js/tour.js', function() {
            initTour()
        });
        $('#start-tour').remove();
    });
});

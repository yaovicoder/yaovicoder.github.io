// Add a class to your html markup <div class="blocks-to-go"></div>
// style the class how you like
// load latest jQuery library and this file blocks.js in the footer.

(function ($) {
  function get_data_chainz() {

    // Get getblockcount

    $.getJSON(
      "https://cors-anywhere.herokuapp.com/https://chainz.cryptoid.info/bzx/api.dws?q=getblockcount",
      function(data) {
        //console.log(data);
        var getblockcount = data;
        var blocksToGo = 52000 - getblockcount;
        var blocksToGoText = " Blocks to go.";

        $(".blocks-to-go").html(
          "<span>" + blocksToGo + "</span>"
        );
      }
    );
  }
  get_data_chainz();
  setInterval(get_data_chainz, 60000);

})(jQuery);

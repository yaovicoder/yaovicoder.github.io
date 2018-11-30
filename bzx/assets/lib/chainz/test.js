/*jQuery.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://chainz.cryptoid.info/explorer/api.dws?q=summary",
    type: "GET",

    contentType: 'application/json; charset=utf-8',
    success: function (resultData) {
        //here is your json.
        // process it
        console.log(resultData);

    },
    error: function (jqXHR, textStatus, errorThrown) {
    },

    timeout: 120000,
});*/


// Get getblockcount
(function ($) {
    function get_data_chainz() {
        var chainz = "https://cors-anywhere.herokuapp.com/https://chainz.cryptoid.info/explorer/api.dws?q=summary";
        $.getJSON(
            chainz,
            function (data) {
                // console.log(data);
                var bzx = data['bzx'];
                console.log(bzx);
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

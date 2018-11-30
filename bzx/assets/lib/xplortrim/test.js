jQuery.ajax({
            url: "https://chainz.cryptoid.info/explorer/api.dws?q=summary",
            type: "GET",

            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
                //here is your json.
                  // process it
alert(resultData);

            },
            error : function(jqXHR, textStatus, errorThrown) {
            },

            timeout: 120000,
        });

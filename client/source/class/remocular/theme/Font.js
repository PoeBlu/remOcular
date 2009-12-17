/* ************************************************************************
   Copyright: 2009 OETIKER+PARTNER AG
   License:   GPL
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: ���
************************************************************************ */

qx.Theme.define("remocular.theme.Font", {
    extend : qx.theme.modern.Font,

    fonts : {
        hugeTitle : {
            size       : 130,
            lineHeight : 1.0,
            family     : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] : qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] : [ "Tahoma", "Liberation Sans", "Arial" ],
            bold       : true
        },

        smallTitle : {
            size       : 20,
            lineHeight : 1.0,
            family     : qx.bom.client.Platform.MAC ? [ "Lucida Grande" ] : qx.bom.client.System.WINVISTA ? [ "Segoe UI", "Candara" ] : [ "Tahoma", "Liberation Sans", "Arial" ],
            bold       : true
        }
    }
});

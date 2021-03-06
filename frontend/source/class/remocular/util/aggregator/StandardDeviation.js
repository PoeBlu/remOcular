/* ************************************************************************
   Copyright: 2009 OETIKER+PARTNER AG 
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: äöü
************************************************************************ */

/**
 * calculate the standard deviation. Configuration map:
 * <pre class="javascript">
 * cfg = {
 *    key_col: column with the key values
 *    source_col: column with the input data for the average
 * }
 * </pre>
 */
qx.Class.define('remocular.util.aggregator.StandardDeviation', {
    extend : remocular.util.aggregator.Abstract,

    members : {
        process : function(row) {
            var cfg = this._getCfg();
            var sto = this._getStore();
            var key = row[cfg.key_col];
            var value = row[cfg.source_col];

            if (sto[key] == undefined) {
                sto[key] = {
                    count : 0,
                    sum   : 0,
                    sqsum : 0
                };
            }

            var s = sto[key];
            s.count++;
            s.sum += value;
            s.sqsum += (value * value);
            var val = Math.sqrt((s.sqsum - s.sum * s.sum / s.count) / s.count);
            return val;
        }
    }
});

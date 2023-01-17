// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../QLearning/Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HMI;
        (function (HMI) {
            function HighlightMaximumValue(rowData, rowIndex, rowNumber) {
                var classes = [];
                var keys = Object.keys(rowData);
                var IndexWithHighestValue = 0
                for (let i = 0; i < keys.length; i++) {
                    if (rowData[keys[i]] > rowData[keys[IndexWithHighestValue]]) {
                        IndexWithHighestValue = i;
                    }
                }

                if (IndexWithHighestValue == 0) {
                    classes.push('col0');
                } else if (IndexWithHighestValue == 1) {
                    classes.push('col1');
                } else if (IndexWithHighestValue == 2) {
                    classes.push('col2');
                } else if (IndexWithHighestValue == 3) {
                    classes.push('col3');
                }
                return classes;
            }
            HMI.HighlightMaximumValue = HighlightMaximumValue;
        })(HMI = Functions.HMI || (Functions.HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('HighlightMaximumValue', 'TcHmi.Functions.HMI', TcHmi.Functions.HMI.HighlightMaximumValue);

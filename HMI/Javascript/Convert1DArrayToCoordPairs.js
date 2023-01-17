// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../QLearning/Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HMI;
        (function (HMI) {
            function Convert1DArrayToCoordPairs(OneDimArray) {
                var upperArray = [];
                var myXYArray = [];
                upperArray[0] = myXYArray;
                for (var i = 0; i < OneDimArray.length; i++) {
                    if (OneDimArray[i] != 0) {
                        myXYArray[i] = { x: i, y: OneDimArray[i] };
                    }
                }
                return upperArray

            }
            HMI.Convert1DArrayToCoordPairs = Convert1DArrayToCoordPairs;
        })(HMI = Functions.HMI || (Functions.HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('Convert1DArrayToCoordPairs', 'TcHmi.Functions.HMI', TcHmi.Functions.HMI.Convert1DArrayToCoordPairs);

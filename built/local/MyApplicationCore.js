var ApplicationCore;
(function (ApplicationCore) {
    function Run() {
        ApplicationCore.Alert("The Application is running!");
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    function Log(toLog) {
        console.log(toLog);
    }
    ApplicationCore.Log = Log;
    function Alert(toAlert) {
        window.alert(toAlert);
    }
    ApplicationCore.Alert = Alert;
})(ApplicationCore || (ApplicationCore = {}));
//# sourceMappingURL=MyApplicationCore.js.map
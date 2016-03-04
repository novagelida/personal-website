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
var ApplicationCore;
(function (ApplicationCore) {
    var MyThemeManager = (function () {
        function MyThemeManager() {
            ApplicationCore.Alert("ThemeManager Running");
        }
        return MyThemeManager;
    }());
    ApplicationCore.MyThemeManager = MyThemeManager;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var InitialConfigurationModel = (function () {
        function InitialConfigurationModel() {
        }
        return InitialConfigurationModel;
    }());
    ApplicationCore.InitialConfigurationModel = InitialConfigurationModel;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var MyDataRetriever = (function () {
        function MyDataRetriever() {
            ApplicationCore.Alert("DataRetriever Running");
        }
        MyDataRetriever.prototype.GetInitialConfiguration = function () {
            return new ApplicationCore.InitialConfigurationModel();
        };
        return MyDataRetriever;
    }());
    ApplicationCore.MyDataRetriever = MyDataRetriever;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var Activator = (function () {
        function Activator(themeManager, dataRetriever) {
            this.themeManager = themeManager;
            this.dataRetriever = dataRetriever;
        }
        return Activator;
    }());
    function Run() {
        var themeManager;
        themeManager = new ApplicationCore.MyThemeManager();
        var dataRetriever;
        dataRetriever = new ApplicationCore.MyDataRetriever();
        var activator;
        activator = new Activator(themeManager, dataRetriever);
        ApplicationCore.Alert("ApplicationCore running!");
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));
//# sourceMappingURL=MyApplicationCore.js.map
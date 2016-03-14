var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        InitialConfigurationModel.prototype.ParseJson = function () {
        };
        return InitialConfigurationModel;
    }());
    ApplicationCore.InitialConfigurationModel = InitialConfigurationModel;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var GET = "get";
    var BasicDataRetriever = (function () {
        function BasicDataRetriever(model) {
            this.modelToFill = model;
        }
        BasicDataRetriever.prototype.PerformRequest = function (requestToWrap) {
            function levelRequestListener() {
                var levels = JSON.parse(this.responseText);
                console.log(levels);
            }
            var temporary_request = new XMLHttpRequest();
            temporary_request.onload = levelRequestListener;
            temporary_request.open(GET, requestToWrap.Resource, true);
            temporary_request.send();
            return this.modelToFill;
        };
        return BasicDataRetriever;
    }());
    var InitialConfigurationRetriever = (function (_super) {
        __extends(InitialConfigurationRetriever, _super);
        function InitialConfigurationRetriever(model) {
            _super.call(this, model);
            ApplicationCore.Alert("InitialConfigurationRetriever built!");
        }
        InitialConfigurationRetriever.prototype.Build = function () {
            var initialConfigurationRequest = { Resource: "./data/InitialConfiguration.json" };
            return _super.prototype.PerformRequest.call(this, initialConfigurationRequest);
        };
        return InitialConfigurationRetriever;
    }(BasicDataRetriever));
    ApplicationCore.InitialConfigurationRetriever = InitialConfigurationRetriever;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var Activator = (function () {
        function Activator(themeManager, dataRetriever) {
            this.themeManager = themeManager;
            this.dataRetriever = dataRetriever;
        }
        Activator.prototype.Run = function () {
            this.dataRetriever.Build();
        };
        return Activator;
    }());
    function Run() {
        var themeManager;
        themeManager = new ApplicationCore.MyThemeManager();
        var dataRetriever;
        dataRetriever = new ApplicationCore.InitialConfigurationRetriever({});
        var activator;
        activator = new Activator(themeManager, dataRetriever);
        activator.Run();
        ApplicationCore.Alert("ApplicationCore running!");
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));
//# sourceMappingURL=MyApplicationCore.js.map
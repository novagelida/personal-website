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
        }
        return MyThemeManager;
    }());
    ApplicationCore.MyThemeManager = MyThemeManager;
})(ApplicationCore || (ApplicationCore = {}));
var PathManager;
(function (PathManager) {
    var root = "./";
    var data = "data/";
    function Root() { return root; }
    PathManager.Root = Root;
    var Data = (function () {
        function Data() {
        }
        Data.Root = root + data;
        Data.InitialConfiguration = root + data + "InitialConfiguration.json";
        return Data;
    }());
    PathManager.Data = Data;
})(PathManager || (PathManager = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var InitialConfigurationModel = (function () {
        function InitialConfigurationModel() {
        }
        InitialConfigurationModel.prototype.Initialise = function (parsedResponse) {
            this.brandName = parsedResponse["BrandName"];
            this.channelNames = parsedResponse["Channels"];
            this.motto = parsedResponse["Motto"];
            this.lang = parsedResponse["Lang"];
            this.description = parsedResponse["Description"];
            this.credits = parsedResponse["Credits"];
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
        BasicDataRetriever.prototype.ProcessResponse = function (parsedResponse) {
            this.modelToFill.Initialise(parsedResponse);
        };
        BasicDataRetriever.prototype.BuildRequestListener = function () {
            var scope = this;
            function requestListener() {
                var parsedResponse = JSON.parse(this.responseText);
                scope.ProcessResponse(parsedResponse);
            }
            return requestListener;
        };
        BasicDataRetriever.prototype.PerformRequest = function (requestToWrap) {
            var temporary_request = new XMLHttpRequest();
            temporary_request.onload = this.BuildRequestListener();
            temporary_request.open(GET, requestToWrap.Resource, true);
            temporary_request.send();
            return this.modelToFill;
        };
        return BasicDataRetriever;
    }());
    var InitialConfigurationBuilder = (function (_super) {
        __extends(InitialConfigurationBuilder, _super);
        function InitialConfigurationBuilder(model) {
            _super.call(this, model);
        }
        InitialConfigurationBuilder.prototype.Build = function () {
            var initialConfigurationRequest = { Resource: PathManager.Data.InitialConfiguration };
            return _super.prototype.PerformRequest.call(this, initialConfigurationRequest);
        };
        return InitialConfigurationBuilder;
    }(BasicDataRetriever));
    ApplicationCore.InitialConfigurationBuilder = InitialConfigurationBuilder;
})(ApplicationCore || (ApplicationCore = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var Activator = (function () {
        function Activator(themeManager) {
            this.themeManager = themeManager;
        }
        Activator.prototype.BuildInitialConfigurationModel = function () {
            var initialConfigurationModel = new ApplicationCore.InitialConfigurationModel();
            var initialConfigurationBuilder = new ApplicationCore.InitialConfigurationBuilder(initialConfigurationModel);
            initialConfigurationBuilder.Build();
        };
        Activator.prototype.Run = function () {
            this.BuildInitialConfigurationModel();
        };
        return Activator;
    }());
    function Run() {
        var themeManager;
        themeManager = new ApplicationCore.MyThemeManager();
        var activator;
        activator = new Activator(themeManager);
        activator.Run();
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));
//# sourceMappingURL=MyApplicationCore.js.map
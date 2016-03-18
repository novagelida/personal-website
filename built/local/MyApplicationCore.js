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
            ApplicationCore.Notifier.ApplicationActivator.InitialiseApplicationPresenter();
        };
        InitialConfigurationModel.prototype.GetBrandName = function () { return this.brandName; };
        InitialConfigurationModel.prototype.GetChannelNames = function () { return this.channelNames; };
        InitialConfigurationModel.prototype.GetMotto = function () { return this.motto; };
        InitialConfigurationModel.prototype.GetLanguage = function () { return this.lang; };
        InitialConfigurationModel.prototype.GetDescription = function () { return this.description; };
        InitialConfigurationModel.prototype.GetCredits = function () { return this.credits; };
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
            _super.prototype.PerformRequest.call(this, initialConfigurationRequest);
        };
        return InitialConfigurationBuilder;
    }(BasicDataRetriever));
    ApplicationCore.InitialConfigurationBuilder = InitialConfigurationBuilder;
})(ApplicationCore || (ApplicationCore = {}));
var Platform;
(function (Platform) {
    var AttributeNames = (function () {
        function AttributeNames() {
        }
        AttributeNames.LANG = "lang";
        return AttributeNames;
    }());
    Platform.AttributeNames = AttributeNames;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var TagNames = (function () {
        function TagNames() {
        }
        TagNames.HTML = "html";
        return TagNames;
    }());
    Platform.TagNames = TagNames;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    function CreateMetaTag() {
        return document.createElement("meta");
    }
    var ApplicationPresenter = (function () {
        function ApplicationPresenter(data) {
            this.data = data;
        }
        ApplicationPresenter.prototype.Activate = function () {
            var htmlTag = document.getElementsByTagName(Platform.TagNames.HTML)[0];
            htmlTag.setAttribute(Platform.AttributeNames.LANG, this.data.GetLanguage());
            var descriptionMetaTag = CreateMetaTag();
            descriptionMetaTag.setAttribute("name", "description");
            descriptionMetaTag.setAttribute("content", this.data.GetDescription());
            var authorMetaTag = CreateMetaTag();
            authorMetaTag.setAttribute("name", "author");
            authorMetaTag.setAttribute("content", this.data.GetCredits());
            var websiteTitle = document.createElement("title");
            websiteTitle.innerText = this.data.GetBrandName();
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(authorMetaTag);
            head.appendChild(descriptionMetaTag);
            head.appendChild(websiteTitle);
        };
        return ApplicationPresenter;
    }());
    Platform.ApplicationPresenter = ApplicationPresenter;
})(Platform || (Platform = {}));
var ApplicationCore;
(function (ApplicationCore) {
    var Activator = (function () {
        function Activator(themeManager) {
            this.themeManager = themeManager;
        }
        Activator.prototype.BuildInitialConfigurationModel = function () {
            this.initialConfigurationModel = new ApplicationCore.InitialConfigurationModel();
            var initialConfigurationBuilder = new ApplicationCore.InitialConfigurationBuilder(this.initialConfigurationModel);
            initialConfigurationBuilder.Build();
        };
        Activator.prototype.InitialiseApplicationPresenter = function () {
            this.applicationPresenter = new Platform.ApplicationPresenter(this.initialConfigurationModel);
            this.applicationPresenter.Activate();
        };
        Activator.prototype.Run = function () {
            this.BuildInitialConfigurationModel();
        };
        return Activator;
    }());
    var Notifier = (function () {
        function Notifier() {
        }
        return Notifier;
    }());
    ApplicationCore.Notifier = Notifier;
    function Run() {
        var themeManager;
        themeManager = new ApplicationCore.MyThemeManager();
        var activator;
        activator = new Activator(themeManager);
        Notifier.ApplicationActivator = activator;
        activator.Run();
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));
//# sourceMappingURL=MyApplicationCore.js.map
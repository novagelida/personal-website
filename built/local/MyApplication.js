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
    function ReportInteraction(interactionName) {
        InteractionManager.ManageInteraction(interactionName);
    }
    Platform.ReportInteraction = ReportInteraction;
    var InteractionManager = (function () {
        function InteractionManager() {
        }
        InteractionManager.AddToInteractionMap = function (interactionName, interactionHandler, scope) {
            this.interactionMap[interactionName] = { Scope: scope, Handler: interactionHandler };
        };
        InteractionManager.ManageInteraction = function (interactionName) {
            var handlerModel = this.interactionMap[interactionName];
            handlerModel.Handler(handlerModel.Scope);
        };
        InteractionManager.interactionMap = {};
        return InteractionManager;
    }());
    Platform.InteractionManager = InteractionManager;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    function SetCookie(name, value, expirationData, path) {
        if (path === void 0) { path = "path=/"; }
        document.cookie = name + "=" + value + "; expires=" + expirationData + "; " + path;
    }
    Platform.SetCookie = SetCookie;
    function UnSetCookie(name, value, path) {
        if (path === void 0) { path = "path=/"; }
        document.cookie = name + "=" + value + "; " + path;
    }
    Platform.UnSetCookie = UnSetCookie;
    var PlatformComponent = (function () {
        function PlatformComponent(classNames) {
            if (classNames != "")
                this.classNames = classNames.split(" ");
        }
        PlatformComponent.prototype.GetTargetElement = function () {
            return this.targetElement;
        };
        PlatformComponent.prototype.Initialise = function () {
            if (this.classNames == undefined) {
                return;
            }
            for (var i = 0; i < this.classNames.length; ++i) {
                this.targetElement.classList.add(this.classNames[i]);
            }
        };
        PlatformComponent.prototype.Show = function (scope) {
            if (scope === void 0) { scope = this; }
            scope.targetElement.classList.add("displayNome");
        };
        PlatformComponent.prototype.Hide = function (scope) {
            if (scope === void 0) { scope = this; }
            scope.targetElement.classList.remove("displayNome");
        };
        return PlatformComponent;
    }());
    Platform.PlatformComponent = PlatformComponent;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var HeaderComponent = (function (_super) {
        __extends(HeaderComponent, _super);
        function HeaderComponent(data) {
            _super.call(this, "");
            this.data = data;
        }
        HeaderComponent.prototype.Initialise = function () {
            this.descriptionMetaTag = Platform.CreateMetaTag(Platform.AttributeNamesVO.DESCRIPTION, this.data.GetDescription());
            this.authorMetaTag = Platform.CreateMetaTag(Platform.AttributeNamesVO.AUTHOR, this.data.GetCredits());
            this.targetElement = document.getElementsByTagName(Platform.TagNames.HEAD)[0];
            this.InitialiseTitle();
        };
        HeaderComponent.prototype.InitialiseTitle = function () {
            this.title = document.createElement(Platform.TagNames.TITLE);
            this.title.innerText = this.data.GetBrandName();
            this.targetElement.appendChild(this.authorMetaTag);
            this.targetElement.appendChild(this.descriptionMetaTag);
            this.targetElement.appendChild(this.title);
        };
        return HeaderComponent;
    }(Platform.PlatformComponent));
    Platform.HeaderComponent = HeaderComponent;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var LinkToModalAnchorElement = (function (_super) {
        __extends(LinkToModalAnchorElement, _super);
        function LinkToModalAnchorElement(modalId, content) {
            _super.call(this, "");
            this.modalId = modalId;
            this.content = content;
        }
        LinkToModalAnchorElement.prototype.Initialise = function () {
            this.targetElement = document.createElement(Platform.TagNames.ANCHOR);
            this.targetElement.setAttribute(Platform.AttributeNamesVO.HREF, "#" + this.modalId);
            this.targetElement.setAttribute(Platform.AttributeNamesVO.DATATOGGLE, "modal");
            this.targetElement.textContent = this.content;
        };
        return LinkToModalAnchorElement;
    }(Platform.PlatformComponent));
    Platform.LinkToModalAnchorElement = LinkToModalAnchorElement;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var InteractionReporterAnchorElement = (function (_super) {
        __extends(InteractionReporterAnchorElement, _super);
        function InteractionReporterAnchorElement(interactionName, className) {
            _super.call(this, className);
            this.interactionName = interactionName;
        }
        InteractionReporterAnchorElement.prototype.CreateInteractionReporterString = function () {
            return "Platform.ReportInteraction(`" + this.interactionName + "`);";
        };
        InteractionReporterAnchorElement.prototype.SetContent = function (content) {
            this.targetElement.appendChild(content.GetTargetElement());
        };
        InteractionReporterAnchorElement.prototype.Initialise = function () {
            this.targetElement = document.createElement(Platform.TagNames.ANCHOR);
            this.targetElement.className = this.classNames[0];
            this.targetElement.setAttribute(Platform.AttributeNamesVO.HREF, Platform.JavascriptVO.JAVASCRIPT_VOID);
            this.targetElement.setAttribute(Platform.AttributeNamesVO.ON_CLICK, this.CreateInteractionReporterString());
        };
        return InteractionReporterAnchorElement;
    }(Platform.PlatformComponent));
    Platform.InteractionReporterAnchorElement = InteractionReporterAnchorElement;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var ClosingCrossComponent = (function (_super) {
        __extends(ClosingCrossComponent, _super);
        function ClosingCrossComponent() {
            _super.call(this, "fa fa-times");
        }
        ClosingCrossComponent.prototype.Initialise = function () {
            this.targetElement = document.createElement("i");
            _super.prototype.Initialise.call(this);
        };
        return ClosingCrossComponent;
    }(Platform.PlatformComponent));
    Platform.ClosingCrossComponent = ClosingCrossComponent;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var BannerData = {
        CLASS: "cookiebanner",
        ID: "cookie-law",
        CLOSE_BUTTON_CLASS_NAME: "close-cookies-banner",
        ANCHOR_CLASS_NAME: "privacy and cookies policy",
        BANNER_CONTENT: "My website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in my "
    };
    var CookieBannerComponent = (function (_super) {
        __extends(CookieBannerComponent, _super);
        function CookieBannerComponent() {
            _super.call(this, BannerData.CLASS);
            this.bannerId = BannerData.ID;
        }
        CookieBannerComponent.prototype.Initialise = function () {
            this.targetElement = document.createElement(Platform.TagNames.DIV);
            this.targetElement.setAttribute(Platform.AttributeNamesVO.ID, this.bannerId);
            var bannerCloseButton = new Platform.InteractionReporterAnchorElement(Platform.InteractionVO.REMOVE_COOKIE_BANNER, BannerData.CLOSE_BUTTON_CLASS_NAME);
            bannerCloseButton.Initialise();
            var cross = new Platform.ClosingCrossComponent();
            cross.Initialise();
            bannerCloseButton.SetContent(cross);
            var linkToPolicy = new Platform.LinkToModalAnchorElement(Platform.ModalIdsVO.COOKIES_POLICY, BannerData.ANCHOR_CLASS_NAME);
            linkToPolicy.Initialise();
            var bannerParagraph = document.createElement(Platform.TagNames.P);
            bannerParagraph.textContent = BannerData.BANNER_CONTENT;
            bannerParagraph.appendChild(linkToPolicy.GetTargetElement());
            bannerParagraph.appendChild(bannerCloseButton.GetTargetElement());
            this.targetElement.appendChild(bannerParagraph);
            _super.prototype.Initialise.call(this);
        };
        return CookieBannerComponent;
    }(Platform.PlatformComponent));
    Platform.CookieBannerComponent = CookieBannerComponent;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var NavBarComponent = (function (_super) {
        __extends(NavBarComponent, _super);
        function NavBarComponent() {
            _super.call(this, "");
            this.template = new Platform.NavBarTemplate();
        }
        NavBarComponent.prototype.Initialise = function () {
            this.targetElement = document.getElementsByClassName(Platform.ApplicationPlatformClassNames.NAV_BAR)[0];
            this.targetElement.innerHTML = this.template.getHTMLTemplate();
            _super.prototype.Initialise.call(this);
        };
        return NavBarComponent;
    }(Platform.PlatformComponent));
    Platform.NavBarComponent = NavBarComponent;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var JavascriptVO = (function () {
        function JavascriptVO() {
        }
        Object.defineProperty(JavascriptVO, "JAVASCRIPT_VOID", {
            get: function () { return "javascript:void(0);"; },
            enumerable: true,
            configurable: true
        });
        return JavascriptVO;
    }());
    Platform.JavascriptVO = JavascriptVO;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var InteractionVO = (function () {
        function InteractionVO() {
        }
        Object.defineProperty(InteractionVO, "REMOVE_COOKIE_BANNER", {
            get: function () { return "REMOVE_COOKIE_BANNER"; },
            enumerable: true,
            configurable: true
        });
        return InteractionVO;
    }());
    Platform.InteractionVO = InteractionVO;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var ModalIdsVO = (function () {
        function ModalIdsVO() {
        }
        Object.defineProperty(ModalIdsVO, "COOKIES_POLICY", {
            get: function () { return "cookiesPolicy"; },
            enumerable: true,
            configurable: true
        });
        return ModalIdsVO;
    }());
    Platform.ModalIdsVO = ModalIdsVO;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var AttributeNamesVO = (function () {
        function AttributeNamesVO() {
        }
        Object.defineProperty(AttributeNamesVO, "LANG", {
            get: function () { return "lang"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "NAME", {
            get: function () { return "name"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "CONTENT", {
            get: function () { return "content"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "DESCRIPTION", {
            get: function () { return "description"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "AUTHOR", {
            get: function () { return "author"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "ID", {
            get: function () { return "id"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "HREF", {
            get: function () { return "href"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "DATATOGGLE", {
            get: function () { return "data-toggle"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AttributeNamesVO, "ON_CLICK", {
            get: function () { return "onclick"; },
            enumerable: true,
            configurable: true
        });
        return AttributeNamesVO;
    }());
    Platform.AttributeNamesVO = AttributeNamesVO;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var TagNames = (function () {
        function TagNames() {
        }
        Object.defineProperty(TagNames, "HTML", {
            get: function () { return "html"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "META", {
            get: function () { return "meta"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "TITLE", {
            get: function () { return "title"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "HEAD", {
            get: function () { return "head"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "DIV", {
            get: function () { return "div"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "ANCHOR", {
            get: function () { return "a"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "P", {
            get: function () { return "p"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TagNames, "NAV", {
            get: function () { return "nav"; },
            enumerable: true,
            configurable: true
        });
        return TagNames;
    }());
    Platform.TagNames = TagNames;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var ApplicationPlatformClassNames = (function () {
        function ApplicationPlatformClassNames() {
        }
        ApplicationPlatformClassNames.NAV_BAR = "navbar";
        return ApplicationPlatformClassNames;
    }());
    Platform.ApplicationPlatformClassNames = ApplicationPlatformClassNames;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var NavBarTemplate = (function () {
        function NavBarTemplate() {
        }
        NavBarTemplate.prototype.getHTMLTemplate = function () {
            return "<div class= 'container'>" +
                "<div class='navbar-header page-scroll'>" +
                "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>" +
                "<span class='sr-only'> Toggle navigation</span>" +
                "<span class='icon-bar'> </span>" +
                "<span class='icon-bar'> </span>" +
                "<span class='icon-bar'> </span>" +
                "</button>" +
                "<a class='navbar-brand' href= '#page-top'> Rosario Crisci</a>" +
                "</div>" +
                "<div class='collapse navbar-collapse' id= 'bs-example-navbar-collapse-1'>" +
                "<ul class='nav navbar-nav navbar-right'>" +
                "<li class='hidden'>" +
                "<a href='#page-top'> </a>" +
                "</li>" +
                "<li class='page-scroll'>" +
                "<a href='#portfolio'> Portfolio </a>" +
                "</li>" +
                "<li class='page-scroll'>" +
                "<a href='#about' > About </a>" +
                "</li>" +
                "<li class='page-scroll'>" +
                "<a href='#contact'> Contact </a>" +
                "</li>" +
                "</ul>" +
                "</div>" +
                "</div>";
        };
        return NavBarTemplate;
    }());
    Platform.NavBarTemplate = NavBarTemplate;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    function CreateMetaTag(name, content) {
        var meta = document.createElement(Platform.TagNames.META);
        meta.setAttribute(Platform.AttributeNamesVO.NAME, name);
        meta.setAttribute(Platform.AttributeNamesVO.CONTENT, content);
        return meta;
    }
    Platform.CreateMetaTag = CreateMetaTag;
    var AbstractApplicationPresenter = (function () {
        function AbstractApplicationPresenter(data) {
            this.data = data;
        }
        AbstractApplicationPresenter.prototype.Activate = function () {
            this.Render();
        };
        return AbstractApplicationPresenter;
    }());
    Platform.AbstractApplicationPresenter = AbstractApplicationPresenter;
})(Platform || (Platform = {}));
var Platform;
(function (Platform) {
    var ApplicationPresenter = (function (_super) {
        __extends(ApplicationPresenter, _super);
        function ApplicationPresenter(data) {
            _super.call(this, data);
            this.headerComponent = new Platform.HeaderComponent(this.GetData());
            this.navBar = new Platform.NavBarComponent();
            this.cookieBanner = new Platform.CookieBannerComponent();
            Platform.InteractionManager.AddToInteractionMap(Platform.InteractionVO.REMOVE_COOKIE_BANNER, this.RemoveCookieBannerHandler, this);
        }
        ApplicationPresenter.prototype.RemoveCookieBannerHandler = function (scope) {
            scope.navBar.GetTargetElement().removeChild(scope.cookieBanner.GetTargetElement());
        };
        ApplicationPresenter.prototype.GetData = function () {
            return this.data;
        };
        ApplicationPresenter.prototype.SetLangOnHtmlTag = function () {
            var htmlTag = document.getElementsByTagName(Platform.TagNames.HTML)[0];
            htmlTag.setAttribute(Platform.AttributeNamesVO.LANG, this.GetData().GetLanguage());
        };
        ApplicationPresenter.prototype.Render = function () {
            this.SetLangOnHtmlTag();
            this.headerComponent.Initialise();
            this.navBar.Initialise();
            this.cookieBanner.Initialise();
            this.navBar.GetTargetElement().appendChild(this.cookieBanner.GetTargetElement());
        };
        return ApplicationPresenter;
    }(Platform.AbstractApplicationPresenter));
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

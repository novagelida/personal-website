namespace Platform{

	export class ApplicationPresenter extends AbstractApplicationPresenter
	{
		private headerComponent: HeaderComponent;
		private cookieBanner: CookieBannerComponent;
		private navBar: NavBarComponent;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super(data);
			this.headerComponent = new HeaderComponent(this.GetData());
			this.navBar = new NavBarComponent(ApplicationPlatformClassNames.NAV_BAR + " navbar-default navbar-fixed-top");
			this.cookieBanner = new CookieBannerComponent();

			InteractionManager.AddToInteractionMap(InteractionVO.REMOVE_COOKIE_BANNER, this.RemoveCookieBannerHandler, this);
		}

		private RemoveCookieBannerHandler(scope: ApplicationPresenter){
			scope.navBar.GetTargetElement().removeChild(scope.cookieBanner.GetTargetElement());
		}

		private GetData(): ApplicationCore.InitialConfigurationModel{
			return <ApplicationCore.InitialConfigurationModel>this.data;
		}

		private SetLangOnHtmlTag(){
			var htmlTag = document.getElementsByTagName(TagNames.HTML)[0];
			htmlTag.setAttribute(AttributeNamesVO.LANG, this.GetData().GetLanguage());
		}

		Render(){
			this.SetLangOnHtmlTag();
			this.headerComponent.Initialise();
			this.navBar.Initialise();
			this.cookieBanner.Initialise();
			var body = document.getElementsByTagName("body")[0];
			body.insertBefore(this.navBar.GetTargetElement(), body.childNodes[0]);
			this.navBar.GetTargetElement().appendChild(this.cookieBanner.GetTargetElement());
		}
	}
}
namespace Platform{

	export class ApplicationPresenter extends AbstractApplicationPresenter
	{
		private headerComponent: HeaderComponent;
		private cookieBanner: CookieBannerComponent;
		private navBar: Element;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super(data);
			this.headerComponent = new HeaderComponent(this.GetData());
			this.navBar = document.getElementsByClassName(ApplicationPlatformClassNames.NAV_BAR)[0];
			this.cookieBanner = new CookieBannerComponent(this.navBar);

			InteractionManager.AddToInteractionMap(InteractionVO.REMOVE_COOKIE_BANNER, this.RemoveCookieBannerHandler, this);
		}

		private RemoveCookieBannerHandler(scope: ApplicationPresenter){
			scope.navBar.removeChild(scope.cookieBanner.GetTargetElement());
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
			this.cookieBanner.Initialise();
			
			this.navBar.appendChild(this.cookieBanner.GetTargetElement());
		}
	}
}
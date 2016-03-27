namespace Platform{

	export class ApplicationPresenter extends AbstractApplicationPresenter
	{
		private headerComponent: HeaderComponent;
		private cookieBanner: CookieBannerComponent;
		private navBar: NavBarComponent;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super(data);
			this.headerComponent = new HeaderComponent(this.GetData());
			this.navBar = new NavBarComponent();
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
			this.navBar.AppendChild(this.cookieBanner);
		}
	}
}
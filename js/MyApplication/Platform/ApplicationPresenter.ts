namespace Platform{

	export class ApplicationPresenter extends AbstractApplicationPresenter
	{
		private headerComponent: HeaderComponent;
		private cookieBanner: CookieBannerComponent;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super(data);
			this.headerComponent = new HeaderComponent(this.GetData());
			this.cookieBanner = new CookieBannerComponent(document.getElementsByClassName("navbar")[0]);
		}

		private GetData(): ApplicationCore.InitialConfigurationModel{
			return <ApplicationCore.InitialConfigurationModel>this.data;
		}

		Render(){

			var htmlTag = document.getElementsByTagName(TagNames.HTML)[0];
			htmlTag.setAttribute(AttributeNames.LANG, this.GetData().GetLanguage());

			this.headerComponent.Initialise();
			this.headerComponent.Show();
			this.cookieBanner.Initialise();
			this.cookieBanner.Show();
		}
	}
}
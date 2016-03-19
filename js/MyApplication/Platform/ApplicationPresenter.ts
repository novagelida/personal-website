namespace Platform{

	export class ApplicationPresenter extends AbstractApplicationPresenter
	{
		private headerComponent: HeaderComponent;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super(data);
			this.headerComponent = new HeaderComponent(this.GetData());
		}

		private GetData(): ApplicationCore.InitialConfigurationModel{
			return <ApplicationCore.InitialConfigurationModel>this.data;
		}

		Render(){

			var htmlTag = document.getElementsByTagName(TagNames.HTML)[0];
			htmlTag.setAttribute(AttributeNames.LANG, this.GetData().GetLanguage());

			this.headerComponent.Initialise();
			this.headerComponent.Show();
		}
	}
}
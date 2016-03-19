namespace Platform{
	export class HeaderComponent implements IPlatformComponent
	{
		private descriptionMetaTag: HTMLElement;
		private authorMetaTag: HTMLElement;
		private title: HTMLElement;
		private head: Element;
		private data: ApplicationCore.InitialConfigurationModel;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			this.data = data;
		}

		Initialise(){
			this.descriptionMetaTag = CreateMetaTag(AttributeNames.DESCRIPTION, this.data.GetDescription());
			this.authorMetaTag = CreateMetaTag(AttributeNames.AUTHOR, this.data.GetCredits());

			this.InitialiseTitle();

			this.head = document.getElementsByTagName(TagNames.HEAD)[0];
		}

		private InitialiseTitle()
		{
			this.title = document.createElement(TagNames.TITLE);
			this.title.innerText = this.data.GetBrandName();
		}

		GetTemplate()
		{
			return "";
		}

		Hide(){}

		Show(){
			this.head.appendChild(this.authorMetaTag);
			this.head.appendChild(this.descriptionMetaTag);
			this.head.appendChild(this.title);
		}
	}
}
namespace Platform{
	export class HeaderComponent extends PlatformComponent
	{
		private descriptionMetaTag: HTMLElement;
		private authorMetaTag: HTMLElement;
		private title: HTMLElement;
		private data: ApplicationCore.InitialConfigurationModel;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super("");
			this.data = data;
		}

		Initialise(){
			this.descriptionMetaTag = CreateMetaTag(AttributeNamesVO.DESCRIPTION, this.data.GetDescription());
			this.authorMetaTag = CreateMetaTag(AttributeNamesVO.AUTHOR, this.data.GetCredits());

			this.targetElement = document.getElementsByTagName(TagNames.HEAD)[0];

			this.InitialiseTitle();
		}

		private InitialiseTitle()
		{
			this.title = document.createElement(TagNames.TITLE);
			this.title.innerText = this.data.GetBrandName();

			this.targetElement.appendChild(this.authorMetaTag);
			this.targetElement.appendChild(this.descriptionMetaTag);
			this.targetElement.appendChild(this.title);
		}
	}
}
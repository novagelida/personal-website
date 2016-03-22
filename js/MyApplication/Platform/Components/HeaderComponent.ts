namespace Platform{
	export class HeaderComponent extends PlatformComponent
	{
		private descriptionMetaTag: HTMLElement;
		private authorMetaTag: HTMLElement;
		private title: HTMLElement;
		private head: Element;
		private data: ApplicationCore.InitialConfigurationModel;

		constructor(data: ApplicationCore.InitialConfigurationModel){
			super("");
			this.data = data;
		}

		Initialise(){
			this.descriptionMetaTag = CreateMetaTag(AttributeNamesVO.DESCRIPTION, this.data.GetDescription());
			this.authorMetaTag = CreateMetaTag(AttributeNamesVO.AUTHOR, this.data.GetCredits());

			this.head = document.getElementsByTagName(TagNames.HEAD)[0];

			this.InitialiseTitle();
		}

		private InitialiseTitle()
		{
			this.title = document.createElement(TagNames.TITLE);
			this.title.innerText = this.data.GetBrandName();

			this.head.appendChild(this.authorMetaTag);
			this.head.appendChild(this.descriptionMetaTag);
			this.head.appendChild(this.title);
		}

		GetTargetElement()
		{
			return this.head;
		}
	}
}
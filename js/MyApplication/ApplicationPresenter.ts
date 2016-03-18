namespace Platform
{
	export interface IApplicationPresenter{
		Activate(): void;
	}

	function CreateMetaTag()
	{
		return document.createElement("meta");
	}

	export class ApplicationPresenter implements IApplicationPresenter
	{
		private data: ApplicationCore.InitialConfigurationModel;

		constructor(data: ApplicationCore.InitialConfigurationModel) {
			this.data = data;
		}

		Activate(){
			var htmlTag = document.getElementsByTagName(TagNames.HTML)[0];
			htmlTag.setAttribute(AttributeNames.LANG, this.data.GetLanguage());

			//TODO: Create a head component to inject in the dome containing the following code
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

		}
	}
}
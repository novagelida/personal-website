namespace Platform {

	export interface IListElementModel {
		ClassName: string;
	}

	export interface IListElementBuilder {
		Build(data: IListElementModel): PlatformComponent;
	}

	export abstract class ListElement extends PlatformComponent {
		private data: IListElementModel;
		private content: PlatformComponent;
		private elementBuilder: IListElementBuilder;

		constructor(data: IListElementModel, elementBuilder: IListElementBuilder){
			super(document.createElement(TagNames.LI), data.ClassName)
			this.elementBuilder = elementBuilder;
			this.data = data;
		}

		Initialise(){
			super.Initialise();
			this.content = this.elementBuilder.Build(this.data);
			this.targetElement.appendChild(this.content.GetTargetElement());
		}
	}
}
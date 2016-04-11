namespace Platform{
	export abstract class UnorderedListComponent<T extends ListElement> extends PlatformComponent {
		private listElementType: { new (data: IListElementModel): T; };
		private lenght: number;
		private data: IListElementModel[];

		get Lenght() { return this.lenght;}

		constructor(classNames: string = "", listElementType: { new (data: IListElementModel): T; }) {
			super(document.createElement(TagNames.UL), classNames);
			this.lenght = 0;
			this.data = [];
			this.listElementType =  listElementType;
		}

		AppendListEntry(newEntry: ListElement) {
			this.targetElement.appendChild(newEntry.GetTargetElement());
		}

		private CreateListElement(data: IListElementModel): ListElement {
			var listElement = new this.listElementType(data);
			listElement.Initialise();
			return listElement;
		}

		SetData(data: IListElementModel[]){
			this.data = data;
			this.lenght = data.length;

			for (var i = 0; i < this.lenght; ++i){
				this.AppendListEntry(this.CreateListElement(data[i]));
			}
		}
	}
}
namespace Platform{
	
	class ChannelListElementBuilder implements IListElementBuilder{
		Build(data: IChannelElementModel) {
			var element = new AnchorElement(data.HRef, data.TextContent);
			element.Initialise();
			return element;
		}
	}

	export class ChannelListElement extends ListElement{
		constructor(data: IListElementModel){
			super(data, new ChannelListElementBuilder());
		}
	}
}
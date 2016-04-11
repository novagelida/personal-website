namespace Platform{
	class AnchorElement extends PlatformComponent{
		constructor(href: string, textContent: string = ""){
			var anchor = document.createElement(TagNames.ANCHOR)
			anchor.setAttribute(AttributeNamesVO.HREF, href);
			anchor.textContent = textContent;
			super(anchor);
		}
	}

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
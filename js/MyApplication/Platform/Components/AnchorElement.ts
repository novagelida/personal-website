namespace Platform{
	export interface IAnchorElementModel {
		HRef: string;
		TextContent: string;
	}
	
	export class AnchorElement extends PlatformComponent{
		constructor(href: string, textContent: string = ""){
			var anchor = document.createElement(TagNames.ANCHOR)
			anchor.setAttribute(AttributeNamesVO.HREF, href);
			anchor.textContent = textContent;
			super(anchor);
		}
	}
}
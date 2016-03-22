namespace Platform{
	export class LinkToModalAnchorElement extends PlatformComponent{
		private modalId: string;
		private content: string;

		constructor(modalId: string, content: string){
			super("");
			this.modalId = modalId;
			this.content = content;
		}

		Initialise(){
			this.targetElement = document.createElement(TagNames.ANCHOR);
			this.targetElement.setAttribute(AttributeNamesVO.HREF, "#" + this.modalId);
			this.targetElement.setAttribute(AttributeNamesVO.DATATOGGLE, "modal");
			this.targetElement.textContent = this.content;
		}
	}
}
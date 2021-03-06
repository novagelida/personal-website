namespace Platform{
	export class LinkToPageTargetAnchorElement extends PlatformComponent {
		private content: string;
		private pageTarget: string;

		constructor(pageTarget: string, content: string, className: string = "") {
			super(document.createElement(TagNames.ANCHOR));
			this.content = content;
			this.pageTarget = pageTarget;
			this.targetElement.className = className;
		}

		Initialise(){
			this.targetElement.setAttribute(AttributeNamesVO.HREF, "#" + this.pageTarget);
			this.targetElement.textContent = this.content;
		}
	}

	export class LinkToModalAnchorElement extends LinkToPageTargetAnchorElement {

		constructor(modalId: string, content: string){
			super(modalId, content);
		}

		Initialise(){
			super.Initialise();
			this.targetElement.setAttribute(AttributeNamesVO.DATA_TOGGLE, "modal");
		}
	}
}
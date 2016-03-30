namespace Platform{
	export class NavBarHeaderComponent extends PlatformComponent{
		private template: ITemplate;
		private button: Element;
		private linkToTopPage: Element;

		constructor(target: Element){
			super(target);
			this.template = new BurgerMenuTemplate();
		}

		private InitialiseFromTemplate(): void {
			this.button = document.createElement(TagNames.BUTTON)
			this.button.classList.add('navbar-toggle');
			this.button.setAttribute(AttributeNamesVO.TYPE, 'button');
			this.button.setAttribute(AttributeNamesVO.DATA_TOGGLE, 'collapse');
			this.button.setAttribute(AttributeNamesVO.DATA_TARGET, '#bs-example-navbar-collapse-1');

			this.button.innerHTML = this.template.getHTMLTemplate();
		}

		Initialise() {
			super.Initialise();
			var anchor = new LinkToPageTargetAnchorElement('page-top', "Rosario Crisci", 'navbar-brand');
			anchor.Initialise();
			this.linkToTopPage = anchor.GetTargetElement();

			this.InitialiseFromTemplate();

			this.targetElement.appendChild(this.button);
			this.targetElement.appendChild(this.linkToTopPage);
		}
	}
}
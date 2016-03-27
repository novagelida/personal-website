namespace Platform{
	export class NavBarComponent extends PlatformComponent{
		private template: ITemplate;
		constructor(className: string){
			super(className);
			this.template = new NavBarTemplate();
		}

		Initialise(){
			this.targetElement = document.createElement(TagNames.NAV);
			this.targetElement.innerHTML = this.template.getHTMLTemplate();
			super.Initialise();
		}
	}
}
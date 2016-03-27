namespace Platform{
	export class NavBarComponent extends PlatformComponent{
		private template: ITemplate;
		constructor(){
			super("");
			this.template = new NavBarTemplate();
		}

		Initialise(){
			this.targetElement = document.getElementsByClassName(ApplicationPlatformClassNames.NAV_BAR)[0];
			this.targetElement.innerHTML = this.template.getHTMLTemplate();
			super.Initialise();
		}
	}
}
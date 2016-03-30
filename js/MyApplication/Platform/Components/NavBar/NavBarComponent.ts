namespace Platform{
	export class NavBarComponent extends PlatformComponent{
		private template: ITemplate;
		private navBarHeader: NavBarHeaderComponent;
		//private navBarCollapsible: ChannelListComponent;

		constructor(target: Element){
			super(target);
			this.template = new NavBarTemplate();
		}

		private InitialiseFromTemplate(): void{
			this.targetElement.innerHTML = this.template.getHTMLTemplate();
		}

		private InitialiseHeader(): void{
			var navBarHeaderComponent = this.targetElement.getElementsByClassName(NavBarClsVO.NAVBAR_HEADER)[0];
			this.navBarHeader = new NavBarHeaderComponent(navBarHeaderComponent);
			this.navBarHeader.Initialise();
		}

		private InitialiseCollapsiblePart(): void{
			//this.navBarCollapsible = new ChannelListComponent();
			//this.navBarCollapsible.Initialise();
			var navBarHeaderCollapsible = this.targetElement.getElementsByClassName(NavBarClsVO.NAVBAR_COLLAPSE)[0];
			//navBarHeaderCollapsible.appendChild(this.navBarCollapsible.GetTargetElement());
		}

		Initialise(){
			this.InitialiseFromTemplate();
			this.InitialiseHeader();
			this.InitialiseCollapsiblePart();
			super.Initialise();
		}
	}
}
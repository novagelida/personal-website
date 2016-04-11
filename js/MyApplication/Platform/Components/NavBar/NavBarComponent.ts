namespace Platform{

	export interface IChannelElementModel extends IListElementModel, IAnchorElementModel{}

	var channels = 
		[{ ClassName: "hidden", HRef: "#page-top", TextContent: "" },
		{ ClassName: "page-scroll", HRef: '#portfolio', TextContent: "Portfolio" },
		{ ClassName: "page-scroll", HRef: '#about', TextContent: "About" },
		{ ClassName: "page-scroll", HRef: '#contact', TextContent: "Contact" }];

	export class NavBarComponent extends PlatformComponent{
		private template: ITemplate;
		private navBarHeader: NavBarHeaderComponent;
		private navBarCollapsible: ChannelListComponent;

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
			var navBarCollapsible = this.targetElement.getElementsByClassName(NavBarClsVO.NAVBAR_COLLAPSE)[0];
			this.navBarCollapsible = new ChannelListComponent();
			this.navBarCollapsible.SetData(channels);
			this.navBarCollapsible.Initialise();

			navBarCollapsible.appendChild(this.navBarCollapsible.GetTargetElement());
		}

		Initialise(){
			super.Initialise();
			this.InitialiseFromTemplate();
			this.InitialiseHeader();
			this.InitialiseCollapsiblePart();
		}
	}
}
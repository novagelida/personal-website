namespace Platform{

	export interface IChannelElementModel extends IListElementModel, IAnchorElementModel{}

	var channels: Array<IChannelElementModel> = new Array<IChannelElementModel>();

	var channelA: IChannelElementModel = { ClassName: "hidden", HRef: "#page-top", TextContent: "" };
	var channelB: IChannelElementModel = { ClassName: "page-scroll", HRef: '#portfolio', TextContent: "Portfolio" };
	var channelC: IChannelElementModel = { ClassName: "page-scroll", HRef: '#about', TextContent: "About" };
	var channelD: IChannelElementModel = { ClassName: "page-scroll", HRef: '#contact', TextContent: "Contact" };

	channels.push(channelA);
	channels.push(channelB);
	channels.push(channelC);
	channels.push(channelD);

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
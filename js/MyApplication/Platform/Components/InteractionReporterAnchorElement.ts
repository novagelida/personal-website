namespace Platform{
	export class InteractionReporterAnchorElement extends PlatformComponent {
		private interactionName: string;
		private anchorTagContent: any;

		constructor(target: Element, interactionName: string, className: string){
			super(target,className);
			this.interactionName = interactionName;
		}

		private CreateInteractionReporterString() : string{
			return "Platform.ReportInteraction(`" + this.interactionName +"`);";
		}

		SetContent(content: PlatformComponent)
		{
			this.targetElement.appendChild(content.GetTargetElement());
		}

		Initialise(){
			this.targetElement.className = this.classNames[0];
			this.targetElement.setAttribute(AttributeNamesVO.HREF, JavascriptVO.JAVASCRIPT_VOID);
			this.targetElement.setAttribute(AttributeNamesVO.ON_CLICK, this.CreateInteractionReporterString())
		}
	}
}
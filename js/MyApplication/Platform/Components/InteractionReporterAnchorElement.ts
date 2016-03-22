namespace Platform{
	//TODO: Remove hardcoded string
	export class InteractionReporterAnchorElement extends PlatformComponent {
		private interactionName: string;
		private anchorTagContent: any;

		constructor(interactionName: string, className: string){
			super(className);
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
			//TODO: remove hardcoded strings
			this.targetElement = document.createElement(TagNames.ANCHOR);
			this.targetElement.className = this.classNames[0];
			//TODO: create a JavascripVO to store that hardcoded string
			this.targetElement.setAttribute(AttributeNamesVO.HREF, "javascript:void(0);");
			this.targetElement.setAttribute(AttributeNamesVO.ON_CLICK, this.CreateInteractionReporterString())
		}
	}
}
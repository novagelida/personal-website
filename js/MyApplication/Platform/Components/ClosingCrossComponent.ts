namespace Platform{
	export class ClosingCrossComponent extends PlatformComponent{

		constructor(){
			super("fa fa-times");
		}

		Initialise(){
			this.targetElement = document.createElement("i");
			super.Initialise();
		}

	}
}
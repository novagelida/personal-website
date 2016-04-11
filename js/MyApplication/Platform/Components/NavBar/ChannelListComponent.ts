namespace Platform {
	export class ChannelListComponent extends UnorderedListComponent<ChannelListElement> {
		constructor() {
			super("nav navbar-nav navbar-right", ChannelListElement);
		}

		Initialise(){
			super.Initialise();
		}
	}
}
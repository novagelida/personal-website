namespace Platform {
	export class ChannelListComponent extends UnorderedListComponent<ChannelListElement> {
		//TODO: The following can be a ComponentCollection
		//"<ul class='nav navbar-nav navbar-right'>" +
		//						"<li class='hidden'>" +
		//TODO: this can be a LinkToPageTargetAnchorElement
		//"<a href='#page-top'> </a>" +
		//						"</li>" +
		//						"<li class='page-scroll'>" +
		//"<a href='#portfolio'> Portfolio </a>" +
		//						"</li>" +
		//						"<li class='page-scrobll'>" +
		//"<a href='#about' > About </a>" +
		//						"</li>" +
		//						"<li class='page-scroll'>" +
		//"<a href='#contact'> Contact </a>" +
		//						"</li>" +
		//"</ul>"

		constructor() {
			super("nav navbar-nav navbar-right", ChannelListElement);
		}

		Initialise(){
			super.Initialise();
		}
	}
}
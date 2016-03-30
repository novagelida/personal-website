namespace Platform{
	export class NavBarTemplate implements ITemplate{
		public getHTMLTemplate(): string {
			return 	"<div class= 'container'>" +
						"<div class='navbar-header page-scroll'>" +
						"</div>" +

						"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>" +
							//TODO: The following can be a ComponentCollection
							"<ul class='nav navbar-nav navbar-right'>" +
								"<li class='hidden'>" +
									//TODO: this can be a LinkToPageTargetAnchorElement
									"<a href='#page-top'> </a>" +
								"</li>" +
								"<li class='page-scroll'>" +
									"<a href='#portfolio'> Portfolio </a>" +
								"</li>" +
								"<li class='page-scroll'>" +
									"<a href='#about' > About </a>" +
								"</li>" +
								"<li class='page-scroll'>" +
									"<a href='#contact'> Contact </a>" +
								"</li>" +
							"</ul>" +
						"</div>" +

					"</div>";
		}
	}
}
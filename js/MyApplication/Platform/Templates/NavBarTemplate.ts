namespace Platform{
	export class NavBarTemplate implements ITemplate{
		public getHTMLTemplate(): string {
			return 	"<div class= 'container'>" +
						"<div class='navbar-header page-scroll'>" +
							//TODO: create a burger menu component
							"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>" +
								"<span class='sr-only'> Toggle navigation</span>" +
								"<span class='icon-bar'> </span>" +
								"<span class='icon-bar'> </span>" +
								"<span class='icon-bar'> </span>" +
							"</button>" +
							//TODO: this can be a LinkToPageTargetAnchorElement
							"<a class='navbar-brand' href= '#page-top'> Rosario Crisci</a>" +

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
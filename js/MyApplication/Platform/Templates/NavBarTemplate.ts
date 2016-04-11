namespace Platform{
	export class NavBarTemplate implements ITemplate{
		public getHTMLTemplate(): string {
			return 	"<div class= 'container'>" +
						"<div class='navbar-header page-scroll'>" +
						"</div>" +

						"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>" +
							
						"</div>" +

					"</div>";
		}
	}
}
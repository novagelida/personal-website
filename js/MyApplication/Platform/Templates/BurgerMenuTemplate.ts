namespace Platform
{
	export class BurgerMenuTemplate implements ITemplate
	{
		public getHTMLTemplate(): string {
			return "<span class='sr-only'> Toggle navigation</span>" +
					"<span class='icon-bar'> </span>" +
					"<span class='icon-bar'> </span>" +
					"<span class='icon-bar'> </span>";
		}
	}
}
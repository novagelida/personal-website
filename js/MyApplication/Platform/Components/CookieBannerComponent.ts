namespace Platform {
	export class CookieBannerComponent implements IPlatformComponent {
		private parentElement: Element;
		private cookieBannerElement: Element;

		constructor(fatherElement: Element) {
			this.parentElement = fatherElement;
			//TODO: remove hardcoded string
			InteractionManager.AddToInteractionMap("REMOVE_COOKIE_BANNER", this.Hide, this);
		}

		GetParent(){
			return this.parentElement;
		}

		GetElement(){
			return this.cookieBannerElement;
		}

		GetTemplate() {
			return "";
		}

		Initialise() {
			//TODO: create a template for this mess and remove hardcoded strings
			this.cookieBannerElement = document.createElement('div');
			this.cookieBannerElement.setAttribute('id', 'cookie-law');
			this.cookieBannerElement.innerHTML = '<p>My website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in my <a href="#cookiesPolicy" data-toggle="modal">privacy and cookies policy</a>. <a class="close-cookies-banner" href="javascript:void(0);" onclick="Platform.ReportInteraction(`REMOVE_COOKIE_BANNER`);"><i class="fa fa-times"></i></a></p>';
			this.cookieBannerElement.className += ' cookiebanner';
		}

		Show() {
			this.parentElement.appendChild(this.cookieBannerElement);
		}

		Hide(scope: CookieBannerComponent = this) {
			scope.GetParent().removeChild(scope.GetElement());
		}
	}
}
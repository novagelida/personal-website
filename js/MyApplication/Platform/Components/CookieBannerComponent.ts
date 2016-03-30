namespace Platform {
	//TODO: I can move this object in a file, or data object, or something else.
	var BannerData = { 
						CLASS: "cookiebanner",
						ID: "cookie-law", 
						CLOSE_BUTTON_CLASS_NAME: "close-cookies-banner", 
						ANCHOR_CLASS_NAME: "privacy and cookies policy",
						BANNER_CONTENT: "My website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in my "
					};

	export class CookieBannerComponent extends PlatformComponent {
		private bannerId: string = BannerData.ID;
		private bannerParagraph: Element;

		constructor() {
			super(document.createElement(TagNames.DIV), BannerData.CLASS);
		}

		private InitialiseParagraph(linkToPolicy: LinkToModalAnchorElement, bannerCloseButton: InteractionReporterAnchorElement) {
			this.bannerParagraph = document.createElement(TagNames.P);
			this.bannerParagraph.textContent = BannerData.BANNER_CONTENT;
			this.bannerParagraph.appendChild(linkToPolicy.GetTargetElement());
			this.bannerParagraph.appendChild(bannerCloseButton.GetTargetElement());
		}

		Initialise() {
			this.targetElement.setAttribute(AttributeNamesVO.ID, this.bannerId);

			var bannerCloseButton = new InteractionReporterAnchorElement(document.createElement(TagNames.ANCHOR),InteractionVO.REMOVE_COOKIE_BANNER, BannerData.CLOSE_BUTTON_CLASS_NAME);
			bannerCloseButton.Initialise();

			var cross = new ClosingCrossComponent()
			cross.Initialise();

			bannerCloseButton.SetContent(cross);

			var linkToPolicy = new LinkToModalAnchorElement(ModalIdsVO.COOKIES_POLICY, BannerData.ANCHOR_CLASS_NAME);
			linkToPolicy.Initialise();

			this.InitialiseParagraph(linkToPolicy, bannerCloseButton);

			this.targetElement.appendChild(this.bannerParagraph);

			super.Initialise();
		}
	}
}
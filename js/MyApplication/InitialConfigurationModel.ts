namespace ApplicationCore
{
	export interface DataModel {
		Initialise(parsedResponse: any): void;
	}

	export class InitialConfigurationModel implements DataModel {
		private brandName: string;
		private channelNames: Array<string>;
		private motto: string;
		private lang: string;
		private description: string;
		private credits: string;

		Initialise(parsedResponse: any) {
			this.brandName = parsedResponse["BrandName"];
			this.channelNames = parsedResponse["Channels"];
			this.motto = parsedResponse["Motto"];
			this.lang = parsedResponse["Lang"];
			this.description = parsedResponse["Description"];
			this.credits = parsedResponse["Credits"];
		}
	}
}
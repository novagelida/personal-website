namespace ApplicationCore
{
	export interface IDataModel {
		Initialise(parsedResponse: any): void;
	}

	export class InitialConfigurationModel implements IDataModel {
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
			
			//TODO: Send a notification insted calling the Notifier
			Notifier.ApplicationActivator.InitialiseApplicationPresenter();
		}

		GetBrandName() : string { return this.brandName;}
		GetChannelNames() : Array<string> { return this.channelNames;}
		GetMotto() : string { return this.motto;}
		GetLanguage() : string { return this.lang;}
		GetDescription() : string { return this.description;}
		GetCredits() : string { return this.credits;}
	}
}
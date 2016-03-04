namespace ApplicationCore 
{
	export interface DataRetriever {
		GetInitialConfiguration() : InitialConfigurationModel;
	}

	export class MyDataRetriever implements DataRetriever {
		testVar : string;

		constructor() {
			Alert("DataRetriever Running");
		}

		GetInitialConfiguration(){
			//read from file
			var initialConfiguration = new InitialConfigurationModel();
			initialConfiguration.ParseJson(/*insert the read json here*/);
			
			return initialConfiguration;
		}

	}
}
namespace ApplicationCore 
{
	export interface DataRetriever {

	}

	export class MyDataRetriever implements DataRetriever {
		testVar : string;
		constructor() {
			Alert("DataRetriever Running");
		}
	}
}
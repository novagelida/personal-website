namespace ApplicationCore 
{
	var GET = "get";

	export interface DataModel{

	}

	export interface DataRequest{
		Resource : string;
	}

	export interface DataRetriever {
		PerformRequest(requestToWrap: DataRequest, modelToFill: DataModel) : DataModel;
	}

	class BasicDataRetriever implements DataRetriever {
		modelToFill : DataModel;

		constructor(model : DataModel) {
			this.modelToFill = model;
		}

		PerformRequest(requestToWrap : DataRequest) {
			//TODO extract this function as a method
			function levelRequestListener() {
				var levels = JSON.parse(this.responseText);
				console.log(levels);
			}

			var temporary_request = new XMLHttpRequest();
			temporary_request.onload = levelRequestListener;
			temporary_request.open(GET, requestToWrap.Resource, true);
			temporary_request.send();

			return this.modelToFill;
		}
	}

	export interface ModelBuilder
	{
		Build() : void;
	}

	export class InitialConfigurationRetriever extends BasicDataRetriever implements ModelBuilder
	{
		constructor(model : DataModel)
		{
			super(model);
			Alert("InitialConfigurationRetriever built!");
		}


		Build() {
			//TODO: I can create a class for building the paths
			var initialConfigurationRequest: DataRequest = { Resource: "http://localhost/data/InitialConfiguration.json" };

			return super.PerformRequest(initialConfigurationRequest);
		}
	}
}
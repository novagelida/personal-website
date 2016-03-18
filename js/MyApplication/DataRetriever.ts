namespace ApplicationCore 
{
	var GET = "get";

	export interface DataRequest{
		Resource : string;
	}

	export interface DataRetriever {
		PerformRequest(requestToWrap: DataRequest, modelToFill: DataModel) : DataModel;
	}

	class BasicDataRetriever implements DataRetriever {
		private modelToFill : DataModel;

		constructor(model : DataModel) {
			this.modelToFill = model;
		}

		ProcessResponse(parsedResponse : void){
			this.modelToFill.Initialise(parsedResponse);
		}

		BuildRequestListener()
		{
			var scope: BasicDataRetriever = this;

			function requestListener() {
				var parsedResponse = JSON.parse(this.responseText);
				scope.ProcessResponse(parsedResponse);
			}

			return requestListener;
		}

		PerformRequest(requestToWrap : DataRequest) {
			var temporary_request = new XMLHttpRequest();
			temporary_request.onload = this.BuildRequestListener();
			temporary_request.open(GET, requestToWrap.Resource, true);
			temporary_request.send();

			return this.modelToFill;
		}
	}

	export interface ModelBuilder
	{
		Build() : void;
	}

	export class InitialConfigurationBuilder extends BasicDataRetriever implements ModelBuilder
	{
		constructor(model : DataModel)
		{
			super(model);
		}


		Build() {
			
			var initialConfigurationRequest: DataRequest = { Resource: PathManager.Data.InitialConfiguration };

			return super.PerformRequest(initialConfigurationRequest);
		}
	}
}
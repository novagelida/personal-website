namespace ApplicationCore 
{
	var GET = "get";

	export interface IDataRequest{
		Resource : string;
	}

	export interface IDataRetriever {
		PerformRequest(requestToWrap: IDataRequest, modelToFill: IDataModel) : IDataModel;
	}

	class BasicDataRetriever implements IDataRetriever {
		private modelToFill : IDataModel;

		constructor(model : IDataModel) {
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

		PerformRequest(requestToWrap : IDataRequest) {
			var temporary_request = new XMLHttpRequest();
			temporary_request.onload = this.BuildRequestListener();
			temporary_request.open(GET, requestToWrap.Resource, true);
			temporary_request.send();

			return this.modelToFill;
		}
	}

	export interface IModelBuilder
	{
		Build() : void;
	}

	export class InitialConfigurationBuilder extends BasicDataRetriever implements IModelBuilder
	{
		constructor(model: InitialConfigurationModel)
		{
			super(model);
		}


		Build() {

			var initialConfigurationRequest: IDataRequest = { Resource: PathManager.Data.InitialConfiguration };

			super.PerformRequest(initialConfigurationRequest);
		}
	}
}
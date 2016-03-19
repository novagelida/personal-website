namespace Platform{

	export function ReportInteraction(interactionName: string) {
		InteractionManager.ManageInteraction(interactionName);
	}

	interface InteractionHandlerModel
	{
		Scope: any;
		Handler: (scope: any) => void;
	}

	//TODO: use this model to implement a NotificationManager
	export class InteractionManager{

		private static interactionMap: { [id: string]: InteractionHandlerModel; } = {};

		static AddToInteractionMap(interactionName: string, interactionHandler: (scope: any) => void, scope: any){
			this.interactionMap[interactionName] = { Scope : scope, Handler : interactionHandler };
		}

		static ManageInteraction(interactionName: string){
			var handlerModel: InteractionHandlerModel = this.interactionMap[interactionName];
			handlerModel.Handler(handlerModel.Scope);
		}
	}
}
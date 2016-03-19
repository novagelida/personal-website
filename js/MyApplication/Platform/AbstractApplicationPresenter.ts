namespace Platform
{
	export interface IApplicationPresenter{
		Activate(): void;
		Render(): void;
	}

	export function CreateMetaTag(name: string, content: string)
	{
		var meta = document.createElement(TagNames.META);
		meta.setAttribute(AttributeNames.NAME, name);
		meta.setAttribute(AttributeNames.CONTENT, content);
		return meta;
	}

	export abstract class AbstractApplicationPresenter implements IApplicationPresenter
	{
		protected data: ApplicationCore.IDataModel;

		constructor(data: ApplicationCore.IDataModel) {
			this.data = data;
		}

		abstract Render() : void;

		Activate(){
			this.Render();
		}
	}
}
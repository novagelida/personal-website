namespace Platform{
	export interface IListElementBuilder{
		Build(data: IListElementModel): PlatformComponent;
	}
}
namespace Platform{

	export interface IPlatformComponent
	{
		GetTemplate(): string;
		Initialise() : void;
		Show(): void;
		Hide(): void;
	}
}
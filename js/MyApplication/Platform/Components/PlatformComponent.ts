namespace Platform{

	export function SetCookie(name: string, value: string, expirationData: string, path: string = "path=/" ){
		document.cookie = name + "=" + value + "; expires=" + expirationData + "; " + path;
	}

	export function UnSetCookie(name: string, value: string, path: string = "path=/") {
		document.cookie = name + "=" + value + "; "+ path;
	}

	export interface IPlatformComponent
	{
		GetTemplate(): string;
		Initialise() : void;
		Show(): void;
		Hide(): void;
	}
}
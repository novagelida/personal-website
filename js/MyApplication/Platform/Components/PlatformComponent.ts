namespace Platform{

	export function SetCookie(name: string, value: string, expirationData: string, path: string = "path=/" ){
		document.cookie = name + "=" + value + "; expires=" + expirationData + "; " + path;
	}

	export function UnSetCookie(name: string, value: string, path: string = "path=/") {
		document.cookie = name + "=" + value + "; "+ path;
	}

	export abstract class PlatformComponent
	{
		protected targetElement: Element;
		protected classNames: string[];

		constructor(classNames: string){
			if (classNames != "")
				this.classNames = classNames.split(" ");
		}

		GetTargetElement() : Element{
			return this.targetElement;
		}
		
		Initialise(){
			if (this.classNames == undefined){
				return;
			}
			
			for (var i = 0; i < this.classNames.length; ++i){

				this.targetElement.classList.add(this.classNames[i]);
			}
		}

		Show(scope: PlatformComponent = this) {
			scope.targetElement.classList.add("displayNome");
		}

		Hide(scope: PlatformComponent = this) {
			scope.targetElement.classList.remove("displayNome");
		}
	}
}
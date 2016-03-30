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

		constructor(target: Element, classNames: string = "") {
			if (classNames != "")
				this.classNames = classNames.split(" ");

			this.targetElement = target;
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
			scope.targetElement.classList.add(ApplicationPlatformClassNames.DISPLAY_NONE);
		}

		Hide(scope: PlatformComponent = this) {
			scope.targetElement.classList.remove(ApplicationPlatformClassNames.DISPLAY_NONE);
		}

		AppendChild(childToAppend: PlatformComponent){
			this.targetElement.appendChild(childToAppend.GetTargetElement());
		}
	}
}
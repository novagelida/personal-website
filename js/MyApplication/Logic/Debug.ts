namespace ApplicationCore
{
	//TODO: [ DEBUG ] do I have to use any instead of Object?
	export function Log(toLog: Object) {
		console.log(toLog);
	}

	export function Alert(toAlert: string) {
		window.alert(toAlert);
	}
}
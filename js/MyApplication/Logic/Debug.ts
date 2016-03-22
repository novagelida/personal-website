namespace ApplicationCore
{
	export function Log(toLog: any) {
		console.log(toLog);
	}

	export function Alert(toAlert: string) {
		window.alert(toAlert);
	}
}
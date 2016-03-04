namespace ApplicationCore
{
	export interface ThemeManager {

	}

	export class MyThemeManager implements ThemeManager {
		testVar : string;
		constructor() {
			Alert("ThemeManager Running");
		}
	}
}
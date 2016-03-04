namespace ApplicationCore
{
	class Activator{
		private themeManager : ThemeManager;
		private dataRetriever: DataRetriever;

		constructor(themeManager: ThemeManager, dataRetriever: DataRetriever) {
			this.themeManager = themeManager;
			this.dataRetriever = dataRetriever;
		}
	}

	export function Run() {
		var themeManager: ThemeManager; 
		themeManager = new MyThemeManager();

		var dataRetriever: DataRetriever; 
		dataRetriever = new MyDataRetriever();

		var activator : Activator; 
		activator = new Activator(themeManager, dataRetriever);
		
		Alert("ApplicationCore running!");
	}
	
}

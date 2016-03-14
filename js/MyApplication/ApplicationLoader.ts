namespace ApplicationCore
{
	class Activator{
		private themeManager : ThemeManager;
		private dataRetriever: ModelBuilder;

		constructor(themeManager: ThemeManager, dataRetriever: ModelBuilder) {
			this.themeManager = themeManager;
			this.dataRetriever = dataRetriever;
		}

		Run(){
			this.dataRetriever.Build();
		}
	}

	export function Run() {
		var themeManager: ThemeManager; 
		themeManager = new MyThemeManager();

		var dataRetriever: ModelBuilder; 
		dataRetriever = new InitialConfigurationRetriever({});

		var activator : Activator; 
		activator = new Activator(themeManager, dataRetriever);

		activator.Run();
		
		Alert("ApplicationCore running!");
	}
	
}

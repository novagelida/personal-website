namespace ApplicationCore
{
	class Activator{
		private themeManager : ThemeManager;

		constructor(themeManager: ThemeManager) {
			this.themeManager = themeManager;
		}

		BuildInitialConfigurationModel(){

			var initialConfigurationModel: InitialConfigurationModel = new InitialConfigurationModel();
			var initialConfigurationBuilder = new InitialConfigurationBuilder(initialConfigurationModel);

			initialConfigurationBuilder.Build();
		}

		Run(){
			this.BuildInitialConfigurationModel();
		}
	}

	export function Run() {
		var themeManager: ThemeManager; 
		themeManager = new MyThemeManager();

		var activator : Activator; 
		activator = new Activator(themeManager);

		activator.Run();
	}
	
}

namespace ApplicationCore
{
	class Activator{
		private themeManager : IThemeManager;
		private initialConfigurationModel: InitialConfigurationModel;
		private applicationPresenter: Platform.IApplicationPresenter;

		constructor(themeManager: IThemeManager) {
			this.themeManager = themeManager;
		}

		BuildInitialConfigurationModel(){

			this.initialConfigurationModel = new InitialConfigurationModel();
			var initialConfigurationBuilder = new InitialConfigurationBuilder(this.initialConfigurationModel);

			initialConfigurationBuilder.Build();
		}

		//TODO: il presente può essere attivato solo quando i dati sono effettivamente stati ricevuti
		InitialiseApplicationPresenter(){
			this.applicationPresenter = new Platform.ApplicationPresenter(this.initialConfigurationModel);
			this.applicationPresenter.Activate();
		}

		Run(){
			this.BuildInitialConfigurationModel();
		}
	}

	export class Notifier
	{
		//TODO: Implement a method for registering class to the notifier (Implement an observer pattern)
		static ApplicationActivator: Activator;
	}

	export function Run() {
		var themeManager: IThemeManager; 
		themeManager = new MyThemeManager();

		var activator : Activator;
		activator = new Activator(themeManager);

		Notifier.ApplicationActivator = activator;

		activator.Run();
	}
	
}

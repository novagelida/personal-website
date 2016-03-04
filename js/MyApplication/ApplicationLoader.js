var ApplicationCore;
(function (ApplicationCore) {
    var a = new ThemeManager();
    /*class ApplicationCore{
        themeManager : ThemeManager;
        dataRetriever: DataRetriever;

        contructor(themeManager: ThemeManager, dataRetriever: DataRetriever) {
            Alert("ApplicationCore running!");
        }
    }*/
    //private static instance: ApplicationLoader;
    function Run() {
        //var a = new ApplicationCore();
        Alert("Function run called");
    }
    ApplicationCore.Run = Run;
})(ApplicationCore || (ApplicationCore = {}));

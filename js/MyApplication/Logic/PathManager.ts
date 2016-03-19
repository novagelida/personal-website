namespace PathManager {

	var root: string = "./";
	var data: string = "data/";

	export function Root() { return root; }

	export class Data
	{
		static Root: string= root + data;
		static InitialConfiguration = root + data + "InitialConfiguration.json";
	}
}
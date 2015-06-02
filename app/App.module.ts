module Core
{
	//this has to be above all other angular.module calls (maybe we should put it in a separate js-file)
	//angular.module('app', ['ngMaterial']);
    export class MainModule
	{
		public static app = angular.module('app', ['ngMaterial']);
	}
}

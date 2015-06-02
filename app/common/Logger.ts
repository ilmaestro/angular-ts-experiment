/// <reference path="../_App.ts" />
module Common
{
	export class Logger
	{
		private log: ng.ILogService;

		public static $inject = ['$log'];
		constructor($log: ng.ILogService)
		{
			this.log = $log;
			this.info('Logger created!!!');
		}

		info(message: String)
		{
			this.log.info('Info: ' + message);
		}

		warn(message: String)
		{
			this.log.warn('Warn: ' + message);
		}

		error(message: String)
		{
			this.log.error('Error: ' + message);
		}
	}
}

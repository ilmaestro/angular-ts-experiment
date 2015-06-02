/// <reference path="_App.ts" />
module App.Service {
	export class PaymentService {
		static $inject = ["$q"];
		constructor(private $q: ng.IQService){
		}
		
		getPaymentMethods(): ng.IPromise<Array<App.Model.IPaymentMethodOption>> {
			return this.$q.when(App.Data.paymentMethodDictionary);
		}
		getReasonOptions(): ng.IPromise<Array<App.Model.IReasonOption>> {
			return this.$q.when(App.Data.reasonOptions);
		}
	}
}
/// <reference path="_App.ts" />
module App.Service {
	export class PaymentService {
		lastPaymentID: number = 42;

		static $inject = ["$q"];
		constructor(private $q: ng.IQService){
		}
		getPayments(): ng.IPromise<Array<App.Model.IPayment>> {
			return this.$q.when(App.Data.payments);
		}
		getPaymentMethods(): ng.IPromise<Array<App.Model.IPaymentMethodOption>> {
			return this.$q.when(App.Data.paymentMethodDictionary);
		}
		getReasonOptions(): ng.IPromise<Array<App.Model.IReasonOption>> {
			return this.$q.when(App.Data.reasonOptions);
		}
		createNewPayment(payment: App.Model.IPayment, paymentMethod: App.Model.IPaymentMethodOption): App.Model.IPayment {
			this.lastPaymentID++;
			payment.id = this.lastPaymentID;
			payment.paymentMethod = paymentMethod;
			return payment;	
		}
	}
}
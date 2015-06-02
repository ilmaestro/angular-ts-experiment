/// <reference path="../_App.ts" />
module App.Controller
{
	export class ExperimentController
	{
		loading: boolean;
		paymentMethod: App.Model.IPaymentMethodOption;
		newPayment: App.Model.IPayment = <App.Model.IPayment>{};
		payments: Array<App.Model.IPayment>;
		paymentMethods: Array<App.Model.IPaymentMethodOption>;
		
		static $inject = ['$scope', '$http', '$q', 'logger', 'paymentService'];
		
		constructor(private $scope, private $http: ng.IHttpService, $q: ng.IQService, private logger: Common.Logger, private paymentService: App.Service.PaymentService)
		{
			this.loading = true;
			$q.all([
				paymentService.getPaymentMethods(),
				paymentService.getPayments()
			]).then((data: any[]): void => {
				this.paymentMethods = <Array<App.Model.IPaymentMethodOption>> data[0];
				this.payments = <Array<App.Model.IPayment>> data[1];
				this.loading = false;
			}, (error) => {
				logger.error(error);
			});
		}
		
		addNewPayment(payment: App.Model.IPayment, paymentMethod: App.Model.IPaymentMethodOption): void {
			this.payments.push(this.paymentService.createNewPayment(payment, paymentMethod));
			this.newPayment = <App.Model.IPayment>{};
		}
		
		
	}
}
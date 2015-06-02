/// <reference path="../_App.ts" />
module App.Controller
{
	export class ExperimentController
	{
		lastPaymentID: number = 42;
		paymentMethod: App.Model.IPaymentMethodOption;
		newPayment: App.Model.IPayment = <App.Model.IPayment>{};
		payments: Array<App.Model.IPayment> = [{
			id: 42,
			paymentMethod: <App.Model.IPaymentMethodOption>{name: "cash", description: "Cash"}, 
			amount: 10.0,
			checkNo: null,
			reason: null
		}];
		paymentMethods: Array<App.Model.IPaymentMethodOption>;
		
		static $inject = ['$scope', '$http', 'logger', 'paymentService'];
		
		constructor(private $scope, private $http: ng.IHttpService, private logger: Common.Logger, private paymentService: App.Service.PaymentService)
		{
			paymentService.getPaymentMethods().then((data: Array<App.Model.IPaymentMethodOption>) => {
				this.paymentMethods = data;
			});
		}
		
		addNewPayment(payment: App.Model.IPayment, paymentMethod: App.Model.IPaymentMethodOption): void {
			this.lastPaymentID++;
			payment.id = this.lastPaymentID;
			payment.paymentMethod = paymentMethod;
			this.payments.push(payment);
			console.log("added payment: ", payment);
			console.log(this.payments);
			this.newPayment = <App.Model.IPayment>{};
		}
	}
}
module App.Data {
	export var paymentMethodDictionary = <Array<App.Model.IPaymentMethodDictionary>>[
		{name: "cash", description: "Cash", templatePath: "payment-method-cash.html", directiveSelector: "paymentMethodCash", controllerSelector: "paymentComponentController"},
		{name: "check", description: "Check", templatePath: "payment-method-check.html", directiveSelector: "paymentMethodCheck", controllerSelector: "paymentComponentController"},
		{name: "paidByStore", description: "Paid by Store", templatePath: "payment-method-paidby-store.html", directiveSelector: "paymentMethodPaidbyStore", controllerSelector: "paidbyStoreController"}
	];
	
	export var reasonOptions = <Array<App.Model.IReasonOption>> [
		{name: "broughtIn", description: "Brought in by Store"},
		{name: "training", description: "Training"},
		{name: "clean", description: "Cleanup"},			
		{name: "injury", description: "Injury on the Job"}			
	];
	
	export var payments = <Array<App.Model.IPayment>> [
		{
			id: 42,
			paymentMethod: <App.Model.IPaymentMethodOption>{name: "cash", description: "Cash"}, 
			amount: 10.0,
			checkNo: null,
			reason: null
		}
	];
}
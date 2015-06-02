module App.Model {
	export interface IPaymentMethodDictionary {
		name: string;
		description: string;
		templatePath: string;
		directiveSelector: string;
		controllerSelector: string;
	}
	
	export interface IOption {
		name: string;
		description: string;
	}
	
	export interface IPaymentMethodOption extends IOption {
	}
	
	export interface IPayment {
		id: number;
		paymentMethod: IPaymentMethodOption;
		amount: number;
		checkNo: number;
		reason: IReasonOption;
	}
	
	export interface IReasonOption extends IOption{
	}
}
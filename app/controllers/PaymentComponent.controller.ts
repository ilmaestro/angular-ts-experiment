/// <reference path="../_App.ts" />

module App.Controller
{
	export class PaymentComponentBase {
		edit: boolean;
		view: boolean;
		setMode(mode: string){
			this.edit = mode === "edit" || false;
			this.view = mode === "view" || false;
		}
	}
	
	export class PaymentComponentController extends PaymentComponentBase {
		static $inject = ['$scope', '$attrs'];
		
		constructor($scope: any, $attrs: any) {
			super();
			var directiveScope = $scope.$parent;
			//this.options = directiveScope.$eval($attrs.field)
			this.setMode($attrs.mode);
		}
	}
	
	export class PaidbyStoreController extends PaymentComponentBase{
		reasonOptions: Array<App.Model.IReasonOption>;
		static $inject = ["$scope", "$attrs", "$q", "paymentService"];
		constructor($scope, $attrs, $q, paymentService: App.Service.PaymentService){
			super();
			this.setMode($attrs.mode);
			paymentService.getReasonOptions().then((data: Array<App.Model.IReasonOption>) => {
				this.reasonOptions = data;
			});
		}
	}
}
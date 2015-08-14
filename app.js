angular.module('waitstaffApp', [])
	.controller('waitstaffController', waitstaffController);


////////Controller Functions////////////
function waitstaffController($scope){
	$scope.submit = function(){
		var baseMealPrice = $scope.baseMealPrice;
		var taxRate = $scope.taxRate;
		var tipAmount = $scope.tipAmount;
		var total = baseMealPrice + (baseMealPrice * (taxRate / 100)) + (baseMealPrice * (tipAmount / 100));
		console.log(total);
		return total;
	}
}
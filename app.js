angular.module('waitstaffApp', [])
	.controller('waitstaffController', waitstaffController);


////////Controller Functions////////////
function waitstaffController($scope){
	$scope.subTotal = 0;
	$scope.tip = 0;
	$scope.total = 0;
	$scope.submit = function(){
		var baseMealPrice = $scope.baseMealPrice;
		var taxRate = $scope.taxRate;
		var tipAmount = $scope.tipAmount;
		calculateTip(baseMealPrice, taxRate, tipAmount);
	}
	function calculateTip(bmp, tr, t){
		$scope.subTotal = bmp + (bmp * (tr / 100));
		$scope.tip = bmp * (t / 100);
		$scope.total = bmp + (bmp * (tr / 100)) + (bmp * (t / 100));
	}
}
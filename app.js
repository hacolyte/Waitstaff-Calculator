angular.module('waitstaffApp', [])
	.controller('waitstaffController', waitstaffController);


////////Controller Functions////////////
function waitstaffController($scope){
	$scope.subTotal = 0;
	$scope.tipCash = 0;
	$scope.total = 0;
	$scope.tipTotal = 0;
	$scope.mealCount = 0;
	$scope.averageTip = 0;
	var tipsArr = [];
	var mealCount = 0;
	$scope.submit = function(){
		if($scope.mealTotal.$valid){
			console.log("the form is valid");
			var baseMealPrice = $scope.baseMealPrice;
			var taxRate = $scope.taxRate;
			var tipPercentage = $scope.tipPercentage;
			$scope.mealCount = mealCount += 1;
			calculateTip(baseMealPrice, taxRate, tipPercentage);
			tipTotal(baseMealPrice, tipPercentage);
			// Reset the form
			$scope.baseMealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';
			$scope.mealTotal.$setPristine();
		}else{
			console.log("The form is invalid");
		}
	}
	function calculateTip(bmp, tr, t){
		$scope.subTotal = bmp + (bmp * (tr / 100));
		$scope.tipCash = bmp * (t / 100);
		$scope.total = bmp + (bmp * (tr / 100)) + (bmp * (t / 100));
	}
	function tipTotal(bmp, t){
		var eachTipCash = bmp * (t / 100);
		var tipsTotal = 0;
		tipsArr.push(eachTipCash);
		for (var i = 0; i < tipsArr.length; i++) {
			tipsTotal += tipsArr[i];
		};
		$scope.tipTotal = tipsTotal;
		$scope.averageTip = (tipsTotal / mealCount);
	}
	$scope.cancel = function(){
		$scope.baseMealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.mealTotal.$setPristine();
	}
	$scope.reset = function(){
		tipsArr = [];
		mealCount = 0;
		$scope.baseMealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.subTotal = " ";
		$scope.tipCash = '';
		$scope.total = '';
		$scope.tipTotal = '';
		$scope.averageTip = '';
		$scope.mealTotal.$setPristine();
		console.log(tipsArr);
	}
}
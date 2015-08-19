angular.module('waitstaffApp', [])
	.controller('waitstaffController', waitstaffController);


////////Controller Functions////////////
function waitstaffController($scope){
	$scope.data = {};
	$scope.data.subTotal = 0;
	$scope.data.tipCash = 0;
	$scope.data.total = 0;
	$scope.data.tipTotal = 0;
	$scope.data.mealCount = 0;
	$scope.data.averageTip = 0;
	var tipsArr = [];
	var mealCount = 0;
	$scope.submitted = false;
	$scope.submit = function(){
		$scope.submitted = true;
		if($scope.mealTotal.$valid){
			console.log("the form is valid");
			var baseMealPrice = $scope.data.baseMealPrice;
			var taxRate = $scope.data.taxRate;
			var tipPercentage = $scope.data.tipPercentage;
			$scope.data.mealCount = mealCount += 1;
			calculateTip(baseMealPrice, taxRate, tipPercentage);
			tipTotal(baseMealPrice, tipPercentage);
			// Reset the form
			delete $scope.data.baseMealPrice;
			delete $scope.data.taxRate;
			delete $scope.data.tipPercentage;
			$scope.mealTotal.$setPristine();
			$scope.submitted = false;
		}else{
			console.log("The form is invalid");
		}
	}
	function calculateTip(bmp, tr, t){
		$scope.data.subTotal = bmp + (bmp * (tr / 100));
		$scope.data.tipCash = bmp * (t / 100);
		$scope.data.total = bmp + (bmp * (tr / 100)) + (bmp * (t / 100));
	}
	function tipTotal(bmp, t){
		var eachTipCash = bmp * (t / 100);
		var tipsTotal = 0;
		tipsArr.push(eachTipCash);
		for (var i = 0; i < tipsArr.length; i++) {
			tipsTotal += tipsArr[i];
		};
		$scope.data.tipTotal = tipsTotal;
		$scope.data.averageTip = (tipsTotal / mealCount);
	}
	$scope.cancel = function(){
		$scope.data.baseMealPrice = '';
		$scope.data.taxRate = '';
		$scope.data.tipPercentage = '';
		$scope.mealTotal.$setPristine();
	}
	$scope.reset = function(){
		tipsArr = [];
		mealCount = 0;
		$scope.data = {};
		$scope.mealTotal.$setPristine();
		console.log(tipsArr);
	}
}
(function () {
	'use strict';

	var x = "test"; 

	angular.module("nameCalculator", [])

	.controller("nameCalculatorController", function ($scope) {
		$scope.name = "";
		$scope.totalValue = 0;

		$scope.displayNumeric = function() {
			var totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue; 
		};

		function calculateNumericForString (string) {
			return string.length;
		}
	});

})();
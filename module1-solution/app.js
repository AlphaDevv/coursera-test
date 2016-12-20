(function () {
	'use strict';

	// Definition of the module
	angular.module("LunchCheck", [])

	// Main controller, to manage the checker feature
	.controller("LunchCheckController", LunchCheckController);

	// To prevent error once minificated, we inject the scope through a literal string
	LunchCheckController.$inject = ['$scope'];

	/**
	*	Lunch check controller
	*/
	function LunchCheckController($scope) {
		// Defined as an empty array
		$scope.listFood = "";

		// result message definition, empty string by default
		$scope.result = "";
		$scope.resultOk = false;

		// Manager function, it will analyse the list of food
		$scope.isItTooMuch = function () {

			// Get food inserted by the user
			var food = $scope.listFood.split(',');
			var nb = 0;

			// for each food in that list, we are going to count all the food
			for (var i = food.length - 1; i >= 0; i--) {
				nb += ( food[i].trim() != '' ) ? 1 : 0;
			}

			// By default, we consider that the value is true
			$scope.resultOk = true;

			// Test to update the result correctly
			if (nb >= 1 && nb <= 3) {
				$scope.result = "Enjoy";
			} else if (nb > 3) {
				$scope.result = "Too much!";
			} else {
				$scope.result = "Please enter data first";
				$scope.resultOk = false;
			}
		};

		$scope.getStyleClass = function (type) {

			var classes = "";
			if ($scope.result != '' && $scope.resultOk) {
				classes = (type == 'container') ? "has-success" : "success-msg";
			} else if ($scope.result != '' && !$scope.resultOk) {
				classes = (type == 'container') ? "has-error" : "error-msg";
			} else if ($scope.result == "" && type == 'input') {
				classes = "error-msg";
			}

			return classes;
		};

	}

})();
(function() {
	var app = angular.module('design', []);

	app.controller('DesignController', ['$scope', function($scope) {
		$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn-weight = $scope.needle-size-us = $scope.needle-size-mm = $scope.yardage = $scope.image1 = $scope.image2 '';
		$scope.designer = [];
		
		$scope.all = function() {
			$.getJSON('getDesign', function(result) {
					$scope.designer = result;
			});
		};

		$scope.add = function() {
			var newDesign = {
				"name" : $scope.name,
				"designer" : $scope.designer,
				"publication" : $scope.publication,
                "category" : $scope.category,
				"yarn-weight" : $scope.yarn-weight,
				"needle-size-us" : $scope.needle-size-us,
                "needle-size-mm" : $scope.needle-size-mm,
				"yardage" : $scope.yardage,
				"image1" : $scope.image1,
                "image2" : $scope.image2
                
			};
			$scope.musicians.push(newDesign);
			$.post('putDesign', newDesign);
		 $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn-weight = $scope.needle-size-us = $scope.needle-size-mm = $scope.yardage = $scope.image1 = $scope.image2 '';
		};
		
		$scope.update = function() {
			var updateDesign = { "name" : $scope.name, "instrument" : $scope.instrument};
			$.post('updateDesign', updateDesign);
			$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn-weight = $scope.needle-size-us = $scope.needle-size-mm = $scope.yardage = $scope.image1 = $scope.image2 '';
		};
		
		$scope.remove = function(musician) {
			$scope.designer.splice($scope.designer.indexOf(musician), 1);
			$.post('removeDesign', musician);
		};									 
	}]);
}());

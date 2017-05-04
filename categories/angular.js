//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

(function() {
	var app = angular.module('design', []);
//shawls, sweaters. hats, mitts, scarves, blankets, vests
	app.controller('DesignController', ['$scope', function($scope) {
		$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.shawls = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.sweaters = [];
        
        	$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 ='';
		$scope.scarves = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.socks = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.hats = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.mitts = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 ='';
		$scope.blankets = [];
        
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.vests = [];
		
		$scope.getShawls = function() {
            console.log("getting shawls...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "Shawl"}, function(result) {
					$scope.shawls = result;
			});
		};
        $scope.getSweaters = function() {
            console.log("getting sweaters...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "sweaters"}, function(result) {
					$scope.sweaters = result;
			});
		};
            	$scope.getHats = function() {
                    console.log("getting hats...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "hats"}, function(result) {
					$scope.hats = result;
			});
		};
        $scope.getMitts = function() {
            console.log("getting mitts...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "mitts"}, function(result) {
					$scope.mitts = result;
			});
		};
           
            	$scope.getBlankets = function() {
                    console.log("getting blankets...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "blankets"}, function(result) {
					$scope.blankets = result;
			});
		};
        $scope.getVests = function() {
            console.log("getting vests...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "vests"}, function(result) {
					$scope.vests = result;
			});
		};
           
            $scope.getScarves = function() {
                console.log("getting scarves...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "scarves"}, function(result) {
					$scope.scarves = result;
			});
		};
        $scope.getSocks = function() {
            console.log("getting socks...");
            //$get.JSON('getDesign', {"category": "shawls" })
			$.getJSON('../getDesign', {"category": "socks"}, function(result) {
					$scope.socks = result;
			});
		};
           
		$scope.add = function() {
			var newDesign = {
				"name" : $scope.name,
				"designer" : $scope.designer,
				"publication" : $scope.publication,
                "category" : $scope.category,
				"yarn-weight" : $scope.yarn,
				"needle-size-us" : $scope.needle1,
                "needle-size-mm" : $scope.needle2,
				"yardage" : $scope.yardage,
				"image1" : $scope.image1,
                "image2" : $scope.image2
                
			};
			$scope.shawls.push(newDesign);
			$.post('../putDesign', newDesign);
		 $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		};
		
		$scope.update = function() {
			var updateDesign = { "name" : $scope.name, "instrument" : $scope.instrument};
			$.post('../updateDesign', updateDesign);
			$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		};
		
		$scope.remove = function(shawls) {
			$scope.designer.splice($scope.designer.indexOf(shawls), 1);
			$.post('../removeDesign', musician);
		};									 
	}]);
}());

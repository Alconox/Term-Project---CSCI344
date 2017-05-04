//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

//Lets build a angular module and call it design 
(function() {
	var app = angular.module('design', []);
    
//shawls, sweaters. hats, mitts, scarves, blankets, vests
    //We have built a controller named DesignController
	app.controller('DesignController', ['$scope', function($scope) {
        
        // Shawls have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a shawl
		$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.shawls = [];
        
        // Sweaters have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a sweater
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.sweaters = [];
        
        // Scarves have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a scarve
        	$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 ='';
		$scope.scarves = [];
        
        // Socks have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a sock
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.socks = [];
        
        // Hats have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a hat
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.hats = [];
        
        // Mitts have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a mitt
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.mitts = [];
        
        // blackets have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a blanket
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 ='';
		$scope.blankets = [];
        
        // Vests have a name, design, publication, category, yarn, needle1 and a needle2. All are part of a vest
        $scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		$scope.vests = [];
		
        //Each object has its own get method
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
        
        //add a new Design
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
		
        //Update Design
		$scope.update = function() {
			var updateDesign = { "name" : $scope.name,
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
			$.post('../updateDesign', updateDesign);
			$scope.name = $scope.designer = $scope.publication = $scope.category = $scope.yarn = $scope.needle1 = $scope.needle2 = $scope.yardage = $scope.image1 = $scope.image2 = '';
		};
		
		$scope.remove = function(design) {
			$scope.shawls.splice($scope.shawls.indexOf(design), 1);
			$.post('../removeDesign', design);
		};									 
	}]);
}());

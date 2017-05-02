/* Angular app that uses info from pattern database to input same data into display div */

var patName = PatternBase.name,
    patDesigner = PatternBase.designer,
    patPublication = PatternBase.publication,
    patYarnWeight = PatternBase["yarn-weight"],
    patNeedleSizeUS = PatternBase["needle-size-us"],
    patNeedleSizeMM = PatternBase["needle-size-mm"],
    patYardage = PatternBase.yardage,
    patImage = PatternBase.image1;

var app = angular.module('patDisplay', []);

app.controller('MainCTRL', ['$scope', '$window', function ($scope, $window, $timeout) {
    $scope.patName = $window.patName;
    $scope.patDesigner = $window.patDesigner;
    $scope.patPublication = $window.patPublication;
    $scope.patYarnWeight = $window.patYarnWeight;
    $scope.patNeedleSizeUS = $window.patNeedleSizeUS;
    $scope.patNeedleSizeMM = $window.patNeedleSizeMM;
    $scope.patYardage = $window.patYardage;
    $scope.patImage = $window.patImage;

    $timeout(function () {
        $scope.getInfo = function (id) {
            console.log(id);
        };
    }, 2000);

}]);
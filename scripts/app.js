//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

var app = angular.module('app', ['ngResource']);
//Method 1
app.factory('Name', ['$resource', function($resource) {
  return $resource('/employees/:employeeId', {}, {
    get: {
      isArray: true
    },
    delete: {
      isArray: true,
      method: 'DELETE'
    },
    post: {
      method: 'POST',
    }
  });
}]);
app.controller('main', ['$scope', 'Name', '$rootScope', 
↵function($scope, EmployeeService, $rootScope) {
  Name.get(function (data) {
    $scope.employees = data;
  });

  $scope.add = function () {
    Name.post({
      first: $scope.firstName,
      last: $scope.lastName
    }, function (data) {
      $scope.employees.push(data);
    });
  };

  $scope.remove = function(employee) {
    Name.delete({
      employeeId: employee.id
    }, function (data) {
      $scope.employees = data;
    });
  }
}]);
//Method 2
app.factory('designer', ['$resource', function($resource) {
  return $resource('/employees/:employeeId', {}, {
    get: {
      isArray: true
    },
    delete: {
      isArray: true,
      method: 'DELETE'
    },
    post: {
      method: 'POST',
    }
  });
}]);
app.controller('main', ['$scope', 'designer', '$rootScope', 
↵function($scope, designer, $rootScope) {
  designer.get(function (data) {
    $scope.employees = data;
  });

  $scope.add = function () {
    designer.post({
      first: $scope.firstName,
      last: $scope.lastName
    }, function (data) {
      $scope.employees.push(data);
    });
  };

  $scope.remove = function(employee) {
    EmployeeService.delete({
      employeeId: employee.id
    }, function (data) {
      $scope.employees = data;
    });
  }
}]);
//Method 3
app.factory('publication', ['$resource', function($resource) {
  return $resource('/employees/:employeeId', {}, {
    get: {
      isArray: true
    },
    delete: {
      isArray: true,
      method: 'DELETE'
    },
    post: {
      method: 'POST',
    }
  });
}]);
app.controller('main', ['$scope', 'publication', '$rootScope', 
↵function($scope, publication, $rootScope) {
  publication.get(function (data) {
    $scope.employees = data;
  });

  $scope.add = function () {
    publication.post({
      first: $scope.firstName,
      last: $scope.lastName
    }, function (data) {
      $scope.employees.push(data);
    });
  };

  $scope.remove = function(employee) {
    publication.delete({
      employeeId: employee.id
    }, function (data) {
      $scope.employees = data;
    });
  }
}]);
app.factory('EmployeeService', ['$resource', function($resource) {
  return $resource('/employees/:employeeId', {}, {
    get: {
      isArray: true
    },
    delete: {
      isArray: true,
      method: 'DELETE'
    },
    post: {
      method: 'POST',
    }
  });
}]);
app.controller('main', ['$scope', 'EmployeeService', '$rootScope', 
↵function($scope, EmployeeService, $rootScope) {
  EmployeeService.get(function (data) {
    $scope.employees = data;
  });

  $scope.add = function () {
    EmployeeService.post({
      first: $scope.firstName,
      last: $scope.lastName
    }, function (data) {
      $scope.employees.push(data);
    });
  };

  $scope.remove = function(employee) {
    EmployeeService.delete({
      employeeId: employee.id
    }, function (data) {
      $scope.employees = data;
    });
  }
}]);
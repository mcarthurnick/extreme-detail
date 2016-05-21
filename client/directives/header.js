angular.module('extreme')
  .directive('navbar', function() {
    return {
      restrict: "E",
      templateUrl: '../views/header.html'
    };
  });

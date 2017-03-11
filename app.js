DirectiveMadness = angular.module('DirectiveMadness', []);

DirectiveMadness.controller("DirectiveCtrl",
  ["$scope", function($scope) {
    $scope.formNumber;
  }]);

DirectiveMadness.directive('mainNav', function() {
  return {
    templateUrl: "directives/mainNav.html",
    restrict: 'E',
    scope: {}
  };
});


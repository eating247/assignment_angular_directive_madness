DirectiveMadness = angular.module('DirectiveMadness', []);

DirectiveMadness.controller("DirectiveCtrl",
  ["$scope", function($scope) {
    $scope.formNumber;
    $scope.direction;
    $scope.getMouseDirection = function(direction) {
      $scope.direction = direction;
    };
    $scope.hover;
    $scope.getHoverState = function(state) {
      $scope.hover = state;
    }
    $scope.clickState = "I'm clickable";
    $scope.changeClickState = function() {
      $scope.clickState = "I'm double clickable";
    }
  }]);

DirectiveMadness.directive('mainNav', function() {
  return {
    templateUrl: "directives/mainNav.html",
    restrict: 'E',
    scope: {}
  };
});

DirectiveMadness.directive("mainHeader", function() {
  return {
    template: "<h1 ng-transclude></h1>",
    restrict: "E",
    transclude: true
  };
});

DirectiveMadness.directive("copyright", function() {
  function linkCallback(scope, element, attributes) {
    element.find('span').append(' copyright')
  }
  return {
    template: "<p class='text-center' ng-transclude></p>",
    restrict: "E",
    transclude: true,
    link: linkCallback
  };
});

DirectiveMadness.directive('colorize', function() {
  function linkCallback(scope, element, attributes) {
    element.css({"color": scope.color, "background-color": scope.background});
  }
  return {
    restrict: "A",
    scope: {
      color: "@",
      background: "@"
    },
    link: linkCallback
  }
})
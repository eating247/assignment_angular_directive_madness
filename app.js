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

DirectiveMadness.controller("QuotesCtrl", 
  ["$scope", function($scope) {
    $scope.quoteForm = {};
    $scope.quotes = [];
    $scope.quotesEmpty = function() {
      var result;
      result = $scope.quotes.length === 0 ? true : false 
      return result;
    }
    $scope.createQuote = function(quoteForm) {
      if ( quoteForm.$valid ) {
        $scope.quotes.push({text: quoteForm.text, 
                            author: quoteForm.author});
        $scope.quoteForm.$setPristine();
        $scope.quoteForm.$setUntouched();
        $scope.quoteForm = {};
      }
    };
    $scope.deleteQuote = function(quote) {
      var i = $scope.quotes.indexOf(quote);
      $scope.quotes.splice(i, 1);
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

DirectiveMadness.directive("quoteForm", function() {
  return {
    templateUrl: "directives/quoteForm.html",
    restrict: "E",
    // scope: true
  }
});

DirectiveMadness.directive("quoteIndex", function() {
  return {
    templateUrl: "directives/quoteIndex.html",
    restrict: "E",
    // scope: true
  }
})
'use strict';

var app = angular.module('ionicApp', ['ionic'])

    app.config(function($stateProvider, $urlRouterProvider) {
      

      $stateProvider
        .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "templates/home.html"
            }
          }
        })
        .state('tabs.quizlist', {
          url: '/quizlist',
          views: {
            'home-tab': {
              templateUrl: "templates/quizlist.html"
            }
          }
        })      
        .state('tabs.profile', {
          url: "/profile",
          views: {
            'profile-tab': {
              templateUrl: "templates/profile.html"
            }
          }
        })       
        .state('tabs.leaders', {
          url: '/leaders',
          views: {
            'leaders-tab': {
              templateUrl: "templates/leaders.html"
            }
          }
        });
        
        $urlRouterProvider.otherwise('/tab/home');
    })

app.controller('ModalAbout', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'About Trivia',
    info: 'Tap anywhere on the card to open the modal'
  }
  
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
    
    
  $scope.quizzes = [{title: 'History Quiz',description:'History Quiz Description'},{title: 'History Quiz',description:'History Quiz Description'},{title: 'History Quiz',description:'History Quiz Description'},{title: 'History Quiz',description:'History Quiz Description'},{title: 'Science Quiz',description:'Science Quiz Description'}]
  $scope.version = "0.0.1";
  $scope.terms = "Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. Repeating terms text a million times. ";
    
    
})
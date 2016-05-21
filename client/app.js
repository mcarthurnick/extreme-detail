angular.module('extreme', ['ui.router', 'ui.bootstrap'])


.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: './views/homeView.html'
    })

    .state('options', {
      url: '/options',
      templateUrl: './views/optionsView.html'
    })


});

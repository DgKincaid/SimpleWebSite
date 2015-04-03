/**
 * Created by DKINCAID on 4/1/2015.
 */

angular.module('app', ['ngResource', 'ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/partials/main',
            controller: 'MainController'
        })
});



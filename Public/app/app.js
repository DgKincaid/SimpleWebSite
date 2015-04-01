/**
 * Created by DKINCAID on 4/1/2015.
 */

angular.module('app', ['ngResource', 'ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/partials/main',
            controller: 'MainController'
        })
});

angular.module('app').controller('MainController', function($scope){
    $scope.x = "Hello World"
});

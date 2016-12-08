'use strict';

angular.module('ControleCalculo', []);
angular.module('calculoST', []);
angular.module('calculoICMS', []);
angular.module('calculoIPI', []);

angular.module('DEPGod', [
    'ControleCalculo',
    'calculoST',
    'calculoICMS',
    'calculoIPI',
    'ngRoute', 
    'ngAnimate',
    'ngMessages',
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            controller: 'controladorHome',
            templateUrl: 'Home/home.html',
        })

        .when('/calculost', {
            controller: 'controladorST',
            templateUrl: 'calculoST/stnormal.html',
        })

        .when('/calculoicms', {
            controller: 'controladorICMS',
            templateUrl: 'calculoICMS/calculoicms.html',
        })

        .when('/calculoipi', {
            controller: 'controladorIPI',
            templateUrl: 'calculoIPI/calculoipi.html',
        })

        .when('/sobre', {
            templateUrl: 'Sobre/sobre.html',
        })
 
        .otherwise({ redirectTo: '/home' });
}])
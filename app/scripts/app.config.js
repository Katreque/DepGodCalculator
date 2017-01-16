(function(){
    'use strict'

angular.module('DEPGod')
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            controller: 'controladorHome',
            controllerAs: 'controladorhome',
            templateUrl: './app/views/home_view.html',
        })
        
        .when('/calculost', {
            controller: 'controladorST',
            controllerAs: 'controlst',
            templateUrl: './app/views/stnormal_view.html',
        })

        .when('/calculoicms', {
            controller: 'controladorICMS',
            controllerAs: 'controlicms',
            templateUrl: './app/views/calculoicms_view.html',
        })

        .when('/calculoipi', {
            controller: 'controladorIPI',
            controllerAs: 'controlipi',
            templateUrl: './app/views/calculoipi_view.html',
        })

        .when('/sobre', {
            templateUrl: './app/views/sobre_view.html',
        })
 
        .otherwise({ redirectTo: '/home' });
}])

.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])

.config(['AltPassaporteUrlBaseListagemProdutosProvider', function(AltPassaporteUrlBaseListagemProdutosProvider){
        AltPassaporteUrlBaseListagemProdutosProvider.url = altAmbienteUrl.getEndpoint("https://passaporte2__ambiente__.alterdata.com.br");
    }])
}())
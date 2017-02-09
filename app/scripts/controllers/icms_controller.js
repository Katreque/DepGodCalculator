(function(){
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'icmsProprioHelper', function($location, icmsProprioHelper){
        var self = this;

        self.criar = function(){
            icmsProprioHelper.exibe();
        }

        self.voltar = function(){
            $location.path('/home');
        }
    }])
}())

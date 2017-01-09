(function(){
    'use strict'

angular.module('DEPGod')
    .controller('controladorST', ['$location', 'StProprioModel', function($location, StProprioModel){
        var self = this;

        self.valoresStProprio = new StProprioModel();
        
        self.limparSt = function(){
            self.valoresStProprio = new StProprioModel();
        }

        self.voltar = function(){
            $location.path('/home');
        }
    }])
}())
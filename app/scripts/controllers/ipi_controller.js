(function(){
    'use strict'

angular.module('DEPGod')
    .controller('controladorIPI', ['$location', 'IpiProprioModel', function($location, IpiProprioModel){
        var self = this;

        self.valoresipiProprio = new IpiProprioModel();

        self.limparIpiProprio = function(){
            self.valoresipiProprio = new IpiProprioModel();
        }

        self.voltar = function(){
            $location.path('/home');
        }
    }])
}())
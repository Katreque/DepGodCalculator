(function(){
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioModel', 'IcmsbaseRedModel', 'IcmsdifalModel', 'icmsProprioHelper', function($location, IcmsproprioModel, IcmsbaseRedModel, IcmsdifalModel, icmsProprioHelper){
        var self = this;

        self.criar = function(){
            icmsProprioHelper.exibe();
        }

        self.voltar = function(){
            $location.path('/home');
        }
    }])
}())

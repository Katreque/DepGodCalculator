(function(){
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioModel', 'IcmsbaseRedModel', 'IcmsdifalModel', 'icmsProprioHelper', function($location, IcmsproprioModel, IcmsbaseRedModel, IcmsdifalModel, icmsProprioHelper){
        var self = this;

        self.valoresIcmsBaseRed = new IcmsbaseRedModel();
        self.valoresIcmsDifal = new IcmsdifalModel();

        self.criar = function(){
            icmsProprioHelper.exibe();
        }

        self.limparRed = function(){
            self.valoresIcmsBaseRed = new IcmsbaseRedModel();
        }

        self.limparDifal = function(){
            self.valoresIcmsDifal = new IcmsdifalModel();
        }

        self.voltar = function(){
            $location.path('/home');
        }
    }])
}())

(function(){   
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioModel', 'IcmsbaseRedModel', 'IcmsdifalModel', function($location, IcmsproprioModel, IcmsbaseRedModel, IcmsdifalModel){
        var self = this;

        self.valoresIcmsProprio = new IcmsproprioModel();
        self.valoresIcmsBaseRed = new IcmsbaseRedModel();
        self.valoresIcmsDifal = new IcmsdifalModel();

        self.limparProprio = function(){
            self.valoresIcmsProprio = new IcmsproprioModel();    
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
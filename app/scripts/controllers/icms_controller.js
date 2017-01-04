(function(){   
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioService', 'IcmsbaseRedService', 'IcmsdifalService', function($location, IcmsproprioService, IcmsbaseRedService ,IcmsdifalService){
        var self = this;

        self.valoresIcmsProprio = {};
        self.valoresIcmsBaseRed = {};
        self.valoresIcmsDifal = {};

        self.resultadoIcmsProprio = function(_base, _aliquota){
            self.valoresIcmsProprio = new IcmsproprioService(_base, _aliquota);
        }

        self.resultadoIcmsRed =  function(_base, _aliquotaRedNormal, _aliquotaRed){
            self.valoresIcmsBaseRed = new IcmsbaseRedService(_base, _aliquotaRedNormal, _aliquotaRed);
        }

         self.resultadoIcmsDifal = function(_ano, _base, _aliquotaInterna, _aliquotaInterestadual, _aliquotaFcp){
            self.valoresIcmsDifal = new IcmsdifalService(_ano, _base, _aliquotaInterna, _aliquotaInterestadual, _aliquotaFcp);
        }

        self.validacaoBase = function(base){

                if(base <= 0){

                    return false;
                }

                    return true;
            }

        self.validacaoAliquotaNaoAceitaZero = function(aliquota){
            
             if(aliquota <= 0 || aliquota > 100){

                    return false;
                }
                    return true;
        }

        self.validacaoAliquotaAceitaZero = function(aliquota){
            
             if(aliquota < 0 || aliquota > 100){

                    return false;
                }
                    return true;
        }

       self.validacaoAliquotaInternaMaiorInterest = function(aliquotaInterna, aliquotaInterestadual){

            if(aliquotaInterna < aliquotaInterestadual){

                return false;
            }
                return true;
        }

        self.limparProprio = function(){

            self.valoresIcmsProprio = null;    
        }

        self.limparRed = function(){

            self.valoresIcmsBaseRed = null;
        }

        self.limparDifal = function(){

            self.valoresIcmsDifal = null;
        }

        self.voltar = function(){

            $location.path('/home');
        }

        $(document).ready(function(){
            $('[data-toggle="popover"]').popover();   
        });
    }])
}())
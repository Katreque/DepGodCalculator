(function(){   
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioService', 'IcmsbaseRedService', 'IcmsdifalService', function($location, IcmsproprioService, IcmsbaseRedService ,IcmsdifalService){
        var self = this;

        self.valoresIcmsProprio = {};
        self.valoresIcmsBaseRed = {};
        self.valoresIcmsDifal = {};

        self.resultadoIcmsProprio = function(){
            self.valoresIcmsProprio = new IcmsproprioService(self.valoresIcmsProprio.base, self.valoresIcmsProprio.aliquota);
        }

        self.resultadoIcmsRed =  function(){

            IcmsBaseRedService.IcmsBaseRed(self.valoresIcmsBaseRed.base, self.valoresIcmsBaseRed.aliquota, self.valoresIcmsBaseRed.aliquotaRed);
            self.valoresIcmsBaseRed = valor;
        }

         self.resultadoIcmsDifal = function(){
            IcmsDifalService.IcmsDifal(self.valoresIcmsDifal.ano, self.valoresIcmsDifal.base, self.valoresIcmsDifal.aliquotaInterna, self.valoresIcmsDifal.aliquotaInterestadual, self.valoresIcmsDifal.aliquotaFcp);
            self.valoresIcmsDifal = valor;
            
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
    }])
}())
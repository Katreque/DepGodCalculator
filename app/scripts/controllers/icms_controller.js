(function(){   
    'use strict'

angular.module('DEPGod')
    .controller('controladorICMS', ['$location', 'IcmsproprioModel', 'IcmsbaseRedModel', 'IcmsdifalService', function($location, IcmsproprioModel, IcmsbaseRedModel ,IcmsdifalService){
        var self = this;

        self.valoresIcmsProprio = new IcmsproprioModel();
        self.valoresIcmsBaseRed = new IcmsbaseRedModel();
        self.valoresIcmsDifal = null;

        self.resultadoIcmsProprio = function(){
            self.valoresIcmsProprio = new IcmsproprioModel();
        }

        self.resultadoIcmsRed =  function(){
            self.valoresIcmsBaseRed = new IcmsbaseRedModel();
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

            self.valoresIcmsProprio = new IcmsproprioModel();    
        }

        self.limparRed = function(){

            self.valoresIcmsBaseRed = new IcmsbaseRedModel();
        }

        self.limparDifal = function(){

            self.valoresIcmsDifal = null;
        }

        self.voltar = function(){

            $location.path('/home');
        }
    }])
}())
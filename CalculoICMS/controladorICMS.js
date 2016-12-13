'use strict';

angular.module('calculoICMS')

    .factory('IcmsProprio', function(){

        var IcmsProprio = function(base, aliquota){
            this.base = base;
            this.aliquota = aliquota;
            this.valor = null;
            this.valorDiscriminacao = null;
            this._calculoProprio();
        };

        IcmsProprio.prototype._calculoProprio = function(){

            if(!(this.base <= 0 || this.aliquota <= 0 || this.aliquota > 100)){

                var resultado = this.base*this.aliquota/100;
                this.valor = parseFloat(resultado).toFixed(3);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(2);       
            }
        }

        return IcmsProprio;
    })

    .factory("IcmsBaseRed", function(){

        var IcmsBaseRed = function(base, aliquota, aliquotaRed){
            this.base = base;
            this.aliquota = aliquota;
            this.aliquotaRed = aliquotaRed;
            this.valor = null;
            this.valorDiscriminacao = null;
            this._calculoRed();
        }

        IcmsBaseRed.prototype._calculoRed = function(){

            if(!(this.base <= 0 || this.aliquota <= 0 || this.aliquota > 100 || this.aliquotaRed <= 0 || this.aliquotaRed > 100)){
                
                var resultado = ((this.base - (this.base*this.aliquotaRed/100))*this.aliquota/100);
                this.valor = parseFloat(resultado).toFixed(3);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(2);   
            }

        }

        return IcmsBaseRed;
    })

    .factory("IcmsDifal", function(){

        var IcmsDifal = function(ano, base, aliquotaInterna, aliquotaInterestadual, aliquotaFcp){
            this.ano = ano;
            this.base = base;
            this.aliquotaInterna = aliquotaInterna;
            this.aliquotaInterestadual = aliquotaInterestadual;
            this.aliquotaFcp = aliquotaFcp;
            this.valorDifal = this.base*(this.aliquotaInterna - this.aliquotaInterestadual)/100;
            this.valorFcp = this.base*this.aliquotaFcp/100;
            this.valorOrigem = null;
            this.valorDestino = null;
            this.valorDestinoeFcp = null;
            this._calculoDifal();
        }

        IcmsDifal.prototype._calculoDifal = function(){

            if(!(this.ano <= 0 || this.base <= 0 || this.aliquotaInterna <= 0 || this.aliquotaInterna > 100 || this.aliquotaInterestadual <= 0 || this.aliquotaInterestadual > 100 || (this.aliquotaInterna < this.aliquotaInterestadual) || this.aliquotaFcp < 0 || this.aliquotaFcp > 100)){


            var origem, destino;

            if(this.ano <= 2016){

                origem = this.valorDifal*0.60;
                destino = (this.valorDifal*0.40) + this.valorFcp;
            }

            if(this.ano == 2017){

                origem = this.valorDifal*0.40;
                destino = (this.valorDifal*0.60) + this.valorFcp;
            }

            if(this.ano == 2018){

                origem = this.valorDifal*0.20;
                destino = (this.valorDifal*0.80) + this.valorFcp;
            }

            if(this.ano >= 2019){

                origem = 0;
                destino = this.valorDifal + this.valorFcp;
            }

                this.valorDifal= parseFloat(this.valorDifal).toFixed(2);
                this.valorFcp = parseFloat(this.valorFcp).toFixed(2);
                this.valorDestinoeFcp = parseFloat(destino).toFixed(2);
                this.valorOrigem = parseFloat(origem).toFixed(3);
                this.valorDestino = parseFloat(destino-this.valorFcp).toFixed(3);

         }   
    }

        return IcmsDifal;
    })

    .controller('controladorICMS', function($scope, $location, IcmsProprio, IcmsBaseRed, IcmsDifal){

        $scope.valoresIcmsProprio = {}

        $scope.valoresIcmsBaseRed = {}

        $scope.valoresIcmsDifal = {}

        $scope.validacaoBase = function(base){

                if(base <= 0){

                    return false;
                }

                    return true;
            }

        $scope.validacaoAliquotaNaoAceitaZero = function(aliquota){
            
             if(aliquota <= 0 || aliquota > 100){

                    return false;
                }
                    return true;
        }

        $scope.validacaoAliquotaAceitaZero = function(aliquota){
            
             if(aliquota < 0 || aliquota > 100){

                    return false;
                }
                    return true;
        }

        $scope.validacaoAliquotaInternaMaiorInterest = function(aliquotaInterna, aliquotaInterestadual){

            if(aliquotaInterna < aliquotaInterestadual){

                return false;
            }
                return true;
        }

        $scope.resultadoIcmsProprio = function(){

            var valor = new IcmsProprio($scope.valoresIcmsProprio.base, $scope.valoresIcmsProprio.aliquota);
            $scope.valoresIcmsProprio = valor;         
        }

        $scope.resultadoIcmsRed =  function(){

            var valor = new IcmsBaseRed($scope.valoresIcmsBaseRed.base, $scope.valoresIcmsBaseRed.aliquota, $scope.valoresIcmsBaseRed.aliquotaRed);
            $scope.valoresIcmsBaseRed = valor;
        }

         $scope.resultadoIcmsDifal = function(){
            var valor = new IcmsDifal($scope.valoresIcmsDifal.ano, $scope.valoresIcmsDifal.base, $scope.valoresIcmsDifal.aliquotaInterna, $scope.valoresIcmsDifal.aliquotaInterestadual, $scope.valoresIcmsDifal.aliquotaFcp);
            $scope.valoresIcmsDifal = valor;
            
        }

        $scope.limparProprio = function(form){

            $scope.valoresIcmsProprio = null;
            form.$setUntouched();     
        }

        $scope.limparRed = function(form){

            $scope.valoresIcmsBaseRed = null; 
            form.$setUntouched(); 
        }

        $scope.limparDifal = function(form){

            $scope.valoresIcmsDifal = null;
            form.$setUntouched();
        }

        $scope.voltar = function(){

            $location.path('/home');
        }
});
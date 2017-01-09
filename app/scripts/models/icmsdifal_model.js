(function(){
    'use strict'

angular.module('DEPGod')
    .factory("IcmsdifalModel", function(){

        var IcmsDifal = function(){
            this.ano = undefined;
            this.base = undefined;
            this.aliquotaInterna = undefined;
            this.aliquotaInterestadual = undefined;
            this.aliquotaFcp = undefined;
            this.valorDifal = undefined;
            this.valorFcp = undefined;
            this.valorOrigem = 0;
            this.valorDestino = 0;
            this.valorDestinoeFcp = 0;
        }

        IcmsDifal.prototype.isValid = function(){

            return (this.ano > 0) && (this.base > 0) && (this.aliquotaInterna > 0 && this.aliquotaInterna < 101) && (this.aliquotaInterestadual > 0 && this.aliquotaInterestadual < 101) && (this.aliquotaFcp > -1 && this.aliquotaFcp < 101) && (this.aliquotaInterna > this.aliquotaInterestadual)
        }

        IcmsDifal.prototype.calcular = function(){

            this.valorDifal = this.base*(this.aliquotaInterna - this.aliquotaInterestadual)/100;
            this.valorFcp = this.base*this.aliquotaFcp/100;
            
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
                this.valorOrigem = parseFloat(origem).toFixed(2);
                this.valorDestino = parseFloat(destino-this.valorFcp).toFixed(2);

         }

         IcmsDifal.prototype.validacaoBaseAno = function(valor){
             if(valor <= 0){
                    return false;
                }
                return true;
         }

         IcmsDifal.prototype.validacaoAliquotaNaoAceitaZero = function(aliquota){
            if(aliquota <= 0 || aliquota > 100){
                    return false;
                }
                return true;
         }

         IcmsDifal.prototype.validacaoAliquotaAceitaZero =  function(){
             if(this.aliquotaFcp < 0 || this.aliquotaFcp > 100){
                    return false;
                }
                return true;
         }

         IcmsDifal.prototype.validacaoAliquotaInternaMaiorInterest =  function(){
             if(this.aliquotaInterna <= this.aliquotaInterestadual){
                return false;
            }
            return true;
         }

        return IcmsDifal;
    })
}())
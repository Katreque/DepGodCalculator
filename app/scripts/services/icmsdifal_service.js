(function(){
    'use strict'

angular.module('DEPGod')
    .factory("IcmsdifalService", function(){

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
                this.valorOrigem = parseFloat(origem).toFixed(2);
                this.valorDestino = parseFloat(destino-this.valorFcp).toFixed(2);

         }   
    }

        return IcmsDifal;
    })
}())
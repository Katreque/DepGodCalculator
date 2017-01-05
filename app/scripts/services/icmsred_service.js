(function(){
    'use strict'

angular.module('DEPGod')
    .factory("IcmsbaseRedModel", function(){

        var IcmsBaseRed = function(){
            this.base = undefined;
            this.aliquota = undefined;
            this.aliquotaRed = undefined;
            this.valor = 0;
            this.valorDiscriminacao = 0;
        }

        IcmsBaseRed.prototype.isValid = function(){
            return (this.base > 0) && (this.aliquota > 0 && this.aliquota < 101) && (this.aliquotaRed > 0 && this.aliquotaRed < 101);
        }

        IcmsBaseRed.prototype.calcular = function(){
                var resultado = ((this.base - (this.base*this.aliquotaRed/100))*this.aliquota/100);
                this.valor = parseFloat(resultado).toFixed(2);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(3);   
        }

        return IcmsBaseRed;
    })
}())
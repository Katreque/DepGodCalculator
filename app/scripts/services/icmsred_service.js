(function(){
    'use strict'

angular.module('DEPGod')
    .factory("IcmsbaseRedService", function(){

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
                this.valor = parseFloat(resultado).toFixed(2);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(3);   
            }

        }

        return IcmsBaseRed;
    })
}())
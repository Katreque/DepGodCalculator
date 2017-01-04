(function(){
    'use strict';

angular.module('DEPGod')
    .factory('IcmsproprioService', function(){
        var IcmsProprio = function(base, aliquota){
            this.base = base;
            this.aliquota = aliquota;
            this.valor = null;
            this.valorDiscriminacao = null;
            this._calculoProprio();
        }

        IcmsProprio.prototype._calculoProprio = function(){

            if(!(this.base <= 0 || this.aliquota <= 0 || this.aliquota > 100)){

                var resultado = this.base*this.aliquota/100;
                this.valor = parseFloat(resultado).toFixed(2);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(3);       
            }
        }

        return IcmsProprio;
    })
}())
(function(){
    'use strict';

angular.module('DEPGod')
    .factory('IcmsproprioModel', function(){
        var IcmsProprio = function(){
            this.base = undefined;
            this.aliquota = undefined;
            this.valor = 0;
            this.valorDiscriminacao = 0;
        }

        IcmsProprio.prototype.isValid = function(){
            return (this.base > 0) && (this.aliquota > 0 && this.aliquota < 101);
        }

        IcmsProprio.prototype.calcular = function(){
            var resultado = this.base*this.aliquota/100;
            this.valor = parseFloat(resultado).toFixed(2);
            this.valorDiscriminacao = parseFloat(resultado).toFixed(3);       
        }

        IcmsProprio.prototype.validacaoBase = function(){
            
            if(this.base <= 0){

                    return false;
                }
                    return true;
        }

        IcmsProprio.prototype.validacaoAliquotaNaoAceitaZero = function(){
            if(this.aliquota <= 0 || this.aliquota > 100){

                    return false;
                }
                    return true;
        }

        return IcmsProprio;
    })
}())
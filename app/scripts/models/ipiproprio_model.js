(function(){
    'use strict'

angular.module('DEPGod')
    .factory('IpiProprioModel', function(){
        var IpiProprio = function(){
            this.base = undefined;
            this.aliquota = undefined;
            this.valor = 0;
            this.valorDiscriminacao = 0;
        }

    IpiProprio.prototype.isValid =  function(){
        return (this.base > 0) && (this.aliquota > 0 && this.aliquota < 101);
    }

    IpiProprio.prototype.calcular = function(){
        this.valor = parseFloat(this.base*this.aliquota/100).toFixed(2);
        this.valorDiscriminacao = parseFloat(this.valor).toFixed(3);
    }
        return IpiProprio;
    })
}())
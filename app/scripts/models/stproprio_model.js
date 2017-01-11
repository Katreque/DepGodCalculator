(function(){
    'use strict'

angular.module('DEPGod')
    .factory('StProprioModel', function(){
        var StProprio = function(){
            this.base = undefined;
            this.aliquotaInterna = undefined;
            this.aliquotaInterestadual =  undefined;
            this.mva = undefined;
            this.ipi = undefined;
            this.baseSt = undefined;
            this.baseStIpi = undefined;
            this.valorIcms = 0;
            this.valorSt = 0;
            this.valorDiscriminacao = 0;
        }

    StProprio.prototype.isValid = function(){
        return (this.base > 0) && (this.aliquotaInterna > 0 && this.aliquotaInterna < 101) && (this.aliquotaInterestadual > 0 && this.aliquotaInterestadual < 101) && (this.mva >= 0 && this.mva < 101) && (this.ipi >= 0) && (this.aliquotaInterna > this.aliquotaInterestadual);
    }

    StProprio.prototype.calcular = function(){

        this.valorIcms = this.base*this.aliquotaInterestadual/100;
        this.baseSt = this.ipi+this.base*(1+(this.mva/100));
        this.valorSt = (this.baseSt*this.aliquotaInterna/100) - this.valorIcms;

        this.valorIcms = parseFloat(this.valorIcms).toFixed(2);
        this.baseStIpi = parseFloat(this.base+this.ipi).toFixed(2);
        this.baseSt = parseFloat(this.baseSt).toFixed(2);
        this.valorDiscriminacao = parseFloat(this.valorSt).toFixed(3);
        this.valorSt = parseFloat(this.valorSt).toFixed(2);
    }

    StProprio.prototype.validacaoBase = function(){
        if(this.base <= 0){
            return false;
        }
        return true;
    }

    StProprio.prototype.validacaoAliquotaNaoAceitaZero = function(aliquota){
        if(aliquota <= 0 || aliquota > 100){
            return false;
        }
        return true;
    }

    StProprio.prototype.validacaoAliquotaAceitaZero = function(aliquota){
        if(aliquota < 0 || aliquota > 100){
            return false;
        }
        return true;
    }

    StProprio.prototype.validacaoAliquotaInterestadual = function(){
        if(this.aliquotaInterna <= this.aliquotaInterestadual){
            return false;
        }
        return true;
    }
        return StProprio;
    })
}())
(function(){
    'use strict';

angular.module('DEPGod')
    .controller('controladorCabecalho', ['AltPassaporteListagemProdutosService', function(AltPassaporteListagemProdutosService){
    var self = this;

    self.produtosHabilitados = {};

        AltPassaporteListagemProdutosService.getProdutosHabilitados()
        .then((res) => {
            console.log(res)
            return self.produtosHabilitados = res;
        })
        .catch((err) => {
            return console.log(err + " WTF just happen?");
        })    
    }])
}())
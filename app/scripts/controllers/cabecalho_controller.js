(function(){
    'use strict';

angular.module('DEPGod')
    .controller('controladorCabecalho', ['$window', 'AltPassaporteListagemProdutosService', 'AltPassaporteUsuarioLogadoManager', function($window, AltPassaporteListagemProdutosService, AltPassaporteUsuarioLogadoManager){
    var self = this;

    self.produtosHabilitados = {};
    self.informacoesUsuario = {};

        self.informacoesUsuario = AltPassaporteUsuarioLogadoManager.retorna();

        AltPassaporteListagemProdutosService.getProdutosHabilitados()
        .then((res) => {
            return self.produtosHabilitados = res;
        })
        .catch((err) => {
            if(err.status === -1){
                return $window.alert("Usuário não autenticado.");
            }

            return $window.alert("Ocorreu algum erro inesperado ao carregar seus produtos habilitados.");
        })    
    }])
}())
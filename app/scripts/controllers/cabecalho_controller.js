(function(){
    'use strict';

angular.module('DEPGod')
    .controller('controladorCabecalho', ['$log', 'AltPassaporteListagemProdutosService', 'AltPassaporteUsuarioLogadoManager', 'PASSAPORTE_LOGOUT', function($log, AltPassaporteListagemProdutosService, AltPassaporteUsuarioLogadoManager, PASSAPORTE_LOGOUT){
    var self = this;

    self.produtosHabilitados = {};
    self.informacoesUsuario = {};
    self.logoutLink = PASSAPORTE_LOGOUT;

        self.informacoesUsuario = AltPassaporteUsuarioLogadoManager.retorna();

        AltPassaporteListagemProdutosService.getProdutosHabilitados()
        .then((res) => {
            return self.produtosHabilitados = res;
        })
        .catch((err) => {
            if(err.status === -1){
                return $log.error("Usuário não autenticado.");
            }

            return $log.error("Ocorreu algum erro inesperado ao carregar seus produtos habilitados.");
        })    
    }])
}())
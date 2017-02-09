(function(){
    'use strict';

angular.module('DEPGod')
        .controller('controladorCabecalho', ['$log', 'AltPassaporteListagemProdutosService', 'AltPassaporteUsuarioLogadoManager', 'PASSAPORTE_LOGOUT', 'MSG_ERRO_PRODUTO', 'AltAlertaFlutuanteService', function($log, AltPassaporteListagemProdutosService, AltPassaporteUsuarioLogadoManager, PASSAPORTE_LOGOUT, MSG_ERRO_PRODUTO, AltAlertaFlutuanteService){

            var self = this;

            self.produtosHabilitados = {};
            self.informacoesUsuario = {};
            self.logoutLink = PASSAPORTE_LOGOUT;

            self.informacoesUsuario = AltPassaporteUsuarioLogadoManager.retorna();

            AltPassaporteListagemProdutosService.getProdutosHabilitados()
            .then(function(res){
                return self.produtosHabilitados = res;
            })
            .catch(function(err){
                AltAlertaFlutuanteService.exibe({
                    msg: MSG_ERRO_PRODUTO
                })
            })
    }])
}())

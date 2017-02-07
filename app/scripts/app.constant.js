(function(){
    'use strict'

    var BASE_URL = altAmbienteUrl.getEndpoint('https://passaporte2__ambiente__.alterdata.com.br/');
    var BASE_URL_CALC = altAmbienteUrl.getEndpoint('https://calculadora__ambiente__.alterdata.com.br:1307/');

angular.module('DEPGod')
    .constant('BASE_PASSAPORTE_AUTH', BASE_URL)
    .constant('PASSAPORTE_LOGOUT', BASE_URL + 'passaporte-rest-api/logout.html')
    .constant('RETORNA_CALCULADORA', '?continue=' + BASE_URL_CALC)
    .constant('MSG_ERRO_PRODUTO', "Ocorreu algum erro inesperado ao carregar seus produtos habilitados.")
    .constant('ABRE_MODAL_ICMS_PROPRIO', 'icmsProprioListener')
}())

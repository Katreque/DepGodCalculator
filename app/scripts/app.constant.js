(function(){
    'use strict'

    var BASE_URL = altAmbienteUrl.getEndpoint('https://passaporte2__ambiente__.alterdata.com.br/');

angular.module('DEPGod')
    .constant('BASE_PASSAPORTE_AUTH', BASE_URL)
    .constant('PASSAPORTE_LOGOUT', BASE_URL + 'passaporte-rest-api/logout.html')
}())
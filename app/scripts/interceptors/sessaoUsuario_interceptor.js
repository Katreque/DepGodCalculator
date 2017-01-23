(function(){
    'use strict';

angular.module('DEPGod')
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push('sessaoUsuarioInterceptor');
    }])

    .factory('sessaoUsuarioInterceptor', ['$q', '$window', 'BASE_PASSAPORTE_AUTH', 'RETORNA_CALCULADORA', function($q, $window, BASE_PASSAPORTE_AUTH, RETORNA_CALCULADORA){
        return{
            responseError: function(err){
               if(err.status !== -2 && err.status !== 401){
                   return $q.reject(err);
               }

               $window.location.replace(BASE_PASSAPORTE_AUTH + RETORNA_CALCULADORA);
               return $q.reject(err);
            }
        }
    }])
}())
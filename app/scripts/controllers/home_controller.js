'use strict';
 
angular.module('DEPGod')
.controller('controladorHome', ['$location', function($location){
    var self = this;

        self.calculoST = function(){
            $location.path('/calculost');
        }

         self.calculoICMS = function(){
            $location.path('/calculoicms');
        }

         self.calculoIPI = function(){
            $location.path('/calculoipi');
        }

         self.sobre = function(){
            $location.path('/sobre');
        }
}]);
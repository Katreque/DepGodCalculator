'use strict';
 
angular.module('ControleCalculo')
 
.controller('controladorHome', function($scope, $location){
        $scope.calculoST = function(){
            $location.path('/calculost');
        }

         $scope.calculoICMS = function(){
            $location.path('/calculoicms');
        }

         $scope.calculoIPI = function(){
            $location.path('/calculoipi');
        }

         $scope.sobre = function(){
            $location.path('/sobre');
        }
});
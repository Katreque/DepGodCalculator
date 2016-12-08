'use strict';

angular.module('calculoST')

.controller('controladorST', function($scope, $location){

    $scope.stProprio = {

        'Base': $scope.baseStProprio,
        'AliquotaInterna': $scope.aliquotaInternaStPropria,
        'AliquotaInterest': $scope.aliquotaInterestStPropria,
        'Mva': $scope.Mva,
        'Ipi': $scope.valorIpiStProprio,
        'ValorIcms': null,
        'BaseSt': null,
        'BaseStIpi':null,
        'ValorSt': $scope.valorStProprio,
        'ValorStDiscriminacao': null,
    }

    $scope.calculoST = function(){

        if($scope.stProprio.Base == null){

            alert("Valor da base de cálculo inválida! Verifique.");
        }else{

            if($scope.stProprio.AliquotaInterna == null){

                alert("Valor da alíquota interna inválida! Verifique.");
            }else{

                if($scope.stProprio.AliquotaInterest == null){

                    alert("Valor da alíquota interestadual inválida! Verifique.");

                }else{

                    if($scope.stProprio.AliquotaInterest > $scope.stProprio.AliquotaInterna){

                            alert("Valor da alíquota interestadual está maior que a interna! Verifique.");
                    }else{

                        if($scope.stProprio.Mva == null){
                                alert("Valor da alíquota do MVA inválida! Verifique.");
                        }else{

                            $scope.stProprio.ValorIcms = $scope.stProprio.Base*$scope.stProprio.AliquotaInterest/100;
                            $scope.stProprio.BaseSt = $scope.stProprio.Ipi+$scope.stProprio.Base*(1+($scope.stProprio.Mva/100));
                            $scope.stProprio.ValorSt = ($scope.stProprio.BaseSt*$scope.stProprio.AliquotaInterna/100) - $scope.stProprio.ValorIcms;

                            $scope.stProprio.ValorIcms = parseFloat($scope.stProprio.ValorIcms).toFixed(2);
                            $scope.stProprio.BaseStIpi = parseFloat($scope.stProprio.Base+$scope.stProprio.Ipi).toFixed(2);
                            $scope.stProprio.BaseSt = parseFloat($scope.stProprio.BaseSt).toFixed(2);
                            $scope.stProprio.ValorSt = parseFloat($scope.stProprio.ValorSt).toFixed(3);
                            $scope.stProprio.ValorStDiscriminacao = parseFloat($scope.stProprio.ValorSt).toFixed(2);
                        }
                    }
                }
            }
        }
    } 

    $scope.voltar = function(){

        $location.path('/home');
    }

    $scope.limparStProprio = function(){

        $scope.stProprio = null;
    }

});
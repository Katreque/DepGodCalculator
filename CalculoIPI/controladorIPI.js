'use strict'

angular.module('calculoIPI')

.controller('controladorIPI', function($scope, $location){

        $scope.ipiProprio = {

            'Base': $scope.baseIpiProprio,
            'Aliquota': $scope.aliquotaIpiProprio,
            'Valor': $scope.valorIpiProprio,
            'ValorDiscriminacao': null,
        }

        $scope.calculoIpiProprio = function(){

            if($scope.ipiProprio.Base == null){

                alert("Valor da base de cálculo inválida! Verifique.");
            }else{

                if($scope.ipiProprio.Aliquota == null){

                    alert("Valor da alíquota de Ipi inválida! Verifique.");
                }else{

                        $scope.ipiProprio.Valor = $scope.ipiProprio.Base*($scope.ipiProprio.Aliquota/100);

                        $scope.ipiProprio.Valor = parseFloat($scope.ipiProprio.Valor).toFixed(3);
                        $scope.ipiProprio.ValorDiscriminacao = parseFloat($scope.ipiProprio.Valor).toFixed(2);

                    }
                }
            }

        $scope.voltar = function(){

            $location.path('/home');
        }

        $scope.limparIpiProprio = function(){

            $scope.ipiProprio = null;
        }
});
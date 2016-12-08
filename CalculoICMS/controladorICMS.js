'use strict';

angular.module('calculoICMS')

    .factory('IcmsProprio', function(){

        var IcmsProprio = function(base, aliquota){
            this.base = base;
            this.aliquota = aliquota;
            this.valor = null;
            this.valorDiscriminacao = null;
            this._calculoProprio();
        };

        IcmsProprio.prototype._calculoProprio = function(){

            if(!(this.base <= 0 || this.aliquota <= 0 || this.aliquota > 100)){

                var resultado = this.base*this.aliquota/100;
                this.valor = parseFloat(resultado).toFixed(3);
                this.valorDiscriminacao = parseFloat(resultado).toFixed(2);       
            }
        }

        return IcmsProprio;
    })

    .controller('controladorICMS', function($scope, $location, IcmsProprio){

        $scope.valoresIcmsProprio = {}

        $scope.IcmsBaseRed = {

            'Base': $scope.baseIcmsRed,
            'Aliquota': $scope.aliquotaIcms,
            'AliquotaRed': $scope.aliquotaIcmsReduzida,
            'Valor': $scope.valorIcmsRed,
            'ValorDiscriminacao': $scope.valorIcmsRedDescriminicao,
        }

        $scope.IcmsDifal = {

            'Ano': $scope.anoIcmsDifal,
            'Base': $scope.baseIcmsDifal,
            'AliquotaInterna': $scope.aliquotaIcmsInterna,
            'AliquotaInterest': $scope.aliquotaIcmsInterest,
            'AliquotaFcp': $scope.aliquotaFcp,
            'Fcp': $scope.Fcp,
            'ValorDifal': $scope.valorDifal,
            'ValorOrigem': $scope.valorIcmsDifalOrigem,
            'ValorDestino': $scope.valorIcmsDifalDestino,
            'ValorDestinoFcp': $scope.valorDestinoFcp,
        }

        $scope.validacaoBase = function(base){

                if(base <= 0){

                    return false;
                }else{

                    return true;
                }
            }

        $scope.validacaoAliquota = function(aliquota){
            
             if(aliquota <= 0 || aliquota > 100){

                    return false;
                }else{

                    return true;
                }
        }

        $scope.resultadoIcmsProprio = function(){

            var valor = new IcmsProprio($scope.valoresIcmsProprio.base, $scope.valoresIcmsProprio.aliquota);
            $scope.valoresIcmsProprio = valor;
        }

        $scope.icmsredbaseICMS =  function(){

            if($scope.IcmsBaseRed.Base <= 0 || $scope.IcmsBaseRed.Aliquota <= 0 || $scope.IcmsBaseRed.AliquotaRed <= 0 || $scope.IcmsBaseRed.Aliquota > 100 || $scope.IcmsBaseRed.AliquotaRed > 100){

                $scope.IcmsBaseRed.Valor = null; 
                $scope.IcmsBaseRed.ValorDiscriminacao = null;
            }else{

                var resultado = ($scope.IcmsBaseRed.Base - ($scope.IcmsBaseRed.Base/100*$scope.IcmsBaseRed.Aliquota))*$scope.IcmsBaseRed.AliquotaRed/100;

                $scope.IcmsBaseRed.Valor = parseFloat(resultado).toFixed(3);
                $scope.IcmsBaseRed.ValorDiscriminacao = parseFloat(resultado).toFixed(2);
            }
        }

         $scope.icmsDifal = function(){

            if($scope.IcmsDifal.Base == null){

                alert("Valor da base de cálculo inválida! Verifique.");
            }else{

                if($scope.IcmsDifal.AliquotaInterna == null){

                    alert("Valor da alíquota interna inválida! Verifique.");
                }else{

                    if($scope.IcmsDifal.AliquotaInterest == null){

                        alert("Valor da alíquota interestadual inválida! Verifique.");
                    }else{

                        if($scope.IcmsDifal.AliquotaInterest > $scope.IcmsDifal.AliquotaInterna){

                            alert("Valor da alíquota interestadual está maior que a interna! Verifique.");
                        }else{

                            if($scope.IcmsDifal.AliquotaFcp == null){
                                
                                alert("Valor da alíquota do FCP inválida! Verifique.");
                            }else{

                                $scope.IcmsDifal.ValorDifal = $scope.IcmsDifal.Base*($scope.IcmsDifal.AliquotaInterna - $scope.IcmsDifal.AliquotaInterest)/100;
                                $scope.IcmsDifal.Fcp = ($scope.IcmsDifal.Base*$scope.IcmsDifal.AliquotaFcp)/100;

                                var origem, destino;

            if($scope.IcmsDifal.Ano <= 2016){

                origem = $scope.IcmsDifal.ValorDifal*0.60;
                destino = ($scope.IcmsDifal.ValorDifal*0.40) + $scope.IcmsDifal.Fcp;
            }

            if($scope.IcmsDifal.Ano == 2017){

                origem = $scope.IcmsDifal.ValorDifal*0.40;
                destino = ($scope.IcmsDifal.ValorDifal*0.60) + $scope.IcmsDifal.Fcp;
            }

            if($scope.IcmsDifal.Ano == 2018){

                origem = $scope.IcmsDifal.ValorDifal*0.20;
                destino = ($scope.IcmsDifal.ValorDifal*0.80) + $scope.IcmsDifal.Fcp;
            }

            if($scope.IcmsDifal.Ano >= 2019){

                origem = 0;
                destino = $scope.IcmsDifal.ValorDifal + $scope.IcmsDifal.Fcp;
            }

            $scope.IcmsDifal.ValorDifal = parseFloat($scope.IcmsDifal.ValorDifal).toFixed(2);
            $scope.IcmsDifal.Fcp = parseFloat($scope.IcmsDifal.Fcp).toFixed(2);
            $scope.IcmsDifal.ValorDestinoFcp = parseFloat(destino).toFixed(2);
            $scope.IcmsDifal.ValorOrigem = parseFloat(origem).toFixed(3);
            $scope.IcmsDifal.ValorDestino = parseFloat(destino-$scope.IcmsDifal.Fcp).toFixed(3);

                            }
                        }
                    }
                }        
            }
        }

        $scope.limparProprio = function(form){

            form.$setUntouched();
            $scope.valoresIcmsProprio = null;   
        }

        $scope.limparRed = function(form){

            form.$setUntouched();
            $scope.IcmsBaseRed = null; 
        }

        $scope.limparDifal = function(form){

            form.$setUntouched();
            $scope.IcmsDifal = null;
        }

        $scope.voltar = function(){

            $location.path('/home');
        }
});
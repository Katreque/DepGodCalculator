(function(){
  'use strict';

  var TEMPLATE = `
            <div class="container">
                <div id="icmsRedModal" class="modal fade" role="dialog" tabindex="-1">
                    <div class="modal-dialog modal-grande">
                        <div class="modal-content">
                            <div class="modal-header alt-cor-principal">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">ICMS com base Reduzida</h4>
                            </div>
                            <div class="modal-body alt-overflow-hidden">
                                <form name="icmsRedForm">
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="form-group" ng-class="{'has-error': !ctrlIcmsRed.valoresIcmsBaseRed.validacaoBase(), 'has-success':ctrlIcmsRed.valoresIcmsBaseRed.validacaoBase()}">
                                           <label class="help-block" for="lbBaseIcmsRed">Base de Calculo</label>
                                           <input id="baseIcmsRed" type="number" ng-model="ctrlIcmsRed.valoresIcmsBaseRed.base" class="form-control" required>
                                           <span id="spanBaseIcmsRed" class="help-block msg" ng-show="!ctrlIcmsRed.valoresIcmsBaseRed.validacaoBase()">Valor inválido!</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="form-group" ng-class="{'has-error': !ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquota), 'has-success':ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquota)}">
                                            <label class="help-block" for="lbAliquotaIcms">Alíquota ICMS</label>
                                            <div class="input-group">
                                                <input id="aliqIcmsRed" type="number" ng-model="ctrlIcmsRed.valoresIcmsBaseRed.aliquota" class="form-control" name="aliquotaIcms" required>
                                                <span class="input-group-addon" id="percent-addon">%</span>
                                            </div>
                                            <span id="spanAliqIcmsRed" class="help-block msg" ng-show="!ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquota)">Valor inválido!</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="form-group" ng-class="{'has-error': !ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquotaRed), 'has-success':ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquotaRed)}">
                                            <label class="help-block" for="lbAliquotaIcmsReduzida">Redução</label>
                                            <div class="input-group">
                                                <input id="aliqRed" type="number" ng-model="ctrlIcmsRed.valoresIcmsBaseRed.aliquotaRed" class="form-control" name="aliquotaIcmsReduzida" required>
                                                <span class="input-group-addon" id="percent-addon">%</span>
                                            </div>
                                            <span id="spanAliqRed" class="help-block msg" ng-show="!ctrlIcmsRed.valoresIcmsBaseRed.validacaoAliquotaNaoAceitaZero(ctrlIcmsRed.valoresIcmsBaseRed.aliquotaRed)">Valor inválido!</span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <button id="btnIcmsRed" type="button" class="btn btn-nmain btn-block" ng-click="ctrlIcmsRed.valoresIcmsBaseRed.calcular()" ng-disabled="!ctrlIcmsRed.valoresIcmsBaseRed.isValid()">Calcular</button>
                                        </div>
                                        <a id="discrimIcmsRed" title="Discriminação" data-toggle="collapse" data-target="#discriminacaoRed" class="fa fa-question-circle-o pull-right help-discriminacao"></a>
                                        <label class="help-block" for="lbValorIcmsRed">Valor ICMS</label>
                                        <pre id="resultIcmsRed" ng-bind="ctrlIcmsRed.valoresIcmsBaseRed.valor | currency"></pre>
                                    </div>
                                    <div class="col-xs-12">
                                        <div id="discriminacaoRed" class="collapse">
                                            <div class="panel panel-primary">
                                                <div class="panel-heading">Discriminação Calculo
                                                    <button type="button" class="close" data-toggle="collapse" data-target="#discriminacaoRed">&times;</button>
                                                </div>
                                                <div class="panel-body">
                                                    <center>
                                                    <h6>(Base de calculo - (Al de redução/100)) * (Alíquota de ICMS)/100 = (Valor do ICMS Red.)<h6>
                                                    <h5>{{ctrlIcmsRed.valoresIcmsBaseRed.base | currency: 'R$':3}} - ({{ctrlIcmsRed.valoresIcmsBaseRed.aliquota}}/100) * {{ctrlIcmsRed.valoresIcmsBaseRed.aliquotaRed}}/100 = {{ctrlIcmsRed.valoresIcmsBaseRed.valorDiscriminacao | currency: 'R$':3}}<h5>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <a id="btnLimparIcmsRed" type="button" class="btn btn btn-default" ng-click="ctrlIcmsRed.limparRed()">Limpar</a>
                                <a id="btnFecharModalIcmsRed" type="button" class="btn btn btn-default" data-dismiss="modal">Fechar</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `
  angular.module('DEPGod')
    .service('icmsRedHelper', ['$rootScope', 'ABRE_MODAL_ICMS_RED', function($rootScope, ABRE_MODAL_ICMS_RED){
      this.exibe = function(arg){
        $rootScope.$broadcast(ABRE_MODAL_ICMS_RED, arg);
      }
    }])
    .directive('icmsRedModalOpener', [function(){
      var _controller = [
        '$rootScope',
        'ABRE_MODAL_ICMS_RED',
        'AltModalService',
        'IcmsbaseRedModel',
        function($rootScope, ABRE_MODAL_ICMS_RED, AltModalService, IcmsbaseRedModel){
          $rootScope.$on(ABRE_MODAL_ICMS_RED, (event, arg) => {
            AltModalService.open('#icmsRedModal');
          })

        this.valoresIcmsBaseRed = new IcmsbaseRedModel();

        this.limparRed = function(){
            this.valoresIcmsBaseRed = new IcmsbaseRedModel();
          }
        }
      ];

      var _controllerAs = 'ctrlIcmsRed';

      return{
        scope: {},
        restrict: 'A',
        template: TEMPLATE,
        controller: _controller,
        controllerAs: _controllerAs,
      };

    }])
}())

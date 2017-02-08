  (function(){
    'use strict'

  var TEMPLATE = `
        <div class="container">
            <div id="icmsDifalModal" class="modal fade" role="dialog" tabindex="-1">
                <div class="modal-dialog modal-grande">
                    <div class="modal-content">
                        <div class="modal-header alt-cor-principal">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">ICMS Difal</h4>
                        </div>
                        <div class="modal-body alt-overflow-hidden">
                            <form name="icmsDifalForm">
                                <div class="col-sm-6 col-xs-12">
                                    <div class="form-group" ng-class="{'has-error': !ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.ano), 'has-success':ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.ano)}">
                                        <label class="help-block" for="lbAnoIcmsDifal">Ano da Nota</label>
                                        <input id="anoNotaDifal" type="number" ng-model="ctrlIcmsDifal.valoresIcmsDifal.ano" class="form-control" name="anoIcmsDifal" required>
                                        <span id="spanAnoNotaDifal" class="help-block msg" ng-show="!ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.ano)">Valor inválido!</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <div class="form-group" ng-class="{'has-error': !ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.base), 'has-success':ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.base)}">
                                        <label class="help-block" for="lbBaseIcmsDifal">Base de Calculo</label>
                                        <input id="baseIcmsDifal" type="number" ng-model="ctrlIcmsDifal.valoresIcmsDifal.base" class="form-control" name="baseIcmsDifal">
                                        <span id="spanBaseIcmsDifal" class="help-block msg" ng-show="!ctrlIcmsDifal.valoresIcmsDifal.validacaoBaseAno(ctrlIcmsDifal.valoresIcmsDifal.base)">Valor inválido!</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="form-group" ng-class="{'has-error': !ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterna), 'has-success':ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterna)}">
                                        <label class="help-block" for="lbAliquotaInter">Alíq. Interna</label>
                                            <div class="input-group">
                                                <input id="aliqInternaDifal" type="number" ng-model="ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterna" class="form-control" name="aliquotaIcmsInterna" required>
                                                <span class="input-group-addon" id="percent-addon">%</span>
                                            </div>
                                        <span id="spanAliqInternaDifal" class="help-block msg" ng-show="!ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterna)">Valor inválido!</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="form-group" ng-class="{'has-error': !ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterestadual) || !ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaInternaMaiorInterest(), 'has-success':ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterestadual)}">
                                        <label class="help-block" for="lbAliquitaInterest">Alíq. Interestad.</label>
                                            <div class="input-group">
                                                <input id="aliqInterestDifal" type="number" ng-model="ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterestadual" class="form-control" name="aliquotaIcmsInterestadual" required>
                                                <span class="input-group-addon" id="percent-addon">%</span>
                                            </div>
                                        <span id="spanAliqInterestDifal" class="help-block msg" ng-show="!ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaNaoAceitaZero(ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterestadual) || !ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaInternaMaiorInterest()">Valor inválido!</span>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <div class="form-group"  ng-class="{'has-error': !ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaAceitaZero(), 'has-success':ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaAceitaZero()}">
                                        <label class="help-block" for="lbFcp">Alíq. FCP</label>
                                        <div class="input-group">
                                            <input id="aliqFcpDifal" type="number" ng-model="ctrlIcmsDifal.valoresIcmsDifal.aliquotaFcp" class="form-control" name="aliquotaFcp">
                                            <span class="input-group-addon" id="percent-addon">%</span>
                                        </div>
                                        <span id="spanAliqFcpDifal" class="help-block msg" ng-show="!ctrlIcmsDifal.valoresIcmsDifal.validacaoAliquotaAceitaZero()">Valor inválido!</span>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <button id="btnIcmsDifal" type="button" class="btn btn-nmain btn-block" ng-click="ctrlIcmsDifal.valoresIcmsDifal.calcular()" ng-disabled="!ctrlIcmsDifal.valoresIcmsDifal.isValid()">Calcular</button>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 alt-sem-padding-left">
                                        <div class="form-group">
                                            <label class="help-block" for="tbValorOrigem">Valor Origem</label>
                                            <pre id="resultValorOrigem" ng-bind="ctrlIcmsDifal.valoresIcmsDifal.valorOrigem | currency"></pre>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 alt-sem-padding-right">
                                        <div class="form-group">
                                            <a id="discrimIcmsDifal" title="Discriminação" data-toggle="collapse" data-target="#discriminacaoDifal" class="fa fa-question-circle-o pull-right help-discriminacao"></a>
                                            <label class="help-block" for="tbValorDestino">Valor Destino</label>
                                            <pre id="resultValorDestino" ng-bind="ctrlIcmsDifal.valoresIcmsDifal.valorDestino | currency"></pre>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div id="discriminacaoDifal" class="collapse">
                                            <div class="panel panel-primary">
                                                <div class="panel-heading">Discriminação Calculo
                                                    <button type="button" class="close" data-toggle="collapse" data-target="#discriminacaoDifal">&times;</button>
                                                </div>
                                                <div class="panel-body">
                                                    <center>
                                                        <h6>2016 = [Origem:60%/Destino:40%]</h6>
                                                        <h6>2017 = [Origem:40%/Destino:60%]</h6>
                                                        <h6>2018 = [Origem:20%/Destino:80%]</h6>
                                                        <h6>2019 = [Origem:0%/Destino:100%]</h6>
                                                        <h6>-</h6>
                                                        <h6>(Base de ICMS) * (Al.Interna - Al.Interestad)/100 = (Valor Difal)</h6>
                                                        <h5>{{ctrlIcmsDifal.valoresIcmsDifal.base | currency: 'R$':3}} * ({{ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterna}}-{{ctrlIcmsDifal.valoresIcmsDifal.aliquotaInterestadual}})/100 = {{ctrlIcmsDifal.valoresIcmsDifal.valorDifal | currency: 'R$':3}}</h5>
                                                        <h6>FCP somado ao Destino</h5>
                                                        <h5>{{ctrlIcmsDifal.valoresIcmsDifal.valorDestinoeFcp | currency: 'R$':3}} = {{ctrlIcmsDifal.valoresIcmsDifal.valorDestino | currency: 'R$':3}} + {{ctrlIcmsDifal.valoresIcmsDifal.valorFcp | currency: 'R$':3}}</h5>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                            <div class="modal-footer">
                                <button id="btnLimparIcmsDifal" type="button" class="btn btn btn-default" ng-click="ctrlIcmsDifal.limparDifal()">Limpar</button>
                                <button id="btnFecharModalIcmsDifal" type="button" class="btn btn btn-default" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `

  angular.module('DEPGod')
    .service('icmsDifalHelper', ['$rootScope', 'ABRE_MODAL_ICMS_DIFAL',  function($rootScope, ABRE_MODAL_ICMS_DIFAL){
        this.exibe = function(arg){
          $rootScope.$broadcast(ABRE_MODAL_ICMS_DIFAL, arg);
        }
    }])
    .directive('icmsDifalModalOpener', [function(){
      var _controller = [
        '$rootScope',
        'ABRE_MODAL_ICMS_DIFAL',
        'AltModalService',
        'IcmsdifalModel',
        function($rootScope, ABRE_MODAL_ICMS_DIFAL, AltModalService, IcmsdifalModel){
          $rootScope.$on(ABRE_MODAL_ICMS_DIFAL, (event, arg) => {
            AltModalService.open('icmsDifalModal');
          })

          this.valoresIcmsDifal = new IcmsdifalModel();

          this.limparDifal = function(){
            this.valoresIcmsDifal = new IcmsdifalModel();
          }
        }
      ];

      var _controllerAs = 'ctrlIcmsDifal';

      return {
        scope: {},
        restrict: 'A',
        template: TEMPLATE,
        controller: _controller,
        controllerAs: _controllerAs,
      }

    }])
}())

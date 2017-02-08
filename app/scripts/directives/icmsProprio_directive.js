(function(){
  'use strict';

  const TEMPLATE = `
  <div class="container">
    <div id="icmsProprioModal" class="modal fade" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-pequeno">
            <div class="modal-content">
                <div class="modal-header alt-cor-principal">
                    <button id="xIcmsProprio" type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 id="nomeModalIcmsProprio" class="modal-title">ICMS Próprio</h4>
                </div>
                <div class="modal-body alt-overflow-hidden">
                    <form name="icmsProprioForm">
                      <div class="col-sm-6 col-xs-12">
                            <div class="form-group" ng-class="{'has-error': !ctrlIcmsProprio.valoresIcmsProprio.validacaoBase(), 'has-success':ctrlIcmsProprio.valoresIcmsProprio.validacaoBase()}">
                                <label id="labelBaseIcmsProprio" class="help-block" for="lbBaseCalculoProprio">Base Cálculo</label>
                                <input id="baseIcmsProprio" type="number" ng-model="ctrlIcmsProprio.valoresIcmsProprio.base" name="baseIcmsProprio" class="form-control" required/>
                                <span id="spanBaseIcmsProprio" class="help-block msg" ng-show="!ctrlIcmsProprio.valoresIcmsProprio.validacaoBase()">Valor inválido!</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group" ng-class="{'has-error': !ctrlIcmsProprio.valoresIcmsProprio.validacaoAliquotaNaoAceitaZero(), 'has-success':ctrlIcmsProprio.valoresIcmsProprio.validacaoAliquotaNaoAceitaZero()}">
                                <label id="labelAliqIcmsProprio" class="help-block" for="tbAliquotaIcmsProprio">Alíquota ICMS</label>
                                <div class="input-group">
                                    <input id="aliqIcmsProprio" type="number" ng-model="ctrlIcmsProprio.valoresIcmsProprio.aliquota" class="form-control" name="aliquotaIcmsProprio" required/>
                                    <span class="input-group-addon" id="percent-addon">%</span>
                                </div>
                                <span id="spanAliqIcmsProprio" class="help-block msg" ng-show="!ctrlIcmsProprio.valoresIcmsProprio.validacaoAliquotaNaoAceitaZero()">Valor inválido!</span>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="form-group">
                              <button id="btnIcmsProprio" type="button" class="btn btn-nmain btn-block" ng-click="ctrlIcmsProprio.valoresIcmsProprio.calcular()" ng-disabled="!ctrlIcmsProprio.valoresIcmsProprio.isValid()">Calcular</button>
                            </div>
                            <a id="discrimIcmsProprio" title="Discriminação" data-toggle="collapse" data-target="#discriminacao" class="fa fa-question-circle-o pull-right help-discriminacao"></a>
                            <label id="labelValorIcmsProprio" class="help-block" for="tbValorIcmsProprio">Valor ICMS</label>
                            <pre id="resultIcmsProprio" ng-bind="ctrlIcmsProprio.valoresIcmsProprio.valor | currency"></pre>
                        </div>
                        <div class="col-xs-12">
                            <div id="discriminacao" class="collapse">
                                <div class="panel panel-primary">
                                    <div id="tituloPanelDiscrim" class="panel-heading">Discriminação Cálculo
                                      <button type="button" class="close" data-toggle="collapse" data-target="#discriminacao">&times;</button>
                                    </div>
                                    <div class="panel-body">
                                    <center>
                                    (Base de calculo) * (Alíquota de ICMS)/100
                                    <br></br>
                                    {{ctrlIcmsProprio.valoresIcmsProprio.base | currency: 'R$':3}} * {{ctrlIcmsProprio.valoresIcmsProprio.aliquota}}/100 = {{ctrlIcmsProprio.valoresIcmsProprio.valorDiscriminacao | currency: 'R$':3}}
                                    </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <a id="btnLimparIcmsProprio" type="button" class="btn btn-default" ng-click="ctrlIcmsProprio.limparProprio()">Limpar</a>
                    <a id="btnFecharModalIcmsProprio" type="button" class="btn btn-default" data-dismiss="modal">Fechar</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
`

angular.module('DEPGod')
    .service('icmsProprioHelper', ['$rootScope', 'ABRE_MODAL_ICMS_PROPRIO', function($rootScope, ABRE_MODAL_ICMS_PROPRIO){
      this.exibe = function(arg){
        $rootScope.$broadcast(ABRE_MODAL_ICMS_PROPRIO, arg);
      };
    }])
    .directive('icmsProprioModalOpener', [function(){
      var _controller =  [
        '$rootScope',
        'ABRE_MODAL_ICMS_PROPRIO',
        'AltModalService',
        'IcmsproprioModel',
        function($rootScope, ABRE_MODAL_ICMS_PROPRIO, AltModalService, IcmsproprioModel){
          $rootScope.$on(ABRE_MODAL_ICMS_PROPRIO, (event, arg) =>{
            AltModalService.open(icmsProprioModal);
          });

          this.valoresIcmsProprio = new IcmsproprioModel();

          this.limparProprio = function(){
            this.valoresIcmsProprio = new IcmsproprioModel();
          }
        }
    ];

    var _controllerAs = "ctrlIcmsProprio";

    return{
        scope: {},
        restrict: 'A',
        template: TEMPLATE,
        controller: _controller,
        controllerAs: _controllerAs,
    };

    }]);
}())

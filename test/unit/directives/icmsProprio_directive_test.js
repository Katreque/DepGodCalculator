describe('icmsProprioDirective', function(){

  var _scope, _rootScope, _element, icmsProprioModalOpener, ABRE_MODAL_ICMS_PROPRIO, icmsProprioHelper, AltModalService;
  var ControllerAs = 'ctrlIcmsProprio';

  beforeEach(module('DEPGod'));

  beforeEach(inject(function($injector){
    _rootScope = $injector.get('$rootScope');
    _scope = _rootScope.$new();
    ABRE_MODAL_ICMS_PROPRIO = $injector.get('ABRE_MODAL_ICMS_PROPRIO');
    icmsProprioHelper = $injector.get('icmsProprioHelper');
    AltModalService = $injector.get('AltModalService');
    _compile = $injector.get('$compile');

    var _html = '<div icms-proprio-modal-opener></div>';

    _element = angular.element(_html);
    _compile(_element)(_scope);

    _scope.$digest();
  }))

    it('Verifica se o construtor do ICMS Próprio se iniiia com os valores prédefinidos corretamente!', function(){
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.valor).toEqual(_resultadoEsperado.valor);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    })

    it('Verifica se a função de exibir está enviando a mensagem e a mesma sendo captada, abrindo o modal corretamente.', function(){
        spyOn(_rootScope, '$broadcast').and.callThrough();
        spyOn(_rootScope, '$on').and.callThrough();
        spyOn(AltModalService, 'open').and.callFake(angular.noop);

        _rootScope.$digest();
        icmsProprioHelper.exibe();
        expect(_rootScope.$broadcast).toHaveBeenCalledWith(ABRE_MODAL_ICMS_PROPRIO, undefined);

        _rootScope.$on(ABRE_MODAL_ICMS_PROPRIO);
        expect(AltModalService.open).toHaveBeenCalled();
    })

    it('Preenche o construtor ICMS Próprio e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', function(){
        var _valoresIniciais = {base: 50, aliquota: 10, valor: 15, valorDiscriminacao: 15};
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        _element.isolateScope()[ControllerAs].valoresIcmsProprio = _valoresIniciais;
        _element.isolateScope()[ControllerAs].limparProprio();

        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.valor).toEqual(_resultadoEsperado.valor);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    })
})

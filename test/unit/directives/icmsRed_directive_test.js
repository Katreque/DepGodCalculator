describe('icmsRedDirective', function(){

  var _scope, _rootScope, _element, icmsRedModalOpener;
  var ControllerAs = 'ctrlIcmsRed';

  beforeEach(module('DEPGod'));

  beforeEach(inject(function($injector){
    _rootScope = $injector.get('$rootScope');
    _scope = _rootScope.$new();
    _compile = $injector.get('$compile');
    ABRE_MODAL_ICMS_RED = $injector.get('ABRE_MODAL_ICMS_RED');
    icmsRedHelper = $injector.get('icmsRedHelper');
    AltModalService = $injector.get('AltModalService');

    var _html = '<div icms-red-modal-opener></div>';

    _element = angular.element(_html);
    _compile(_element)(_scope);

    _scope.$digest();

  }))
    it('Verifica se o construtor do ICMS Red se inicia com os valores prédefinidos corretamente!', function(){
        var _resultadoEsperado = {base: undefined, aliquota: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    })

    it('Verifica se a função de exibir está enviando a mensagem e a mesma sendo captada, abrindo o modal corretamente.', function(){
        spyOn(_rootScope, '$broadcast').and.callThrough();
        spyOn(_rootScope, '$on').and.callThrough();
        spyOn(AltModalService, 'open').and.callFake(angular.noop);

        _rootScope.$digest();
        icmsRedHelper.exibe();
        expect(_rootScope.$broadcast).toHaveBeenCalledWith(ABRE_MODAL_ICMS_RED, undefined);

        _rootScope.$on(ABRE_MODAL_ICMS_RED);
        expect(AltModalService.open).toHaveBeenCalled();
    })

    it('Preenche o construtor ICMS Red e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', function(){
        var _valoresIniciais = {base: 15, aliquota: 15, aliquotaRed: 15, valor: 15, valorDiscriminacao: 15};
        var _resultadoEsperado = {base: undefined, aliquota: undefined, aliquotaRed: undefined, valor: 0, valorDiscriminacao: 0};

        _element.isolateScope()[ControllerAs].valoresIcmsBaseRed = _valoresIniciais;
        _element.isolateScope()[ControllerAs].limparRed();

        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquota);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    })
})

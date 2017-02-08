describe('icmsDifalDirective', function(){

  var _scope, _rootScope, _element, icmsDifalModalOpener;
  var ControllerAs = 'ctrlIcmsDifal';

  beforeEach(module('DEPGod'));

  beforeEach(inject(function($injector){
    _rootScope = $injector.get('$rootScope');
    _scope = _rootScope.$new();
    _compile = $injector.get('$compile');

    var _html = '<div icms-difal-modal-opener></div>';

    _element = angular.element(_html);
    _compile(_element)(_scope);

    _scope.$digest();
  }))

    it('Verifica se o construtor do ICMS Difal se inicia com os valores prédefinidos corretamente!', function(){
        var _resultadoEsperado = {ano: undefined, base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, aliquotaFcp: undefined, valorDifal: undefined, valorFcp: undefined, valorOrigem: 0, valorDestino: 0, valorDestinoeFcp: 0};

        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.ano).toEqual(_resultadoEsperado.ano);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDifal).toEqual(_resultadoEsperado.valorDifal);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorFcp).toEqual(_resultadoEsperado.valorFcp);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDestino).toEqual(_resultadoEsperado.valorDestino);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);
    })

    it('Preenche o construtor ICMS Difal e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', function(){
        var _valoresIniciais = {ano: 52, base: 50, aliquotaInterna: 50, aliquotaInterestadual: 50, aliquotaFcp: 50, valorDifal: 50, valorFcp: 50, valorOrigem: 50, valorDestino: 50, valorDestinoeFcp: 50};
        var _resultadoEsperado = {ano: undefined, base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, aliquotaFcp: undefined, valorDifal: undefined, valorFcp: undefined, valorOrigem: 0, valorDestino: 0, valorDestinoeFcp: 0};

        _element.isolateScope()[ControllerAs].valoresIcmsDifal = _valoresIniciais;
        _element.isolateScope()[ControllerAs].limparDifal();

        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.ano).toEqual(_resultadoEsperado.ano);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.base).toEqual(_resultadoEsperado.base);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDifal).toEqual(_resultadoEsperado.valorDifal);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorFcp).toEqual(_resultadoEsperado.valorFcp);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDestino).toEqual(_resultadoEsperado.valorDestino);
        expect(_element.isolateScope()[ControllerAs].valoresIcmsDifal.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);
    })
})

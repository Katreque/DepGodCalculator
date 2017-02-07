describe('icmsProprioDirective', function(){

  var _scope, _rootScope, icmsproprioService;

  beforeEach(module('DEPGod'));

  beforeEach(inject(function($injector){
    _rootScope = $injector.get('$rootScope');
    _scope = _rootScope.$new();
    //icmsproprioService = $injector.get('icmsproprioService');
  }))

    it('Verifica se o construtor do ICMS Próprio se inicia com os valores prédefinidos corretamente!', inject(function($controller){
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        _rootscope.$digest();

        expect(_scope.ctrlIcmsProprio.valoresIcmsProprio.base).toEqual(_resultadoEsperado.base);
        expect(_scope.ctrlIcmsProprio.valoresIcmsProprio.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.ctrlIcmsProprio.valoresIcmsProprio.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.ctrlIcmsProprio.valoresIcmsProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))
})

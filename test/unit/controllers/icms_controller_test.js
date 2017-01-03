describe('controladorICMS', function(){

    var _rootscope, _scope, _location, icmsproprioService, icmsbaseredService, icmsdifalService;
    var NomeController = 'controladorICMS as controlicms';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
        _location = $injector.get('$location');
        icmsproprioService = $injector.get('IcmsproprioService');
        icmsbaseredService = $injector.get('IcmsbaseRedService');
        icmsdifalService = $injector.get('IcmsdifalService');
    }))

    it('Verifica se o objeto do ICMS Próprio se inicia vazio!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        expect(_scope.controlicms.valoresIcmsProprio).toEqual({});
    }))

    it('Verifica se o objeto do ICMS Red se inicia vazio!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        expect(_scope.controlicms.valoresIcmsBaseRed).toEqual({});
    }))

    it('Verifica se o objeto do ICMS Difal se inicia vazio!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        expect(_scope.controlicms.valoresIcmsDifal).toEqual({});
    }))

    it('Retorna os valores esperados com a entrada pré-definida no cálculo do ICMS Próprio e preencha o objeto correspondente da maneira correta.', inject(function($controller){

        var _base = 100;
        var _aliquota = 10;
        var _resultadoEsperado = {base: _base, aliquota: _aliquota, valor: '10.000', valorDiscriminacao: '10.00'};
        $controller(NomeController, {$scope: _scope});

        _scope.controlicms.resultadoIcmsProprio(_base, _aliquota);
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsProprio.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsProprio.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsProprio.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.controlicms.valoresIcmsProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Retorna os valores esperados com a entrada pré-definida no cálculo do ICMS Red. e preencha o objeto correspondente da maneira correta.', inject(function($controller){
        _base = 1000;
        _aliquota = 10;
        _aliquotaRed = 10;
        _resultadoEsperado = {base: _base, aliquota: _aliquota, aliquotaRed: _aliquotaRed, valor: '90.000', valorDiscriminacao: '90.00'};
        $controller(NomeController, {$scope: _scope});

        _scope.controlicms.resultadoIcmsRed(_base, _aliquota, _aliquotaRed);
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
        expect(_scope.controlicms.valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.controlicms.valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Retorna os valores esperados com a entrada pré-definida no cálculo do ICMS Difal e preencha o objeto correspondente da maneira correta.', inject(function($controller){
        _ano = 2016;
        _base = 100;
        _aliquotaInterna = 18;
        _aliquotaInterestadual = 12;
        _aliquotaFcp = 0;
        _resultadoEsperado = {ano: _ano, base: _base, aliquotaInterna: _aliquotaInterna, aliquotaInterestadual: _aliquotaInterestadual, aliquotaFcp: _aliquotaFcp, valorDifal : '60.00', valorFcp: null, valorOrigem: '36.000', valorDestino: '24.000', valorDestinoeFcp: '24.00'}
        $controller(NomeController, {$scope: _scope});

        _scope.controlicms.resultadoIcmsDifal(_ano, _base, _aliquotaInterna, _aliquotaInterestadual, _aliquotaFcp)
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsDifal.ano).toEqual(_resultadoEsperado.ano);
    }))

    //Adicionar mais testes posteriormente!

    it('Limpa o objeto referente ao ICMS Próprio.', inject(function($controller){
        var _objetoTeste = {base: _base, aliquota: _aliquota, valor: '10.000', valorDiscriminacao: '10.00'};
        $controller(NomeController, {$scope: _scope});

        _scope.controlicms.valoresIcmsProprio = _objetoTeste;
        _scope.controlicms.limparProprio();
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsProprio).toEqual(null);
    }))
})
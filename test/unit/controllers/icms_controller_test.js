describe('controladorICMS', function(){

    var _rootscope, _scope, _location, icmsproprioService, icmsbaseredService, icmsdifalService;
    var NomeController = 'controladorICMS as controlicms';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
        _location = $injector.get('$location');
    }))

    it('Verifica se o construtor do ICMS Red se inicia com os valores prédefinidos corretamente!', inject(function($controller){
        var _resultadoEsperado = {base: undefined, aliquota: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
        expect(_scope.controlicms.valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.controlicms.valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Verifica se o construtor do ICMS Difal se inicia com os valores prédefinidos corretamente!', inject(function($controller){
        var _resultadoEsperado = {ano: undefined, base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, aliquotaFcp: undefined, valorDifal: undefined, valorFcp: undefined, valorOrigem: 0, valorDestino: 0, valorDestinoeFcp: 0};

        $controller(NomeController, {$scope: _scope})
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsDifal.ano).toEqual(_resultadoEsperado.ano);
        expect(_scope.controlicms.valoresIcmsDifal.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
        expect(_scope.controlicms.valoresIcmsDifal.valorDifal).toEqual(_resultadoEsperado.valorDifal);
        expect(_scope.controlicms.valoresIcmsDifal.valorFcp).toEqual(_resultadoEsperado.valorFcp);
        expect(_scope.controlicms.valoresIcmsDifal.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
        expect(_scope.controlicms.valoresIcmsDifal.valorDestino).toEqual(_resultadoEsperado.valorDestino);
        expect(_scope.controlicms.valoresIcmsDifal.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);
    }))

    it('Preenche o construtor ICMS Próprio e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', inject(function($controller){
        var _valoresIniciais = {base: 50, aliquota: 10, valor: 15, valorDiscriminacao: 15};
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _scope.controlicms.valoresIcmsProprio = _valoresIniciais;
        _scope.controlicms.limparProprio();
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
        expect(_scope.controlicms.valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.controlicms.valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Preenche o construtor ICMS Red e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', inject(function($controller){
        var _valoresIniciais = {base: 15, aliquota: 15, aliquotaRed: 15, valor: 15, valorDiscriminacao: 15};
        var _resultadoEsperado = {base: undefined, aliquota: undefined, aliquotaRed: undefined, valor: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _scope.controlicms.valoresIcmsBaseRed = _valoresIniciais;
        _scope.controlicms.limparRed();
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsBaseRed.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquota).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsBaseRed.aliquotaRed).toEqual(_resultadoEsperado.aliquota);
        expect(_scope.controlicms.valoresIcmsBaseRed.valor).toEqual(_resultadoEsperado.valor);
        expect(_scope.controlicms.valoresIcmsBaseRed.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Preenche o construtor ICMS Difal e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', inject(function($controller){
        var _valoresIniciais = {ano: 52, base: 50, aliquotaInterna: 50, aliquotaInterestadual: 50, aliquotaFcp: 50, valorDifal: 50, valorFcp: 50, valorOrigem: 50, valorDestino: 50, valorDestinoeFcp: 50};
        var _resultadoEsperado = {ano: undefined, base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, aliquotaFcp: undefined, valorDifal: undefined, valorFcp: undefined, valorOrigem: 0, valorDestino: 0, valorDestinoeFcp: 0};

        $controller(NomeController, {$scope: _scope})
        _scope.controlicms.valoresIcmsDifal = _valoresIniciais;
        _scope.controlicms.limparDifal();
        _rootscope.$digest();

        expect(_scope.controlicms.valoresIcmsDifal.ano).toEqual(_resultadoEsperado.ano);
        expect(_scope.controlicms.valoresIcmsDifal.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_scope.controlicms.valoresIcmsDifal.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
        expect(_scope.controlicms.valoresIcmsDifal.valorDifal).toEqual(_resultadoEsperado.valorDifal);
        expect(_scope.controlicms.valoresIcmsDifal.valorFcp).toEqual(_resultadoEsperado.valorFcp);
        expect(_scope.controlicms.valoresIcmsDifal.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
        expect(_scope.controlicms.valoresIcmsDifal.valorDestino).toEqual(_resultadoEsperado.valorDestino);
        expect(_scope.controlicms.valoresIcmsDifal.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);
    }))

    it('Verifica se o botão voltar está funcionando corretamente.', inject(function($controller){
        $controller(NomeController, {$scope: _scope})
        spyOn(_location, 'path')
        _scope.controlicms.voltar();

        expect(_location.path).toHaveBeenCalledWith('/home')
    }))

})

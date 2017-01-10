describe('controladorST', function(){

    var _rootscope, _scope, _location;
    var NomeController = 'controladorST as controlst';

    beforeEach(module('DEPGod'));   

    beforeEach(inject(function($injector){
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
        _location = $injector.get('$location');
    }))

    it('Verifica se o construtor do ST Próprio se inicia com os valores prédefinidos corretamente!', inject(function($controller){
        var _resultadoEsperado = {base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, mva: undefined, ipi: undefined, baseSt: undefined, baseStIpi: undefined, valorIcms: 0, valorSt: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _rootscope.$digest();

        expect(_scope.controlst.valoresStProprio.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlst.valoresStProprio.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_scope.controlst.valoresStProprio.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_scope.controlst.valoresStProprio.mva).toEqual(_resultadoEsperado.mva);
        expect(_scope.controlst.valoresStProprio.ipi).toEqual(_resultadoEsperado.ipi);
        expect(_scope.controlst.valoresStProprio.baseSt).toEqual(_resultadoEsperado.baseSt);
        expect(_scope.controlst.valoresStProprio.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
        expect(_scope.controlst.valoresStProprio.valorIcms).toEqual(_resultadoEsperado.valorIcms);
        expect(_scope.controlst.valoresStProprio.valorSt).toEqual(_resultadoEsperado.valorSt);
        expect(_scope.controlst.valoresStProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Preenche o construtor ST Próprio e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', inject(function($controller){
        var _valoresIniciais = {base: 10, aliquotaInterna: 10, aliquotaInterestadual: 10, mva: 10, ipi: 10, baseSt: 10, baseStIpi: 10, valorIcms: 10, valorSt: 10, valorDiscriminacao: 10};
        var _resultadoEsperado = {base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, mva: undefined, ipi: undefined, baseSt: undefined, baseStIpi: undefined, valorIcms: 0, valorSt: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _scope.controlst.valoresStProprio = _valoresIniciais;
        _scope.controlst.limparSt();
        _rootscope.$digest();

        expect(_scope.controlst.valoresStProprio.base).toEqual(_resultadoEsperado.base);
        expect(_scope.controlst.valoresStProprio.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
        expect(_scope.controlst.valoresStProprio.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
        expect(_scope.controlst.valoresStProprio.mva).toEqual(_resultadoEsperado.mva);
        expect(_scope.controlst.valoresStProprio.ipi).toEqual(_resultadoEsperado.ipi);
        expect(_scope.controlst.valoresStProprio.baseSt).toEqual(_resultadoEsperado.baseSt);
        expect(_scope.controlst.valoresStProprio.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
        expect(_scope.controlst.valoresStProprio.valorIcms).toEqual(_resultadoEsperado.valorIcms);
        expect(_scope.controlst.valoresStProprio.valorSt).toEqual(_resultadoEsperado.valorSt);
        expect(_scope.controlst.valoresStProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
    }))

    it('Verifica se o botão voltar está funcionando corretamente.', inject(function($controller){
        $controller(NomeController, {$scope: _scope})
        spyOn(_location, 'path')
        _scope.controlst.voltar();

        expect(_location.path).toHaveBeenCalledWith('/home')
    }))
})
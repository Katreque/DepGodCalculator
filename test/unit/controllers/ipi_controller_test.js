describe('controladorIPI', function(){

    var _rootscope, _scope, _location;
    var NomeController = 'controladorIPI as controlipi';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _location = $injector.get('$location');
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
    }))

    it('Verifica se o construtor do Ipi Próprio se inicia com os valores prédefinidos corretamente!', inject(function($controller){
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _rootscope.$digest();

        expect(_scope.controlipi.valoresipiProprio.base).toEqual(_resultadoEsperado.base)
        expect(_scope.controlipi.valoresipiProprio.aliquota).toEqual(_resultadoEsperado.aliquota)
        expect(_scope.controlipi.valoresipiProprio.valor).toEqual(_resultadoEsperado.valor)
        expect(_scope.controlipi.valoresipiProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao)
    }))

    it('Preenche o construtor ICMS Difal e verifica se a função de limpar instancia novamente o contrutor com seus valores default!', inject(function($controller){
        var _valoresIniciais = {base: 15, aliquota: 15, aliquota: 15, valor: 15, valorDiscriminacao: 15};
        var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};

        $controller(NomeController, {$scope: _scope})
        _scope.controlipi.valoresipiProprio = _valoresIniciais;
        _scope.controlipi.limparIpiProprio();
        _rootscope.$digest();

        expect(_scope.controlipi.valoresipiProprio.base).toEqual(_resultadoEsperado.base)
        expect(_scope.controlipi.valoresipiProprio.aliquota).toEqual(_resultadoEsperado.aliquota)
        expect(_scope.controlipi.valoresipiProprio.valor).toEqual(_resultadoEsperado.valor)
        expect(_scope.controlipi.valoresipiProprio.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao)
    }))

    it('Verifica se o botão voltar está funcionando corretamente.', inject(function($controller){
        $controller(NomeController, {$scope: _scope})
        spyOn(_location, 'path')
        _scope.controlipi.voltar();

        expect(_location.path).toHaveBeenCalledWith('/home')
    }))
})
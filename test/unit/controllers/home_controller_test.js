describe('controladorHome', function(){

    var _rootscope, _scope, _location;
    var NomeController = 'controladorHome as controladorhome';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _location = $injector.get('$location');
        _rootscope =  $injector.get('$rootScope');
        _scope = _rootscope.$new();
    }))

    it('Verifica se ao clicar no botão de ICMS está redirecionando para a página correta!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        spyOn(_location, 'path');

        _scope.controladorhome.calculoICMS();

        expect(_location.path).toHaveBeenCalledWith('/calculoicms');
    }))

    it('Verifica se ao clicar no botão de ST está redirecionando para a página correta!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        spyOn(_location, 'path');

        _scope.controladorhome.calculoST();

        expect(_location.path).toHaveBeenCalledWith('/calculost');
    }))

    it('Verifica se ao clicar no botão de IPI está redirecionando para a página correta!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        spyOn(_location, 'path');

        _scope.controladorhome.calculoIPI();

        expect(_location.path).toHaveBeenCalledWith('/calculoipi');
    }))

    it('Verifica se ao clicar no botão de SOBRE está redirecionando para a página correta!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        spyOn(_location, 'path');

        _scope.controladorhome.sobre();

        expect(_location.path).toHaveBeenCalledWith('/sobre');
    }))
})
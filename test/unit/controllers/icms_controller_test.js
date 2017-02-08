describe('controladorICMS', function(){

    var _rootscope, _scope, _location, icmsproprioService, icmsbaseredService, icmsdifalService;
    var NomeController = 'controladorICMS as controlicms';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
        _location = $injector.get('$location');
    }))

    it('Verifica se o botão voltar está funcionando corretamente.', inject(function($controller){
        $controller(NomeController, {$scope: _scope})
        spyOn(_location, 'path')
        _scope.controlicms.voltar();

        expect(_location.path).toHaveBeenCalledWith('/home')
    }))

})

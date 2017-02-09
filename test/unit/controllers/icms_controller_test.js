describe('controladorICMS', function(){

    var _rootscope, _scope, _location, icmsProprioHelper;
    var NomeController = 'controladorICMS as controlicms';

    beforeEach(module('DEPGod'));

    beforeEach(inject(function($injector){
        _rootscope = $injector.get('$rootScope');
        _scope = _rootscope.$new();
        _location = $injector.get('$location');
        icmsProprioHelper = $injector.get('icmsProprioHelper');
    }))

    it('Verifica se o método de exibir chama corretamente o listener.', inject(function($controller){
      $controller(NomeController, {$scope: _scope})
      spyOn(icmsProprioHelper, 'exibe').and.callThrough();

      _scope.controlicms.criar();
      expect(icmsProprioHelper.exibe).toHaveBeenCalled();
    }))

    it('Verifica se o botão voltar está funcionando corretamente.', inject(function($controller){
        $controller(NomeController, {$scope: _scope})
        spyOn(_location, 'path')
        _scope.controlicms.voltar();

        expect(_location.path).toHaveBeenCalledWith('/home')
    }))

})

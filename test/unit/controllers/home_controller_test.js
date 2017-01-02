describe('controladorHome', function(){

    var _rootscope, _scope;
    var NomeController = 'controladorHome as controladorhome';

    beforeEach(module('ApiConsumator'));

    beforeEach(inject(function($injector){
        _rootscope =  $injector.get('$rootScope');
        _scope = _rootscope.$new();
    }))

    it('Verifica se ao clicar no botão de ICMS está redirecionando para a página correta!', inject(function($controller){
        $controller(NomeController, {$scope: _scope})

        //tiltei aqui! Tasukette kudasai!
        expect
    }))
})
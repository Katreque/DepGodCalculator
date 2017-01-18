describe('constante', function(){
    var _scope, _rootScope, BASE_PASSAPORTE_AUTH, PASSAPORTE_LOGOUT;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        PASSAPORTE_LOGOUT = $injector.get('PASSAPORTE_LOGOUT');
        BASE_PASSAPORTE_AUTH = $injector.get('BASE_PASSAPORTE_AUTH');
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
    }))

    it('Verifica se a BASE_PASSAPORTE_AUTH está correta.', function(){
        var _resultadoEsperado = BASE_PASSAPORTE_AUTH;

        expect(altAmbienteUrl.getEndpoint('https://passaporte2__ambiente__.alterdata.com.br/')).toBe(_resultadoEsperado);
    })

    it('Verifica se a PASSAPORTE_LOGOUT está correta.', function(){
        var _resultadoEsperado = PASSAPORTE_LOGOUT;
        
        expect(PASSAPORTE_LOGOUT).toBe(altAmbienteUrl.getEndpoint('https://passaporte2__ambiente__.alterdata.com.br/passaporte-rest-api/logout.html'))
    })
})
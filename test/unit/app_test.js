describe('constante', function(){
    var _scope, _rootScope, BASE_PASSAPORTE_AUTH, PASSAPORTE_LOGOUT, MSG_ERRO_PRODUTO;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        PASSAPORTE_LOGOUT = $injector.get('PASSAPORTE_LOGOUT');
        BASE_PASSAPORTE_AUTH = $injector.get('BASE_PASSAPORTE_AUTH');
        RETORNA_CALCULADORA = $injector.get('RETORNA_CALCULADORA');
        MSG_ERRO_PRODUTO = $injector.get('MSG_ERRO_PRODUTO');
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

    it('Verifica se a RETORNA_CALCULADORA está correta.', function(){
        var _resultadoEsperado = RETORNA_CALCULADORA;
        
        expect(RETORNA_CALCULADORA).toBe('?continue=' + altAmbienteUrl.getEndpoint('https://calculadora__ambiente__.alterdata.com.br:1307/'))
    })

    it('verifica se a MSG_ERRO_PRODUTO está correta.', function(){
        var _resultadoEsperado = MSG_ERRO_PRODUTO;

        expect(MSG_ERRO_PRODUTO).toBe("Ocorreu algum erro inesperado ao carregar seus produtos habilitados.");
    })
})
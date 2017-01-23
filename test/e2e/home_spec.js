describe('Home', function(){
    var _home = 'home';

    var helper = require('./helper.js');
    helper.cookies();
                
    it('Verifica se o header da Home está correto.', function(){
        var _resultadoEsperado;
        _resultadoEsperado = element(by.id('tituloHome')).getText();

        expect(_resultadoEsperado).toEqual('Home');
    })

    it('Verifica se o botão ICMS está levando para a página correta.', function(){

        element(by.id('botaoIcms')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_CALC_URL + 'calculoicms');
    })

    it('Verifica se o botão ST está levando para a página correta.', function(){

        element(by.id('botaoSt')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_CALC_URL + 'calculost');
    })

    it('Verifica se o botão IPI está levando para a página correta.', function(){

        element(by.id('botaoIpi')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_CALC_URL + 'calculoipi');
    })
})
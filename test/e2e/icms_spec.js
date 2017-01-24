describe('ICMS', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
    })

    it('Verifica se o header da página ICMS está correto.', function(){
        var _resultadoEsperado;
        _resultadoEsperado = element(by.id('tituloIcms')).getText();

        expect(_resultadoEsperado).toEqual('ICMS');
    })

    it('Verifica se ao clicar no botão de ICMS Próprio, abre o modal corretamente.', function(){
        element(by.id('btnProprio')).click();
        expect(element(by.id('icmsProprioModal')).isDisplayed());
    })

    it('Verifica se ao clicar no botão de ICMS Red, abre o modal corretamente.', function(){
        element(by.id('btnRed')).click();
        expect(element(by.id('icmsRedModal')).isDisplayed());
    })

    it('Verifica se ao clicar no botão de ICMS DIFAL, abre o modal corretamente.', function(){
        element(by.id('btnDifal')).click();
        expect(element(by.id('icmsDifalModal')).isDisplayed());
    })

    it('Verifica se ao clicar no botão de de voltar, retorna a página anterior.', function(){
        element(by.id('btnVoltar')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_CALC_URL + 'home');
    })
})
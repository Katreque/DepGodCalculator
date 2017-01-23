describe('Home', function(){
    var _home = 'home';

    beforeEach(function(){
        browser.get(browser.params.BASE_PASSAPORTE_AUTH + _home);
        browser.driver.get(browser.params.BASE_PASSAPORTE_AUTH + _home);
        browser.driver.manage().addCookie({
                                            name: "passaporte-chave-DEV",
                                            value: browser.params.chaveDev
                                          })

        browser.driver.manage().addCookie({
                                            name: "passaporte-token-DEV",
                                            value: browser.params.tokenDev
                                          })
                })
                
    it('Verifica se o header da Home está correto.', function(){
        var _resultadoEsperado;
        _resultadoEsperado = element(by.id('tituloHome')).getAttribute('textContent');

        expect(_resultadoEsperado).toEqual('Home');
    })

    it('Verifica se o botão ICMS está levando para a página correta.', function(){

        element(by.id('botaoIcms')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_PASSAPORTE_AUTH + 'calculoicms');
    })

    it('Verifica se o botão ST está levando para a página correta.', function(){

        element(by.id('botaoSt')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_PASSAPORTE_AUTH + 'calculost');
    })

    it('Verifica se o botão IPI está levando para a página correta.', function(){

        element(by.id('botaoIpi')).click();
        expect(browser.getCurrentUrl()).toEqual(browser.params.BASE_PASSAPORTE_AUTH + 'calculoipi');
    })
})
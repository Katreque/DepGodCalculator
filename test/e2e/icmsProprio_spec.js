describe('ICMS', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
        element(by.id('btnProprio')).click();
    })

    //Back
    it('Informa um valor inválido no campo Base Cálculo e verifica se ele irá exibir a mensagem correta informando.', function(){
        element(by.id('baseIcmsProprio')).sendKeys(-1);
        browser.sleep(3000);
        expect(element(by.id('spanBaseIcmsProprio')).isDisplayed()).toBe(true);
    })
})
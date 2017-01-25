describe('ICMS', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
        element(by.id('btnProprio')).click();
    })

    describe('Testes Relacionados a mensagem de validação!', function(){
         it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem correta correspondente.', function(){
            browser.sleep(100);
            element(by.id('baseIcmsProprio')).sendKeys(101);
            expect(element(by.id('spanBaseIcmsProprio')).isDisplayed()).toBe(false);

            element(by.id('baseIcmsProprio')).clear().sendKeys(1);
            expect(element(by.id('spanBaseIcmsProprio')).isDisplayed()).toBe(false);

            element(by.id('baseIcmsProprio')).clear().sendKeys(0);
            expect(element(by.id('spanBaseIcmsProprio')).isDisplayed()).toBe(true);

            element(by.id('baseIcmsProprio')).clear().sendKeys(-1);
            expect(element(by.id('spanBaseIcmsProprio')).isDisplayed()).toBe(true);
         })

        it('Informa um valor no campo alíquota ICMS e verifica se irá ser exibido a mensagem correta correspondente.', function(){
            browser.sleep(100);
            element(by.id('aliqIcmsProprio')).sendKeys(101);
            expect(element(by.id('spanAliqIcmsProprio')).isDisplayed()).toBe(true);

            element(by.id('aliqIcmsProprio')).clear().sendKeys(100);
            expect(element(by.id('spanAliqIcmsProprio')).isDisplayed()).toBe(false);

            element(by.id('aliqIcmsProprio')).clear().sendKeys(1);
            expect(element(by.id('spanAliqIcmsProprio')).isDisplayed()).toBe(false);

            element(by.id('aliqIcmsProprio')).clear().sendKeys(0);
            expect(element(by.id('spanAliqIcmsProprio')).isDisplayed()).toBe(true);

            element(by.id('aliqIcmsProprio')).clear().sendKeys(-1);
            expect(element(by.id('spanAliqIcmsProprio')).isDisplayed()).toBe(true);
         })

         it('Verifica se o botão de calcular estará habilitado ou não dependendo das condições do modal passadas.', function(){
           browser.sleep(100);
           element(by.id('baseIcmsProprio')).clear().sendKeys(1);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(1);
           expect(element(by.id('btnIcmsProprio')).isEnabled()).toBe(true);

           element(by.id('baseIcmsProprio')).clear().sendKeys(1);
           element(by.id('aliqIcmsProprio')).clear();
           expect(element(by.id('btnIcmsProprio')).isEnabled()).toBe(false);

           element(by.id('baseIcmsProprio')).clear();
           element(by.id('aliqIcmsProprio')).clear().sendKeys(1);
           expect(element(by.id('btnIcmsProprio')).isEnabled()).toBe(false);
         })

         it('Verifica se o valor padrão do resultado está pré-definido corretamente com o valor zerado em reais.', function(){
           browser.sleep(100);
           expect(element(by.id('resultIcmsProprio')).getText()).toEqual("R$0,00");
         })

         it('Verifica se ao colocar um input válido, o valor apresentado será o correto.', function(){
           browser.sleep(100);
           element(by.id('baseIcmsProprio')).sendKeys(100);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(10);
           element(by.id('btnIcmsProprio')).click();
           var _resultado = element(by.id('resultIcmsProprio')).getText();
           expect(_resultado).toEqual("R$10,00");
         })
    })
})

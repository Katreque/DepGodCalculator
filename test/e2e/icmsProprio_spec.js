describe('ICMS', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
        element(by.id('btnProprio')).click();
    })

    describe('Testes Relacionados a mensagem de validação!', function(){
        it('Verifica se o nome do modal é correspondente com o seu cálculo.', function(){
          browser.sleep(1000);
          expect($('.modal-header').$('.modal-title').getText()).toEqual("ICMS Próprio");
        })

        it('Verifica se ao clicar no x dentro do modal, o mesmo irá se fechar!', function(){
           browser.sleep(1000);
           element(by.id('xIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('icmsProprioModal')).isDisplayed()).toBe(false);
         })

         it('Verifica se ao apertar Esc, o modal irá se fechar.', function(){
           browser.sleep(1000);
           browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
           browser.sleep(1000);
           expect(element(by.id('icmsProprioModal')).isDisplayed()).toBe(false);
         })

         /*it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
           browser.sleep(1000);
           $('.modal-backdrop').click();
           browser.sleep(1000);
           expect(element(by.id('icmsProprioModal')).isDisplayed()).toBe(false);
           })*/

          it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem correta correspondente.', function(){
            browser.sleep(1000);
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
            browser.sleep(1000);
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
           browser.sleep(1000);
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
           browser.sleep(1000);
           expect(element(by.id('resultIcmsProprio')).getText()).toEqual("R$0,00");
         })

         it('Verifica se ao colocar um input válido, o valor apresentado será o correto.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsProprio')).sendKeys(100);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(10);
           element(by.id('btnIcmsProprio')).click();
           var _resultado = element(by.id('resultIcmsProprio')).getText();
           expect(_resultado).toEqual("R$10,00");
         })

         it('Verifica se ao clicar no ícone de pergunta, o panel com a discriminação do cálculo irá ser mostrado.', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(true);
         })

         it('Verifica se o valor que estão nos inputs estão batendo com os valores dentro da discriminação.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsProprio')).clear().sendKeys(100);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(10);
           element(by.id('btnIcmsProprio')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.binding('controlicms.valoresIcmsProprio.base')).getText()).toContain("R$100,000");
           expect(element(by.binding('controlicms.valoresIcmsProprio.aliquota')).getText()).toContain("10");
           expect(element(by.binding('controlicms.valoresIcmsProprio.valorDiscriminacao')).getText()).toContain("R$100,000");
         })

         it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           element(by.id('xDiscrimIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(false);

           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(false);
         })

         it('Verifica se o botão de limpar está funcionando corretamente.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsProprio')).clear().sendKeys(1);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(1);
           element(by.id('btnLimparIcmsProprio')).click();
           expect(element(by.id('baseIcmsProprio')).getText()).toBe('');
           expect(element(by.id('aliqIcmsProprio')).getText()).toBe('');
         })

         it('Verifica se o botão de fechar que fica no final da janela está funcionando corretamente', function(){
           browser.sleep(1000);
           element(by.id('btnFecharModalIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(false);
         })
    })
})

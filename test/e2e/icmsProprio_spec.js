describe('ICMS Próprio', function(){
    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
        element(by.id('btnProprio')).click();
    })

    describe('Testes Relacionados a comportamentos do modal', function(){
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

         it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
           browser.sleep(1000);
           browser.actions().mouseMove(element(by.id('idContato'))).click().perform();
           browser.sleep(1000);
           expect(element(by.id('icmsProprioModal')).isDisplayed()).toBe(false);
         })
    })

    describe('Testes Relacionados a validação dos inputs e buttons dentro do modal', function(){
          it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem de valor inválido.', function(){
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

        it('Informa um valor no campo alíquota ICMS e verifica se irá ser exibido a mensagem de valor inválido.', function(){
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
    })

    describe('Testes relacionados a validação dos cálculos feitos.', function(){
         it('Realiza um cálculo com base 100 e alíquota 10 e verifica se o resultado exibido será o correto.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsProprio')).sendKeys(100);
           element(by.id('aliqIcmsProprio')).clear().sendKeys(10);
           element(by.id('btnIcmsProprio')).click();
           var _resultado = element(by.id('resultIcmsProprio')).getText();
           expect(_resultado).toEqual("R$10,00");
         })
    })

    describe('Testes relacionados ao panel de descriminação do cálculo.', function(){
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
           expect(element(by.binding('ctrlIcmsProprio.valoresIcmsProprio.base')).getText()).toContain("R$100,000");
           expect(element(by.binding('ctrlIcmsProprio.valoresIcmsProprio.aliquota')).getText()).toContain("10");
           expect(element(by.binding('ctrlIcmsProprio.valoresIcmsProprio.valorDiscriminacao')).getText()).toContain("R$10,000");
         })

         it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           $('#icmsProprioModal #discriminacao .close').click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(false);

           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacao')).isDisplayed()).toBe(false);
         })
    })

    describe('Testes relacionados aos buttons que ficam no final do modal.', function(){
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

  describe('ICMS', function(){
        require('./helper.js').cookies();

        beforeEach(function(){
            browser.get(browser.params.BASE_CALC_URL + 'calculoicms');
            element(by.id('btnDifal')).click();
        })

        describe('Testes Relacionados a comportamentos do modal', function(){
              it('Verifica se o nome do modal é correspondente com o seu cálculo.', function(){
                browser.sleep(3000);
                expect($('#icmsDifalModal .modal-header .modal-title').getText()).toEqual("ICMS Difal");
              })

              it('Verifica se ao clicar no x dentro do modal, o mesmo irá se fechar!', function(){
                 browser.sleep(1000);
                 $('#icmsDifalModal .modal-header .close').click();
                 browser.sleep(1000);
                 expect(element(by.id('icmsDifalModal')).isDisplayed()).toBe(false);
               })

               it('Verifica se ao apertar Esc, o modal irá se fechar.', function(){
                 browser.sleep(1000);
                 browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                 browser.sleep(1000);
                 expect(element(by.id('icmsDifalModal')).isDisplayed()).toBe(false);
               })

               it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
                 browser.sleep(1000);
                 browser.actions().mouseMove(element(by.id('idContato'))).click().perform();
                 browser.sleep(1000);
                 expect(element(by.id('icmsDifalModal')).isDisplayed()).toBe(false);
               })
        })
    })

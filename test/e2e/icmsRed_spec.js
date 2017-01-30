  describe('ICMS', function(){
      require('./helper.js').cookies();

      beforeEach(function(){
          browser.get(browser.params.BASE_CALC_URL + 'calculoicms')
          element(by.id('btnRed')).click();
      })

      describe('Testes Relacionados a comportamentos do modal', function(){
          it('Verifica se o nome do modal é correspondente com o seu cálculo.', function(){
            browser.sleep(3000);
            expect($('#icmsRedModal .modal-header .modal-title').getText()).toEqual("ICMS com base Reduzida");
          })

          it('Verifica se ao clicar no x dentro do modal, o mesmo irá se fechar!', function(){
             browser.sleep(1000);
             $('#icmsRedModal .modal-header .close').click();
             browser.sleep(1000);
             expect(element(by.id('icmsRedModal')).isDisplayed()).toBe(false);
           })

           it('Verifica se ao apertar Esc, o modal irá se fechar.', function(){
             browser.sleep(1000);
             browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
             browser.sleep(1000);
             expect(element(by.id('icmsRedModal')).isDisplayed()).toBe(false);
           })

           it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
             browser.sleep(1000);
             browser.actions().mouseMove(element(by.id('idContato'))).click().perform();
             browser.sleep(1000);
             expect(element(by.id('icmsRedModal')).isDisplayed()).toBe(false);
           })
      })

      describe('Testes Relacionados a validação dos inputs e buttons dentro do modal', function(){
          it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem de valor inválido.', function(){
              browser.sleep(1000);
              element(by.id('baseIcmsRed')).sendKeys(101);
              expect(element(by.id('spanBaseIcmsRed')).isDisplayed()).toBe(false);

              element(by.id('baseIcmsRed')).clear().sendKeys(1);
              expect(element(by.id('spanBaseIcmsRed')).isDisplayed()).toBe(false);

              element(by.id('baseIcmsRed')).clear().sendKeys(0);
              expect(element(by.id('spanBaseIcmsRed')).isDisplayed()).toBe(true);

              element(by.id('baseIcmsRed')).clear().sendKeys(-1);
              expect(element(by.id('spanBaseIcmsRed')).isDisplayed()).toBe(true);
           })

          it('Informa um valor no campo alíquota ICMS e verifica se irá ser exibido a mensagem de valor inválido.', function(){
              browser.sleep(1000);
              element(by.id('aliqIcmsRed')).sendKeys(101);
              expect(element(by.id('spanAliqIcmsRed')).isDisplayed()).toBe(true);

              element(by.id('aliqIcmsRed')).clear().sendKeys(100);
              expect(element(by.id('spanAliqIcmsRed')).isDisplayed()).toBe(false);

              element(by.id('aliqIcmsRed')).clear().sendKeys(1);
              expect(element(by.id('spanAliqIcmsRed')).isDisplayed()).toBe(false);

              element(by.id('aliqIcmsRed')).clear().sendKeys(0);
              expect(element(by.id('spanAliqIcmsRed')).isDisplayed()).toBe(true);

              element(by.id('aliqIcmsRed')).clear().sendKeys(-1);
              expect(element(by.id('spanAliqIcmsRed')).isDisplayed()).toBe(true);
          })

          it('Informa um valor no campo alíquota ICMS Red e verifica se irá ser exibido a mensagem de valor inválido.', function(){
              browser.sleep(1000);
              element(by.id('aliqRed')).sendKeys(101);
              expect(element(by.id('spanAliqRed')).isDisplayed()).toBe(true);

              element(by.id('aliqRed')).clear().sendKeys(100);
              expect(element(by.id('spanAliqRed')).isDisplayed()).toBe(false);

              element(by.id('aliqIcmsRed')).clear().sendKeys(1);
              expect(element(by.id('spanAliqRed')).isDisplayed()).toBe(false);

              element(by.id('aliqRed')).clear().sendKeys(0);
              expect(element(by.id('spanAliqRed')).isDisplayed()).toBe(true);

              element(by.id('aliqRed')).clear().sendKeys(-1);
              expect(element(by.id('spanAliqRed')).isDisplayed()).toBe(true);
          })

          it('Verifica se o botão de calcular estará habilitado ou não dependendo das condições do modal passadas.', function(){
             browser.sleep(1000);
             element(by.id('baseIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqRed')).clear().sendKeys(1);
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(true);

             element(by.id('baseIcmsRed')).clear();
             element(by.id('aliqIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqRed')).clear().sendKeys(1);
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);

             element(by.id('baseIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqIcmsRed')).clear();
             element(by.id('aliqRed')).clear().sendKeys(1);
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);

             element(by.id('baseIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqRed')).clear();
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);

             element(by.id('baseIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqIcmsRed')).clear();
             element(by.id('aliqRed')).clear();
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);

             element(by.id('baseIcmsRed')).clear();
             element(by.id('aliqIcmsRed')).clear().sendKeys(1);
             element(by.id('aliqRed')).clear();
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);

             element(by.id('baseIcmsRed')).clear();
             element(by.id('aliqIcmsRed')).clear();
             element(by.id('aliqRed')).clear().sendKeys(1);
             expect(element(by.id('btnIcmsRed')).isEnabled()).toBe(false);
           })

           it('Verifica se o valor padrão do resultado está pré-definido corretamente com o valor zerado em reais.', function(){
             browser.sleep(1000);
             expect(element(by.id('resultIcmsRed')).getText()).toEqual("R$0,00");
           })
    })

    describe('Testes relacionados a validação dos cálculos feitos.', function(){
         it('Realiza um cálculo com base 100, alíquota 10, aliqRed 10 e verifica se o resultado exibido será o correto.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsRed')).sendKeys(100);
           element(by.id('aliqIcmsRed')).clear().sendKeys(10);
           element(by.id('aliqRed')).clear().sendKeys(10);
           element(by.id('btnIcmsRed')).click();
           var _resultado = element(by.id('resultIcmsRed')).getText();
           expect(_resultado).toEqual("R$9,00");
         })
    })

    describe('Testes relacionados ao panel de descriminação do cálculo.', function(){
         it('Verifica se ao clicar no ícone de pergunta, o panel com a discriminação do cálculo irá ser mostrado.', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsRed')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoRed')).isDisplayed()).toBe(true);
         })

         it('Verifica se o valor que estão nos inputs estão batendo com os valores dentro da discriminação.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsRed')).clear().sendKeys(100);
           element(by.id('aliqIcmsRed')).clear().sendKeys(10);
           element(by.id('aliqRed')).clear().sendKeys(10);
           element(by.id('btnIcmsRed')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsRed')).click();
           browser.sleep(1000);
           expect(element(by.binding('controlicms.valoresIcmsBaseRed.base')).getText()).toContain("R$100,000");
           expect(element(by.binding('controlicms.valoresIcmsBaseRed.aliquota')).getText()).toContain("10");
           expect(element(by.binding('controlicms.valoresIcmsBaseRed.aliquotaRed')).getText()).toContain("10");
           expect(element(by.binding('controlicms.valoresIcmsBaseRed.valorDiscriminacao')).getText()).toContain("R$9,000");
         })

         it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsRed')).click();
           browser.sleep(1000);
           $('#icmsRedModal #discriminacaoRed .close').click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoRed')).isDisplayed()).toBe(false);

           browser.sleep(1000);
           element(by.id('discrimIcmsRed')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsRed')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoRed')).isDisplayed()).toBe(false);
         })
    })

    describe('Testes relacionados aos buttons que ficam no final do modal.', function(){
         it('Verifica se o botão de limpar está funcionando corretamente.', function(){
           browser.sleep(1000);
           element(by.id('baseIcmsRed')).clear().sendKeys(1);
           element(by.id('aliqIcmsRed')).clear().sendKeys(1);
           element(by.id('aliqRed')).clear().sendKeys(1);
           element(by.id('btnLimparIcmsRed')).click();
           expect(element(by.id('baseIcmsRed')).getText()).toBe('');
           expect(element(by.id('aliqIcmsRed')).getText()).toBe('');
           expect(element(by.id('aliqRed')).getText()).toBe('');
         })

         it('Verifica se o botão de fechar que fica no final da janela está funcionando corretamente', function(){
           browser.sleep(1000);
           element(by.id('btnFecharModalIcmsRed')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoRed')).isDisplayed()).toBe(false);
         })
    })
  })

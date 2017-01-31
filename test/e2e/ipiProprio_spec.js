    describe('IPI Próprio', function(){

          require('./helper.js').cookies();

        beforeEach(function(){
              browser.get(browser.params.BASE_CALC_URL + 'calculoipi');
              element(by.id('btnIpi')).click();
        })

        describe('Testes Relacionados a comportamentos do modal', function(){
              it('Verifica se o nome do modal é correspondente com o seu cálculo.', function(){
                browser.sleep(3000);
                expect($('#ipiProprioModal .modal-header .modal-title').getText()).toEqual("IPI Próprio");
              })

              it('Verifica se ao clicar no x dentro do modal, o mesmo irá se fechar!', function(){
                 browser.sleep(1000);
                 $('#ipiProprioModal .modal-header .close').click();
                 browser.sleep(1000);
                 expect(element(by.id('ipiProprioModal')).isDisplayed()).toBe(false);
               })

               it('Verifica se ao apertar Esc, o modal irá se fechar.', function(){
                 browser.sleep(1000);
                 browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                 browser.sleep(1000);
                 expect(element(by.id('ipiProprioModal')).isDisplayed()).toBe(false);
               })

               it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
                 browser.sleep(1000);
                 browser.actions().mouseMove(element(by.id('idContato'))).click().perform();
                 browser.sleep(1000);
                 expect(element(by.id('ipiProprioModal')).isDisplayed()).toBe(false);
               })
        })

        describe('Testes Relacionados a validação dos inputs e buttons dentro do modal', function(){
              it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('baseIpiProprio')).sendKeys(101);
                expect(element(by.id('spanBaseIpiProprio')).isDisplayed()).toBe(false);

                element(by.id('baseIpiProprio')).clear().sendKeys(1);
                expect(element(by.id('spanBaseIpiProprio')).isDisplayed()).toBe(false);

                element(by.id('baseIpiProprio')).clear().sendKeys(0);
                expect(element(by.id('spanBaseIpiProprio')).isDisplayed()).toBe(true);

                element(by.id('baseIpiProprio')).clear().sendKeys(-1);
                expect(element(by.id('spanBaseIpiProprio')).isDisplayed()).toBe(true);
             })

            it('Informa um valor no campo alíquota IPI e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('aliqIpiProprio')).sendKeys(101);
                expect(element(by.id('spanAliqIpiProprio')).isDisplayed()).toBe(true);

                element(by.id('aliqIpiProprio')).clear().sendKeys(100);
                expect(element(by.id('spanAliqIpiProprio')).isDisplayed()).toBe(false);

                element(by.id('aliqIpiProprio')).clear().sendKeys(1);
                expect(element(by.id('spanAliqIpiProprio')).isDisplayed()).toBe(false);

                element(by.id('aliqIpiProprio')).clear().sendKeys(0);
                expect(element(by.id('spanAliqIpiProprio')).isDisplayed()).toBe(true);

                element(by.id('aliqIpiProprio')).clear().sendKeys(-1);
                expect(element(by.id('spanAliqIpiProprio')).isDisplayed()).toBe(true);
            })

             it('Verifica se o botão de calcular estará habilitado ou não dependendo das condições do modal passadas.', function(){
               browser.sleep(1000);
               element(by.id('baseIpiProprio')).clear().sendKeys(1);
               element(by.id('aliqIpiProprio')).clear().sendKeys(1);
               expect(element(by.id('btnIpiProprio')).isEnabled()).toBe(true);

               element(by.id('baseIpiProprio')).clear().sendKeys(1);
               element(by.id('aliqIpiProprio')).clear();
               expect(element(by.id('btnIpiProprio')).isEnabled()).toBe(false);

               element(by.id('baseIpiProprio')).clear();
               element(by.id('aliqIpiProprio')).clear().sendKeys(1);
               expect(element(by.id('btnIpiProprio')).isEnabled()).toBe(false);
             })

             it('Verifica se o valor padrão do resultado está pré-definido corretamente com o valor zerado em reais.', function(){
               browser.sleep(1000);
               expect(element(by.id('resultIpiProprio')).getText()).toEqual("R$0,00");
             })
        })

        describe('Testes relacionados a validação dos cálculos feitos.', function(){
           it('Realiza um cálculo com base 100 e alíquota 10 e verifica se o resultado exibido será o correto.', function(){
             browser.sleep(1000);
             element(by.id('baseIpiProprio')).sendKeys(100);
             element(by.id('aliqIpiProprio')).clear().sendKeys(10);
             element(by.id('btnIpiProprio')).click();
             var _resultado = element(by.id('resultIpiProprio')).getText();
             expect(_resultado).toEqual("R$10,00");
           })
         })

         describe('Testes relacionados ao panel de descriminação do cálculo.', function(){
           it('Verifica se ao clicar no ícone de pergunta, o panel com a discriminação do cálculo irá ser mostrado.', function(){
             browser.sleep(1000);
             element(by.id('discrimIpiProprio')).click();
             browser.sleep(1000);
             expect(element(by.id('discriminacaoIpiProprio')).isDisplayed()).toBe(true);
           })

           it('Verifica se o valor que estão nos inputs estão batendo com os valores dentro da discriminação.', function(){
             browser.sleep(1000);
             element(by.id('baseIpiProprio')).clear().sendKeys(100);
             element(by.id('aliqIpiProprio')).clear().sendKeys(10);
             element(by.id('btnIpiProprio')).click();
             browser.sleep(1000);
             element(by.id('discrimIpiProprio')).click();
             browser.sleep(1000);
             expect(element(by.binding('controlipi.valoresipiProprio.base')).getText()).toContain("R$100,000");
             expect(element(by.binding('controlipi.valoresipiProprio.aliquota')).getText()).toContain("10");
             expect(element(by.binding('controlipi.valoresipiProprio.valorDiscriminacao')).getText()).toContain("R$10,000");
           })

           it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
             browser.sleep(1000);
             element(by.id('discrimIpiProprio')).click();
             browser.sleep(1000);
             $('#ipiProprioModal #discriminacaoIpiProprio .close').click();
             browser.sleep(1000);
             expect(element(by.id('discriminacaoIpiProprio')).isDisplayed()).toBe(false);

             browser.sleep(1000);
             element(by.id('discrimIpiProprio')).click();
             browser.sleep(1000);
             element(by.id('discrimIpiProprio')).click();
             browser.sleep(1000);
             expect(element(by.id('discriminacaoIpiProprio')).isDisplayed()).toBe(false);
           })
      })

      describe('Testes relacionados aos buttons que ficam no final do modal.', function(){
           it('Verifica se o botão de limpar está funcionando corretamente.', function(){
             browser.sleep(1000);
             element(by.id('baseIpiProprio')).clear().sendKeys(1);
             element(by.id('aliqIpiProprio')).clear().sendKeys(1);
             element(by.id('btnLimparIpiProprio')).click();
             expect(element(by.id('baseIpiProprio')).getText()).toBe('');
             expect(element(by.id('aliqIpiProprio')).getText()).toBe('');
           })

           it('Verifica se o botão de fechar que fica no final da janela está funcionando corretamente', function(){
             browser.sleep(1000);
             element(by.id('btnFecharModalIpiProprio')).click();
             browser.sleep(1000);
             expect(element(by.id('discriminacaoIpiProprio')).isDisplayed()).toBe(false);
           })
      })
    })

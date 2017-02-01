  describe('ST Proprio', function(){

          require('./helper.js').cookies();

          beforeEach(function(){
                browser.get(browser.params.BASE_CALC_URL + 'calculost');
                element(by.id('btnSt')).click();
          })

          describe('Testes Relacionados a comportamentos do modal', function(){
                  it('Verifica se o nome do modal é correspondente com o seu cálculo.', function(){
                    browser.sleep(3000);
                    expect($('#STProprioModal .modal-header .modal-title').getText()).toEqual("ST Próprio");
                  })

                  it('Verifica se ao clicar no x dentro do modal, o mesmo irá se fechar!', function(){
                     browser.sleep(1000);
                     $('#STProprioModal .modal-header .close').click();
                     browser.sleep(1000);
                     expect(element(by.id('STProprioModal')).isDisplayed()).toBe(false);
                   })

                   it('Verifica se ao apertar Esc, o modal irá se fechar.', function(){
                     browser.sleep(1000);
                     browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
                     browser.sleep(1000);
                     expect(element(by.id('STProprioModal')).isDisplayed()).toBe(false);
                   })

                   it('Verifica se ao clicar fora do modal, o mesmo irá se fechar', function(){
                     browser.sleep(1000);
                     browser.actions().mouseMove(element(by.id('idContato'))).click().perform();
                     browser.sleep(1000);
                     expect(element(by.id('STProprioModal')).isDisplayed()).toBe(false);
                   })
          })

          describe('Testes Relacionados a validação dos inputs e buttons dentro do modal', function(){
              it('Informa um valor no campo Ipi e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                  browser.sleep(1000);
                  element(by.id('ipiStProprio')).sendKeys(101);
                  expect(element(by.id('spanIpiStProprio')).isDisplayed()).toBe(false);

                  element(by.id('ipiStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanIpiStProprio')).isDisplayed()).toBe(false);

                  element(by.id('ipiStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanIpiStProprio')).isDisplayed()).toBe(false);

                  element(by.id('ipiStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanIpiStProprio')).isDisplayed()).toBe(true);
               })

              it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                  browser.sleep(1000);
                  element(by.id('baseStProprio')).sendKeys(101);
                  expect(element(by.id('spanBaseStProprio')).isDisplayed()).toBe(false);

                  element(by.id('baseStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanBaseStProprio')).isDisplayed()).toBe(false);

                  element(by.id('baseStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanBaseStProprio')).isDisplayed()).toBe(true);

                  element(by.id('baseStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanBaseStProprio')).isDisplayed()).toBe(true);
              })

              it('Informa um valor no campo alíquota ICMS Interna e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                  browser.sleep(1000);
                  element(by.id('aliqInternaStProprio')).sendKeys(101);
                  expect(element(by.id('spanAliqInternaStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqInternaStProprio')).clear().sendKeys(100);
                  expect(element(by.id('spanAliqInternaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqInternaStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanAliqInternaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqInternaStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanAliqInternaStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqInternaStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanAliqInternaStProprio')).isDisplayed()).toBe(true);
              })

              it('Informa um valor no campo alíquota ICMS Interestadual e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                  browser.sleep(1000);
                  element(by.id('aliqInterestStProprio')).sendKeys(101);
                  expect(element(by.id('spanAliqInterestStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqInterestStProprio')).clear().sendKeys(100);
                  expect(element(by.id('spanAliqInterestStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanAliqInterestStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqInterestStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanAliqInterestStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqInterestStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanAliqInterestStProprio')).isDisplayed()).toBe(true);
              })

              it('Informa um valor no campo alíquota MVA e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                  browser.sleep(1000);
                  element(by.id('aliqMvaStProprio')).sendKeys(101);
                  expect(element(by.id('spanAliqMvaStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(100);
                  expect(element(by.id('spanAliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanAliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanAliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanAliqMvaStProprio')).isDisplayed()).toBe(true);
              })

              it('Verifica se o botão de calcular estará habilitado ou não dependendo das condições do modal passadas.', function(){
                 browser.sleep(1000);
                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(2);
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(true);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(false);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear();
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(2);
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(true);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInternaStProprio')).clear();
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(false);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(2);
                 element(by.id('aliqInterestStProprio')).clear();
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(false);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear().sendKeys(1);
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(2);
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear();
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(true);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear();
                 element(by.id('aliqInternaStProprio')).clear().sendKeys(2);
                 element(by.id('aliqInterestStProprio')).clear().sendKeys(1);
                 element(by.id('aliqMvaStProprio')).clear();
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(true);

                 element(by.id('baseStProprio')).clear().sendKeys(1);
                 element(by.id('ipiStProprio')).clear();
                 element(by.id('aliqInternaStProprio')).clear();
                 element(by.id('aliqInterestStProprio')).clear();
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(false);

                 element(by.id('baseStProprio')).clear();
                 element(by.id('ipiStProprio')).clear();
                 element(by.id('aliqInternaStProprio')).clear();
                 element(by.id('aliqInterestStProprio')).clear();
                 element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                 expect(element(by.id('btnIcmsStProprio')).isEnabled()).toBe(false);
               })

               it('Verifica se o valor padrão dos campos de resultado estão pré-definidos corretamente com o valor zerado em reais.', function(){
                 browser.sleep(1000);
                 expect(element(by.id('resultStProprio')).getText()).toEqual("R$0,00");
               })
        })

    describe('Testes relacionados a validação dos cálculos feitos.', function(){
         it('Realiza um cálculo com base 100, alíquota Interna 18, Aliquota Interestadual 12, IPI 100 e MVA de 33. E verifica se o resultado exibido será o correto.', function(){
           browser.sleep(1000);
           element(by.id('baseStProprio')).clear().sendKeys(1000);
           element(by.id('ipiStProprio')).clear().sendKeys(100);
           element(by.id('aliqInternaStProprio')).clear().sendKeys(18);
           element(by.id('aliqInterestStProprio')).clear().sendKeys(12);
           element(by.id('aliqMvaStProprio')).clear().sendKeys(33);
           element(by.id('btnIcmsStProprio')).click();

           expect(element(by.id('resultStProprio')).getText()).toEqual("R$137,40");
         })
    })

    describe('Testes relacionados ao panel de descriminação do cálculo.', function(){
         it('Verifica se ao clicar no ícone de pergunta, o panel com a discriminação do cálculo irá ser mostrado.', function(){
           browser.sleep(1000);
           element(by.id('discrimStProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoSt')).isDisplayed()).toBe(true);
         })

         it('Verifica se o valor que estão nos inputs estão batendo com os valores dentro da discriminação.', function(){
           browser.sleep(1000);
           element(by.id('baseStProprio')).clear().sendKeys(1000);
           element(by.id('ipiStProprio')).clear().sendKeys(100);
           element(by.id('aliqInternaStProprio')).clear().sendKeys(18);
           element(by.id('aliqInterestStProprio')).clear().sendKeys(12);
           element(by.id('aliqMvaStProprio')).clear().sendKeys(33);
           element(by.id('btnIcmsStProprio')).click();
           browser.sleep(1000);
           element(by.id('discrimStProprio')).click();
           browser.sleep(1000);
           expect(element(by.binding('controlst.valoresStProprio.base')).getText()).toContain("R$1.000,000");
           expect(element(by.binding('controlst.valoresStProprio.aliquotaInterna')).getText()).toContain("18");
           expect(element(by.binding('controlst.valoresStProprio.aliquotaInterest')).getText()).toContain("12");
           expect(element(by.binding('controlst.valoresStProprio.valorIcms')).getText()).toContain("R$120,000");
           expect(element(by.binding('controlst.valoresStProprio.baseStIpi')).getText()).toContain("R$1.100,000");
           expect(element(by.binding('controlst.valoresStProprio.mva')).getText()).toContain("33");
           expect(element(by.binding('controlst.valoresStProprio.baseSt')).getText()).toContain("R$1.430,000");
           expect(element(by.binding('controlst.valoresStProprio.valorDiscriminacao')).getText()).toContain("R$137,400");
         })

         it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
           browser.sleep(1000);
           element(by.id('discrimStProprio')).click();
           browser.sleep(1000);
           $('#STProprioModal #discriminacaoSt .close').click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoSt')).isDisplayed()).toBe(false);

           browser.sleep(1000);
           element(by.id('discrimStProprio')).click();
           browser.sleep(1000);
           element(by.id('discrimStProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoSt')).isDisplayed()).toBe(false);
         })
    })

    describe('Testes relacionados aos buttons que ficam no final do modal.', function(){
         it('Verifica se o botão de limpar está funcionando corretamente.', function(){
           browser.sleep(1000);
           element(by.id('baseStProprio')).clear().sendKeys(2016);
           element(by.id('ipiStProprio')).clear().sendKeys(100);
           element(by.id('aliqInternaStProprio')).clear().sendKeys(18);
           element(by.id('aliqInterestStProprio')).clear().sendKeys(12);
           element(by.id('aliqMvaStProprio')).clear().sendKeys(0);

           element(by.id('btnLimparStProprio')).click();

           expect(element(by.id('baseStProprio')).getText()).toBe("");
           expect(element(by.id('ipiStProprio')).getText()).toBe("");
           expect(element(by.id('aliqInternaStProprio')).getText()).toBe("");
           expect(element(by.id('aliqInterestStProprio')).getText()).toBe("");
           expect(element(by.id('aliqMvaStProprio')).getText()).toBe("");
         })

         it('Verifica se o botão de fechar que fica no final da janela está funcionando corretamente', function(){
           browser.sleep(1000);
           element(by.id('btnFecharModalStProprio')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoSt')).isDisplayed()).toBe(false);
         })
    })
  })

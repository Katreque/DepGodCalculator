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
                  expect(element(by.id('spanaliqMvaStProprio')).isDisplayed()).toBe(true);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(100);
                  expect(element(by.id('spanaliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(1);
                  expect(element(by.id('spanaliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(0);
                  expect(element(by.id('spanaliqMvaStProprio')).isDisplayed()).toBe(false);

                  element(by.id('aliqMvaStProprio')).clear().sendKeys(-1);
                  expect(element(by.id('spanaliqMvaStProprio')).isDisplayed()).toBe(true);
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
  })

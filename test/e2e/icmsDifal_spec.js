    describe('ICMS Difal', function(){
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

        describe('Testes Relacionados a validação dos inputs e buttons dentro do modal', function(){
            it('Informa um valor no campo Ano e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('anoNotaDifal')).sendKeys(101);
                expect(element(by.id('spanAnoNotaDifal')).isDisplayed()).toBe(false);

                element(by.id('anoNotaDifal')).clear().sendKeys(1);
                expect(element(by.id('spanAnoNotaDifal')).isDisplayed()).toBe(false);

                element(by.id('anoNotaDifal')).clear().sendKeys(0);
                expect(element(by.id('spanAnoNotaDifal')).isDisplayed()).toBe(true);

                element(by.id('anoNotaDifal')).clear().sendKeys(-1);
                expect(element(by.id('spanAnoNotaDifal')).isDisplayed()).toBe(true);
             })

            it('Informa um valor no campo Base Cálculo e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('baseIcmsDifal')).sendKeys(101);
                expect(element(by.id('spanBaseIcmsDifal')).isDisplayed()).toBe(false);

                element(by.id('baseIcmsDifal')).clear().sendKeys(1);
                expect(element(by.id('spanBaseIcmsDifal')).isDisplayed()).toBe(false);

                element(by.id('baseIcmsDifal')).clear().sendKeys(0);
                expect(element(by.id('spanBaseIcmsDifal')).isDisplayed()).toBe(true);

                element(by.id('baseIcmsDifal')).clear().sendKeys(-1);
                expect(element(by.id('spanBaseIcmsDifal')).isDisplayed()).toBe(true);
            })

            it('Informa um valor no campo alíquota ICMS Interna e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('aliqInternaDifal')).sendKeys(101);
                expect(element(by.id('spanAliqInternaDifal')).isDisplayed()).toBe(true);

                element(by.id('aliqInternaDifal')).clear().sendKeys(100);
                expect(element(by.id('spanAliqInternaDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqInternaDifal')).clear().sendKeys(1);
                expect(element(by.id('spanAliqInternaDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqInternaDifal')).clear().sendKeys(0);
                expect(element(by.id('spanAliqInternaDifal')).isDisplayed()).toBe(true);

                element(by.id('aliqInternaDifal')).clear().sendKeys(-1);
                expect(element(by.id('spanAliqInternaDifal')).isDisplayed()).toBe(true);
            })

            it('Informa um valor no campo alíquota ICMS Interestadual e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('aliqInterestDifal')).sendKeys(101);
                expect(element(by.id('spanAliqInterestDifal')).isDisplayed()).toBe(true);

                element(by.id('aliqInterestDifal')).clear().sendKeys(100);
                expect(element(by.id('spanAliqInterestDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqInterestDifal')).clear().sendKeys(1);
                expect(element(by.id('spanAliqInterestDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqInterestDifal')).clear().sendKeys(0);
                expect(element(by.id('spanAliqInterestDifal')).isDisplayed()).toBe(true);

                element(by.id('aliqInterestDifal')).clear().sendKeys(-1);
                expect(element(by.id('spanAliqInterestDifal')).isDisplayed()).toBe(true);
            })

            it('Informa um valor no campo alíquota FCP e verifica se irá ser exibido a mensagem de valor inválido.', function(){
                browser.sleep(1000);
                element(by.id('aliqFcpDifal')).sendKeys(101);
                expect(element(by.id('spanAliqFcpDifal')).isDisplayed()).toBe(true);

                element(by.id('aliqFcpDifal')).clear().sendKeys(100);
                expect(element(by.id('spanAliqFcpDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqFcpDifal')).clear().sendKeys(1);
                expect(element(by.id('spanAliqFcpDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqFcpDifal')).clear().sendKeys(0);
                expect(element(by.id('spanAliqFcpDifal')).isDisplayed()).toBe(false);

                element(by.id('aliqFcpDifal')).clear().sendKeys(-1);
                expect(element(by.id('spanAliqFcpDifal')).isDisplayed()).toBe(true);
            })

            it('Verifica se o botão de calcular estará habilitado ou não dependendo das condições do modal passadas.', function(){
               browser.sleep(1000);
               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear().sendKeys(2);
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(true);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear().sendKeys(1);
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear();
               element(by.id('aliqInternaDifal')).clear().sendKeys(1);
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear();
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear().sendKeys(1);
               element(by.id('aliqInterestDifal')).clear();
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear().sendKeys(2);
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear();
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(true);

               element(by.id('anoNotaDifal')).clear();
               element(by.id('baseIcmsDifal')).clear().sendKeys(1);
               element(by.id('aliqInternaDifal')).clear().sendKeys(1);
               element(by.id('aliqInterestDifal')).clear().sendKeys(1);
               element(by.id('aliqFcpDifal')).clear();
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear().sendKeys(1);
               element(by.id('baseIcmsDifal')).clear();
               element(by.id('aliqInternaDifal')).clear();
               element(by.id('aliqInterestDifal')).clear();
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);

               element(by.id('anoNotaDifal')).clear();
               element(by.id('baseIcmsDifal')).clear();
               element(by.id('aliqInternaDifal')).clear();
               element(by.id('aliqInterestDifal')).clear();
               element(by.id('aliqFcpDifal')).clear().sendKeys(1);
               expect(element(by.id('btnIcmsDifal')).isEnabled()).toBe(false);
             })

             it('Verifica se o valor padrão dos campos de resultado estão pré-definidos corretamente com o valor zerado em reais.', function(){
               browser.sleep(1000);
               expect(element(by.id('resultValorOrigem')).getText()).toEqual("R$0,00");

               browser.sleep(1000);
               expect(element(by.id('resultValorDestino')).getText()).toEqual("R$0,00");
             })
      })

    describe('Testes relacionados a validação dos cálculos feitos.', function(){
         it('Realiza um cálculo com base 100, alíquota Interna 18, Aliquota Interestadual 12, sem FCP e verifica se o resultado exibido será o correto.', function(){
           browser.sleep(1000);
           element(by.id('anoNotaDifal')).clear().sendKeys(2016);
           element(by.id('baseIcmsDifal')).clear().sendKeys(100);
           element(by.id('aliqInternaDifal')).clear().sendKeys(18);
           element(by.id('aliqInterestDifal')).clear().sendKeys(12);
           element(by.id('aliqFcpDifal')).clear().sendKeys(0);
           element(by.id('btnIcmsDifal')).click();

           expect(element(by.id('resultValorOrigem')).getText()).toEqual("R$3,60");
           expect(element(by.id('resultValorDestino')).getText()).toEqual("R$2,40");
         })
    })

    describe('Testes relacionados ao panel de descriminação do cálculo.', function(){
         it('Verifica se ao clicar no ícone de pergunta, o panel com a discriminação do cálculo irá ser mostrado.', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsDifal')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoDifal')).isDisplayed()).toBe(true);
         })

         it('Verifica se o valor que estão nos inputs estão batendo com os valores dentro da discriminação.', function(){
           browser.sleep(1000);
           element(by.id('anoNotaDifal')).clear().sendKeys(2016);
           element(by.id('baseIcmsDifal')).clear().sendKeys(100);
           element(by.id('aliqInternaDifal')).clear().sendKeys(18);
           element(by.id('aliqInterestDifal')).clear().sendKeys(12);
           element(by.id('aliqFcpDifal')).clear().sendKeys(0);
           element(by.id('btnIcmsDifal')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsDifal')).click();
           browser.sleep(1000);
           expect(element(by.binding('controlicms.valoresIcmsDifal.base')).getText()).toContain("R$100,000");
           expect(element(by.binding('controlicms.valoresIcmsDifal.aliquotaInterna')).getText()).toContain("18");
           expect(element(by.binding('controlicms.valoresIcmsDifal.aliquotaInterestadual')).getText()).toContain("12");
           expect(element(by.binding('controlicms.valoresIcmsDifal.valorDifal')).getText()).toContain("R$6,000");
           element.all(by.binding('controlicms.valoresIcmsDifal.valorDestino'))
           .then((valor)=>{
             expect(valor[1].getText()).toContain("R$2,400");
           })
           expect(element(by.binding('controlicms.valoresIcmsDifal.valorDestinoeFcp')).getText()).toContain("R$2,400");
           expect(element(by.binding('controlicms.valoresIcmsDifal.valorFcp')).getText()).toContain("R$0,000");
         })

         it('Verifica se a forma de fechar a discriminação do cálculo usando o x ou clicando novamente no ícone de pergunta estão funcionando', function(){
           browser.sleep(1000);
           element(by.id('discrimIcmsDifal')).click();
           browser.sleep(1000);
           $('#icmsDifalModal #discriminacaoDifal .close').click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoDifal')).isDisplayed()).toBe(false);

           browser.sleep(1000);
           element(by.id('discrimIcmsDifal')).click();
           browser.sleep(1000);
           element(by.id('discrimIcmsDifal')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoDifal')).isDisplayed()).toBe(false);
         })
    })

    describe('Testes relacionados aos buttons que ficam no final do modal.', function(){
         it('Verifica se o botão de limpar está funcionando corretamente.', function(){
           browser.sleep(1000);
           element(by.id('anoNotaDifal')).clear().sendKeys(2016);
           element(by.id('baseIcmsDifal')).clear().sendKeys(100);
           element(by.id('aliqInternaDifal')).clear().sendKeys(18);
           element(by.id('aliqInterestDifal')).clear().sendKeys(12);
           element(by.id('aliqFcpDifal')).clear().sendKeys(0);

           element(by.id('btnLimparIcmsDifal')).click();

           expect(element(by.id('anoNotaDifal')).getText()).toBe("");
           expect(element(by.id('baseIcmsDifal')).getText()).toBe("");
           expect(element(by.id('aliqInternaDifal')).getText()).toBe("");
           expect(element(by.id('aliqInterestDifal')).getText()).toBe("");
           expect(element(by.id('aliqFcpDifal')).getText()).toBe("");
         })

         it('Verifica se o botão de fechar que fica no final da janela está funcionando corretamente', function(){
           browser.sleep(1000);
           element(by.id('btnFecharModalIcmsDifal')).click();
           browser.sleep(1000);
           expect(element(by.id('discriminacaoDifal')).isDisplayed()).toBe(false);
         })
    })
})

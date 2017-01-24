describe('Cabecalho', function(){

    require('./helper.js').cookies();

    beforeEach(function(){
      browser.get(browser.params.BASE_CALC_URL);  
    })

    it('Verifica se o nome dentro do navbar do Header está aparecendo!', function(){
        expect(element(by.id('nomeCalcHeader')).isDisplayed()).toBe(true);
    })

    it('Verifica se o nome dentro do navbar do Header está correto!', function(){
        var _nomeHeader = element(by.id('nomeCalcHeader')).getAttribute('textContent');

        expect(_nomeHeader).toEqual('DEPGod Calculator');
    })

    it('Verifica se o botão para listar produtos está aparecendo!', function(){

        expect(element(by.id('btnProdutos')).isDisplayed()).toBe(true);
    })

    it('Verifica se a listagem de produtos está aparecendo! (Pode ter executado sem clicar no botão e falhar)', function(){
        browser.sleep(1000);
        element(by.id('btnProdutos')).click();
        browser.sleep(500);
        expect(element(by.binding('produto.nome')).isDisplayed()).toBe(true);
    })

    it('Verifica se a imagem do perfil do passaporte está aparecendo!', function(){

        expect(element(by.id('imagemPerfilPassaporte')).isDisplayed()).toBe(true);
    })

    it('Ao clicar na imagem do perfil, verifica se os elementos estão aparecendo corretamente dentro do dropdown!', function(){
        element(by.id('imagemPerfilPassaporte')).click();

        expect(element(by.binding('controlcabec.informacoesUsuario.nomeUsuario')).isDisplayed()).toBe(true);
        expect(element(by.binding('controlcabec.informacoesUsuario.emailUsuario')).isDisplayed()).toBe(true);
        expect(element(by.id('btnSair')).isDisplayed()).toBe(true);
    })

    it('Verifica se ao clicar no botão de sair, é redirecionado para a página de login do Passaporte.', function(){
        element(by.id('imagemPerfilPassaporte')).click();        
        element(by.id('btnSair')).click();

        expect(browser.getCurrentUrl()).toEqual('https://passaporte2-dev.alterdata.com.br/');
    })
})
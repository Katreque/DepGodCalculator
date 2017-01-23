describe('Cabecalho', function(){
    var helper = require('./helper.js');
    helper.cookies();

    it('Verifica se o nome dentro do navbar do Header está aparecendo!', function(){

        expect(element(by.id('nomeCalcHeader')).isPresent()).toBe(true);
    })

    it('Verifica se o nome dentro do navbar do Header está correto!', function(){
        var _nomeHeader = element(by.id('nomeCalcHeader')).getAttribute('textContent');

        expect(_nomeHeader).toEqual('DEPGod Calculator');
    })

    it('Verifica se o botão para listar produtos está aparecendo!', function(){

        expect(element(by.id('btnProdutos')).isPresent()).toBe(true);
    })

    /*it('Verifica se a listagem de produtos está aparecendo!', function(){

        expect(element(by.id('listagemProdutos'))).not.toBeNull();
    })*/

    it('Verifica se a imagem do perfil do passaporte está aparecendo!', function(){

        expect(element(by.id('imagemPerfilPassaporte')).isPresent()).toBe(true);
    })

    it('Ao clicar na imagem do perfil, verifica se os elementos estão aparecendo corretamente dentro do dropdown!', function(){
        element(by.id('imagemPerfilPassaporte')).click();

        expect(element(by.binding('controlcabec.informacoesUsuario.nomeUsuario')).isPresent()).toBe(true);
        expect(element(by.binding('controlcabec.informacoesUsuario.emailUsuario')).isPresent()).toBe(true);
        expect(element(by.id('btnSair')).isPresent()).toBe(true);
    })

    it('Verifica se ao clicar no botão de sair, é redirecionado para a página de login do Passaporte.', function(){
        element(by.id('imagemPerfilPassaporte')).click();        
        element(by.id('btnSair')).click();

        expect(browser.getCurrentUrl()).toEqual('https://passaporte2-dev.alterdata.com.br/');
    })
})
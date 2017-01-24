describe('Rodape', function(){
    var _linkContato = 'http://www.alterdata.com.br/contato';
    var _linkSuporte = 'http://cliente.alterdata.com.br/LoginCentral.aspx';
    var _linkAlter = 'http://alterdata.com.br/'  ;

    require('./helper.js').cookies();

    beforeEach(function(){
        browser.get(browser.params.BASE_CALC_URL);
    })

    it('Verifica se o nome da calculadora no rodapé está aparecendo corretamente.', function(){
        expect(element(by.id('nomeRodape')).getText()).toEqual('DEPGod Calculator 1.0 - Todos os direitos reservados ao Souza.sup.erp');
    })

    it('Verifica se o trecho Contato no rodapé está com o nome e link corretos.', function(){
        expect(element(by.id('labelContato')).getText()).toEqual('Contato');
        
        var _link = element(by.id('idContato')).getAttribute('href');
        expect(_link).toEqual(_linkContato);
    })

    it('Verifica se o trecho Suporte no rodapé está com o nome e link corretos.', function(){
        expect(element(by.id('labelSuporte')).getText()).toEqual('Suporte');

        var _link = element(by.id('idSuporte')).getAttribute('href');
        expect(_link).toEqual(_linkSuporte);
    })

    it('Verifica se o logo da Alterdata no Rodapé está aparecendo e com link correto.', function(){
        expect(element(by.id('logoAlterdata')).isDisplayed()).toBe(true);

        var _link = element(by.id('idAlterdata')).getAttribute('href');
        expect(_link).toEqual(_linkAlter);
    })
})
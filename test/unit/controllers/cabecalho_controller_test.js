describe('controladorCabecalho', function(){
    var _scope, _rootScope, _q, _window, _log, AltPassaporteListagemProdutosService;
    var _NomeController = 'controladorCabecalho as controlcabec';

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _q = $injector.get('$q');
        _log = $injector.get('$log');
        _window = $injector.get('$window');
        AltPassaporteListagemProdutosService = $injector.get('AltPassaporteListagemProdutosService');
        AltPassaporteUsuarioLogadoManager = $injector.get('AltPassaporteUsuarioLogadoManager');
        PASSAPORTE_LOGOUT = $injector.get('PASSAPORTE_LOGOUT');

        spyOn(_log, 'error').and.callFake(angular.noop)
    }))

    it('Verifica se o objeto produtosHabilitados inicia vazio!', inject(function($controller){
        $controller(_NomeController, {$scope: _scope})
        _rootScope.$digest();

        expect(_scope.controlcabec.produtosHabilitados).toEqual({});
    }))

    it('Verifica o retorno do método getProdutosHabilitados e se preenche corretamente o objeto.', inject(function($controller){
        var _resultadoEsperado = {
                                url: "https://passaporte2-dev.alterdata.com.br/produtos", 
                                urlAutenticacao: "https://passaporte2-dev.alterdata.com.br/produtos?info=eyJjaGF2ZSI6IkJ0NGV1Xzl1ZW9rRlI5Ri1yR3lFdGtFOHQyb3hBcnotNXN1d1piQm1SZUFlQkJReDVjdzlITmNvdEJwc1A3eFBqdTA3Y19sSFpFTTBoM1c2bHFQbmF0Zm4zRXh5eWJsWVNJT19qd185aW5MWEgyY1ZMVURzc1VhWU10dEFtVkZFUFZCVWkxXzZrVVlfcUYyRzc5TlRPcGloTFlBdGUzb3I4S3U5bmNIbDhfRzJqRFpIV1JRYXRuVnlVdFNHUld6ZjY0RnNPa2tORkFqdjdXRGlJNlFtZHBHY1ZuRVdDcHljMXZJdkFNQXZqV1RzYTVjWEhzNmowMzZweU8za0x0RDBhT2ZqSF9GVlZnTG5YZDVlQm5XcHVMYl9EcmFQa09oVTU2d2U2UmJINDFVazFwRkN0UC1hNVRWM2tQaWxIMUlZVUU3QTVwSi1zazdLZW41ekQtT25VQSIsInRva2VuIjoiOXQwZGd4QktuQW1YMXVKT2haNGpkUThpNWtuTVRlSHBpY0pwRFhXYWtCQzAtQ2ZnYXFjMFFFQzh2NHZTcjdMYndtbzgySE9QaGlmZVlsTndTX3A5TEZFeGFHdzlzX2tUcjNBWWJINHdaMVlfZV9yaHZ6YmF0NmlWLWdyb0FIQkdDWkJFLXBDeW5yQVNFYzNvUzBPQkhwYmRFbVFnR3RBalVnZl9PS3VMYUstZXJISmNfeXloM2QwVXlkR0FXa2xBUGExT3JhQVJUQkdTSEhROUQ3UlAxemR4Q0tHRWJqc1psRm1aYXNFYThfZFl2WlNFektOQmxpb21ibUhOX1pkaF9ZSkl4UE51OW16ZUxtc0JTWXFTY0JtUGdKTVQ4ZFVTVERwc05OekpxMGRqa3FKVDBTaEtHaFlOcFRmbE01UkllVXpTLVRsZlEzeUp0LUdIZi1rcDdfZzE3ZmFNUklndTROcDg2V0FsUmVfeFE3OWx1YTE1Tm4tN005NEF0VTAyWHk5em9LcDVncktXd3pESzNLRVBELXVFRzk1cExqeXpNNXUtTmU5R1JtejJST1ctRWEyMm1JTSJ9&idProduto=815ad73c5b16ab5c4bb5619835bb7bfa", 
                                urlLogo: "https://cdnnimbus.alterdata.com.br/imagens/logos/passaporte.svg"
                            }

        spyOn(AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function(){
            return _q.resolve(_resultadoEsperado)
        })

        spyOn(_window, 'alert').and.callThrough();

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteListagemProdutosService.getProdutosHabilitados()
        .then(()=>{

            expect(_scope.controlcabec.produtosHabilitados.url).toEqual("https://passaporte2-dev.alterdata.com.br/produtos");
            expect(_scope.controlcabec.produtosHabilitados.urlAutenticacao).toEqual                                         ("https://passaporte2-dev.alterdata.com.br/produtos?info=eyJjaGF2ZSI6IkJ0NGV1Xzl1ZW9rRlI5Ri1yR3lFdGtFOHQyb3hBcnotNXN1d1piQm1SZUFlQkJReDVjdzlITmNvdEJwc1A3eFBqdTA3Y19sSFpFTTBoM1c2bHFQbmF0Zm4zRXh5eWJsWVNJT19qd185aW5MWEgyY1ZMVURzc1VhWU10dEFtVkZFUFZCVWkxXzZrVVlfcUYyRzc5TlRPcGloTFlBdGUzb3I4S3U5bmNIbDhfRzJqRFpIV1JRYXRuVnlVdFNHUld6ZjY0RnNPa2tORkFqdjdXRGlJNlFtZHBHY1ZuRVdDcHljMXZJdkFNQXZqV1RzYTVjWEhzNmowMzZweU8za0x0RDBhT2ZqSF9GVlZnTG5YZDVlQm5XcHVMYl9EcmFQa09oVTU2d2U2UmJINDFVazFwRkN0UC1hNVRWM2tQaWxIMUlZVUU3QTVwSi1zazdLZW41ekQtT25VQSIsInRva2VuIjoiOXQwZGd4QktuQW1YMXVKT2haNGpkUThpNWtuTVRlSHBpY0pwRFhXYWtCQzAtQ2ZnYXFjMFFFQzh2NHZTcjdMYndtbzgySE9QaGlmZVlsTndTX3A5TEZFeGFHdzlzX2tUcjNBWWJINHdaMVlfZV9yaHZ6YmF0NmlWLWdyb0FIQkdDWkJFLXBDeW5yQVNFYzNvUzBPQkhwYmRFbVFnR3RBalVnZl9PS3VMYUstZXJISmNfeXloM2QwVXlkR0FXa2xBUGExT3JhQVJUQkdTSEhROUQ3UlAxemR4Q0tHRWJqc1psRm1aYXNFYThfZFl2WlNFektOQmxpb21ibUhOX1pkaF9ZSkl4UE51OW16ZUxtc0JTWXFTY0JtUGdKTVQ4ZFVTVERwc05OekpxMGRqa3FKVDBTaEtHaFlOcFRmbE01UkllVXpTLVRsZlEzeUp0LUdIZi1rcDdfZzE3ZmFNUklndTROcDg2V0FsUmVfeFE3OWx1YTE1Tm4tN005NEF0VTAyWHk5em9LcDVncktXd3pESzNLRVBELXVFRzk1cExqeXpNNXUtTmU5R1JtejJST1ctRWEyMm1JTSJ9&idProduto=815ad73c5b16ab5c4bb5619835bb7bfa");
            expect(_scope.controlcabec.produtosHabilitados.urlLogo).toEqual("https://cdnnimbus.alterdata.com.br/imagens/logos/passaporte.svg");
        })

        AltPassaporteListagemProdutosService.getProdutosHabilitados();
        _rootScope.$digest(); 

        expect(_log.error).not.toHaveBeenCalledWith();
    }))

    it('Verifica o retorno do método retorna e se preenche corretamente o objeto.', inject(function($controller){
        var _resultadoEsperado = {"idUsuario":3115,"nomeUsuario":"Katreque","nrTelefone":"21997411310","sexo":0,"avatar":"http://novaintranet.alterdata.com.br/Images/funcionarios/souza_sup_erp.png","emailUsuario":"souza.sup.erp@alterdata.com.br","contas":[{"avatar":"http://novaintranet.alterdata.com.br/Images/funcionarios/souza_sup_erp.png","email":"souza.sup.erp@alterdata.com.br","nome":"ADMatriz"},{"email":"souza.sup.erp@alterdata.com.br","nome":"Passaporte"}],"assinantes":[{"id":3098,"nome":"RENAN VERISSIMO DE VASCONCELOS SOUZA","idExterno":"340582","identificacao":"167.165.967-80","administradorPassaporte":true,"produtos":[{"id":4,"nome":"Passaporte Admin","chaveProduto":"e8c91ad13fffb75c7a4af3f2dd571e5d","isModulo":false,"idAssinanteProdutoUsuario":13101,"statusBimer":"Pleno Atendimento","idStatusBimer":"0010000001","perfis":[{"id":2,"nome":"Passaporte Administração - Administrador","tags":[]}],"funcionalidades":[{"nome":"Aceitar Tarefa","perfis":[2]},{"nome":"Delegar Perfil Administrador","perfis":[2]},{"nome":"Recusar Tarefa","perfis":[2]},{"nome":"Revogar Acesso","perfis":[2]}]}]},{"id":2463,"nome":"MARIA ALESSANDRA DA SILVA MACULO","idExterno":"068379","identificacao":"091.425.017-50","administradorPassaporte":false,"produtos":[{"id":4,"nome":"Passaporte Admin","chaveProduto":"e8c91ad13fffb75c7a4af3f2dd571e5d","isModulo":false,"idAssinanteProdutoUsuario":13099,"statusBimer":"Pleno Atendimento","idStatusBimer":"0010000001","bloqueadoBimer":false,"perfis":[{"id":13,"nome":"Passaporte Administração - Cliente","tags":[]}]}]},{"id":2002,"nome":"ALTERDATA TECNOLOGIA EM INFORMATICA LTDA","idExterno":"900000","identificacao":"36.462.778/0001-60","administradorPassaporte":false,"produtos":[{"id":4,"nome":"Passaporte Admin","chaveProduto":"e8c91ad13fffb75c7a4af3f2dd571e5d","isModulo":false,"idAssinanteProdutoUsuario":13165,"statusBimer":"Pleno Atendimento","idStatusBimer":"0010000001","bloqueadoBimer":false,"perfis":[{"id":13,"nome":"Passaporte Administração - Cliente","tags":[]}]}]}]};

        spyOn(AltPassaporteUsuarioLogadoManager, 'retorna').and.callFake(function(){
            return _resultadoEsperado;
        })

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteUsuarioLogadoManager.retorna();
        _rootScope.$digest();

        expect(_scope.controlcabec.informacoesUsuario).toBe(_resultadoEsperado);
    }))

    it('Verifica o objeto logoutLink está sendo preenchido corretamente.', inject(function($controller){
        var _resultadoEsperado = PASSAPORTE_LOGOUT;
        $controller(_NomeController, {$scope: _scope})

        expect(_scope.controlcabec.logoutLink).toBe(_resultadoEsperado);
    }))

    it('Verifica o retorno do método getProdutosHabilitados quando o usuário não foi autenticado.', inject(function($controller){
        var _resultadoEsperado = "Usuário não autenticado.";
        var _status = {status: -1};

        spyOn(AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function(){
            return _q.reject(_status)
        })

        spyOn(_window, 'alert').and.callThrough();

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteListagemProdutosService.getProdutosHabilitados();
        _rootScope.$digest();

        expect(_log.error).toHaveBeenCalledWith(_resultadoEsperado);
    }))

    it('Verifica o retorno do método getProdutosHabilitados quando ocorre algo de errado e repassa uma mensagem default.', inject(function($controller){
        var _resultadoEsperado = "Ocorreu algum erro inesperado ao carregar seus produtos habilitados.";
        var _status = {status: -2};

        spyOn(AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function(){
            return _q.reject(_status)
        })

        spyOn(_window, 'alert').and.callThrough();

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteListagemProdutosService.getProdutosHabilitados();
        _rootScope.$digest();

        expect(_log.error).toHaveBeenCalledWith(_resultadoEsperado);
    }))
})
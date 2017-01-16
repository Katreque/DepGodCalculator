describe('controladorCabecalho', function(){
    var _scope, _rootScope, _q, AltPassaporteListagemProdutosService;
    var _NomeController = 'controladorCabecalho as controlcabec';

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _q = $injector.get('$q');
        AltPassaporteListagemProdutosService = $injector.get('AltPassaporteListagemProdutosService');
    }))

    it('Verifica se o objeto inicia vazio!', inject(function($controller){
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

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteListagemProdutosService.getProdutosHabilitados();
        _rootScope.$digest();

        expect(_scope.controlcabec.produtosHabilitados.url).toEqual("https://passaporte2-dev.alterdata.com.br/produtos");
        expect(_scope.controlcabec.produtosHabilitados.urlAutenticacao).toEqual("https://passaporte2-dev.alterdata.com.br/produtos?info=eyJjaGF2ZSI6IkJ0NGV1Xzl1ZW9rRlI5Ri1yR3lFdGtFOHQyb3hBcnotNXN1d1piQm1SZUFlQkJReDVjdzlITmNvdEJwc1A3eFBqdTA3Y19sSFpFTTBoM1c2bHFQbmF0Zm4zRXh5eWJsWVNJT19qd185aW5MWEgyY1ZMVURzc1VhWU10dEFtVkZFUFZCVWkxXzZrVVlfcUYyRzc5TlRPcGloTFlBdGUzb3I4S3U5bmNIbDhfRzJqRFpIV1JRYXRuVnlVdFNHUld6ZjY0RnNPa2tORkFqdjdXRGlJNlFtZHBHY1ZuRVdDcHljMXZJdkFNQXZqV1RzYTVjWEhzNmowMzZweU8za0x0RDBhT2ZqSF9GVlZnTG5YZDVlQm5XcHVMYl9EcmFQa09oVTU2d2U2UmJINDFVazFwRkN0UC1hNVRWM2tQaWxIMUlZVUU3QTVwSi1zazdLZW41ekQtT25VQSIsInRva2VuIjoiOXQwZGd4QktuQW1YMXVKT2haNGpkUThpNWtuTVRlSHBpY0pwRFhXYWtCQzAtQ2ZnYXFjMFFFQzh2NHZTcjdMYndtbzgySE9QaGlmZVlsTndTX3A5TEZFeGFHdzlzX2tUcjNBWWJINHdaMVlfZV9yaHZ6YmF0NmlWLWdyb0FIQkdDWkJFLXBDeW5yQVNFYzNvUzBPQkhwYmRFbVFnR3RBalVnZl9PS3VMYUstZXJISmNfeXloM2QwVXlkR0FXa2xBUGExT3JhQVJUQkdTSEhROUQ3UlAxemR4Q0tHRWJqc1psRm1aYXNFYThfZFl2WlNFektOQmxpb21ibUhOX1pkaF9ZSkl4UE51OW16ZUxtc0JTWXFTY0JtUGdKTVQ4ZFVTVERwc05OekpxMGRqa3FKVDBTaEtHaFlOcFRmbE01UkllVXpTLVRsZlEzeUp0LUdIZi1rcDdfZzE3ZmFNUklndTROcDg2V0FsUmVfeFE3OWx1YTE1Tm4tN005NEF0VTAyWHk5em9LcDVncktXd3pESzNLRVBELXVFRzk1cExqeXpNNXUtTmU5R1JtejJST1ctRWEyMm1JTSJ9&idProduto=815ad73c5b16ab5c4bb5619835bb7bfa");
        expect(_scope.controlcabec.produtosHabilitados.urlLogo).toEqual("https://cdnnimbus.alterdata.com.br/imagens/logos/passaporte.svg");
    }))

    /*it('Verifica o retorno do método getProdutosHabilitados quando ocorreu algum erro.', inject(function($controller){
        spyOn(AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function(){
            return _q.resolve(err instanceof TypeError)
        })

        $controller(_NomeController, {$scope: _scope})
        AltPassaporteListagemProdutosService.getProdutosHabilitados();
        _rootScope.$digest();

        expect(_scope.controlcabec.produtosHabilitados.url).toEqual("https://passaporte2-dev.alterdata.com.br/produtos");
    }))*/
})
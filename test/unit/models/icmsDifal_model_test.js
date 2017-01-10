describe('IcmsdifalModel', function(){
    var IcmsdifalModel;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        IcmsdifalModel = $injector.get('IcmsdifalModel')
    }))
    
    describe('Criação do construtor', function(){
        it('Verifica se o mesmo é criado corretamente', function(){
            var _construtor = new IcmsdifalModel();
            var _resultadoEsperado = {ano: undefined, base: undefined, aliquotaInterna: undefined, aliquotaInterestadual: undefined, aliquotaFcp: undefined, valorDifal: undefined, valorFcp: undefined, valorOrigem: 0, valorDestino: 0, valorDestinoeFcp: 0};
            
            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);
        })        
    })

    describe('Verifica se a função de validação (IsValid) está de acordo com a regra de negócio!', function(){
        it('Valores positivos. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 1;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 2;
            _construtor.aliquotaInterestadual = 1;
            _construtor.aliquotaFcp = 1;
            expect(_construtor.isValid()).toBe(true);

            _construtor.ano = 10000;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 100;
            _construtor.aliquotaInterestadual = 99;
            _construtor.aliquotaFcp = 100;
            expect(_construtor.isValid()).toBe(true);
        })

        it('Valores acima de 100 para aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;

            expect(_construtor.isValid()).toBe(true);

            _construtor.aliquotaInterna = 101;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterestadual = 101;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaFCP = 101;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor neutro.', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;

            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterna = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterestadual = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valores abaixo de zero. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;

            expect(_construtor.isValid()).toBe(true);

            _construtor.base = -1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterna = -1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterestadual = -1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaFcp = -1;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Campos vazios. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;

            expect(_construtor.isValid()).toBe(true);

            _construtor.base = "";
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquota = "";
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaRed = "";
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaFcp = "";
            expect(_construtor.isValid()).toBe(false);
        })

        it('Aliquota Interna tem que ser maior que a Interestadual!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;

            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            expect(_construtor.isValid()).toBe(true);

            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 18;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquotaInterna = 12;
            _construtor.aliquotaInterestadual = 18;
            expect(_construtor.isValid()).toBe(false);
        })
    })
})
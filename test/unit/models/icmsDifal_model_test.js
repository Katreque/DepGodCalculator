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
            _construtor.base = 1;
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

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(true);
        })

        it('Valores acima de 100 para aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 101;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 101;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 101;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor zerado. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 0;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 0;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 0;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 1;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 0;
            _construtor.aliquotaFcp = 1;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor zerado/em branco para FCP. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(true);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = "";
            expect(_construtor.isValid()).toBe(true);
        })

        it('Valores abaixo de zero. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = -1;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = -1;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = -1;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = -1;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = -1;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Campos vazios. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();

            _construtor.ano = "";
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = "";
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = "";
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = "";
            _construtor.aliquotaFcp = 0;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Aliquota Interna tem que ser maior que a Interestadual. Caso contrário, retorna false!', function(){
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

    describe('Verificação do cálculo', function(){
        it('Verifica se os valores predefinidos estão calculando corretamente no ano de 2016, com e sem FCP.', function(){
            var _construtor = new IcmsdifalModel();
            var _resultadoEsperado = {ano: 2016, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 0, valorDifal: '60.00', valorFcp: '0.00', valorOrigem: '36.00', valorDestino: '24.00', valorDestinoeFcp: '24.00'}

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2016, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 2, valorDifal: '60.00', valorFcp: '20.00', valorOrigem: '36.00', valorDestino: '24.00', valorDestinoeFcp: '44.00'}

            _construtor.ano = 2016;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 2;
            _construtor.calcular();

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

        it('Verifica se os valores predefinidos estão calculando corretamente no ano de 2017, com e sem FCP.', function(){
            var _construtor = new IcmsdifalModel();
            var _resultadoEsperado = {ano: 2017, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 0, valorDifal: '60.00', valorFcp: '0.00', valorOrigem: '24.00', valorDestino: '36.00', valorDestinoeFcp: '36.00'}

            _construtor.ano = 2017;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2017, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 2, valorDifal: '60.00', valorFcp: '20.00', valorOrigem: '24.00', valorDestino: '36.00', valorDestinoeFcp: '56.00'}

            _construtor.ano = 2017;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 2;
            _construtor.calcular();

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

        it('Verifica se os valores predefinidos estão calculando corretamente no ano de 2018, com e sem FCP.', function(){
            var _construtor = new IcmsdifalModel();
            var _resultadoEsperado = {ano: 2018, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 0, valorDifal: '60.00', valorFcp: '0.00', valorOrigem: '12.00', valorDestino: '48.00', valorDestinoeFcp: '48.00'}

            _construtor.ano = 2018;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2018, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 2, valorDifal: '60.00', valorFcp: '20.00', valorOrigem: '12.00', valorDestino: '48.00', valorDestinoeFcp: '68.00'}

            _construtor.ano = 2018;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 2;
            _construtor.calcular();

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

        it('Verifica se os valores predefinidos estão calculando corretamente no ano de 2019 e em diante, com e sem FCP.', function(){
            var _construtor = new IcmsdifalModel();
            var _resultadoEsperado = {ano: 2019, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 0, valorDifal: '60.00', valorFcp: '0.00', valorOrigem: '0.00', valorDestino: '60.00', valorDestinoeFcp: '60.00'}

            _construtor.ano = 2019;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2019, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 2, valorDifal: '60.00', valorFcp: '20.00', valorOrigem: '0.00', valorDestino: '60.00', valorDestinoeFcp: '80.00'}

            _construtor.ano = 2019;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 2;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2020, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 0, valorDifal: '60.00', valorFcp: '0.00', valorOrigem: '0.00', valorDestino: '60.00', valorDestinoeFcp: '60.00'}

            _construtor.ano = 2020;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.aliquotaFcp).toEqual(_resultadoEsperado.aliquotaFcp);
            expect(_construtor.valorDifal).toEqual(_resultadoEsperado.valorDifal);
            expect(_construtor.valorFcp).toEqual(_resultadoEsperado.valorFcp);
            expect(_construtor.valorOrigem).toEqual(_resultadoEsperado.valorOrigem);
            expect(_construtor.valorDestino).toEqual(_resultadoEsperado.valorDestino);
            expect(_construtor.valorDestinoeFcp).toEqual(_resultadoEsperado.valorDestinoeFcp);

            var _resultadoEsperado = {ano: 2020, base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, aliquotaFcp: 2, valorDifal: '60.00', valorFcp: '20.00', valorOrigem: '0.00', valorDestino: '60.00', valorDestinoeFcp: '80.00'}

            _construtor.ano = 2020;
            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.aliquotaFcp = 2;
            _construtor.calcular();

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

    describe('Validação das regras de proteção dos valores informados pelo usuário.', function(){
        it('Passa um valor menor que zero para a validação de base e ano. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            var _valor = -1;

            expect(_construtor.validacaoBaseAno(_valor)).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de base e ano. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            var _valor = 0;

            expect(_construtor.validacaoBaseAno(_valor)).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de base e ano. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();
            var _valor = 1;

            expect(_construtor.validacaoBaseAno(_valor)).toBe(true);
        })

        it('Passa um valor menor que zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            var _aliquota = -1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor igual zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            var _aliquota = 0;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de aliquota. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();
            var _aliquota = 1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            var _aliquota = 101;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor menor que zero para a validação de aliquota que aceita zero. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaFcp = -1;

            expect(_construtor.validacaoAliquotaAceitaZero(_construtor.aliquotaFcp)).toBe(false);
        })

        it('Passa um valor igual zero para a validação de aliquota que aceita zero. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaFcp = 0;

            expect(_construtor.validacaoAliquotaAceitaZero(_construtor.aliquotaFcp)).toBe(true);
        })

        it('Passa um valor maior que zero para a validação de aliquota que aceita zero. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaFcp = 1;

            expect(_construtor.validacaoAliquotaAceitaZero(_construtor.aliquotaFcp)).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota que aceita zero. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaFcp = 101;

            expect(_construtor.validacaoAliquotaAceitaZero(_construtor.aliquotaFcp)).toBe(false);
        })

        it('Passa um valor menor para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaInterna = 12;
            _construtor.aliquotaInterestadual = 18;

            expect(_construtor.validacaoAliquotaInternaMaiorInterest()).toBe(false);
        })

        it('Passa um valor igual para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar false!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaInterna = 12;
            _construtor.aliquotaInterestadual = 12;

            expect(_construtor.validacaoAliquotaInternaMaiorInterest()).toBe(false);
        })

        it('Passa um valor maior para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar true!', function(){
            var _construtor = new IcmsdifalModel();
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;

            expect(_construtor.validacaoAliquotaInternaMaiorInterest()).toBe(true);
        })
    })
})
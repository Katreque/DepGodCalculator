describe('StProprioModel', function(){
    var StProprioModel;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        StProprioModel = $injector.get('StProprioModel');
    }))

    describe('Criação do construtor', function(){
        it('Verifica se o mesmo é criado corretamente', function(){
            var _construtor = new StProprioModel();
            var _resultadoEsperado = {
                base: undefined,
                aliquotaInterna: undefined,
                aliquotaInterestadual: undefined,
                mva: undefined,
                ipi: undefined,
                baseSt: undefined,
                baseStIpi: undefined,
                valorIcms: 0,
                valorSt: 0,
                valorDiscriminacao: 0
            };

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.mva).toEqual(_resultadoEsperado.mva);
            expect(_construtor.ipi).toEqual(_resultadoEsperado.ipi);
            expect(_construtor.baseSt).toEqual(_resultadoEsperado.baseSt);
            expect(_construtor.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
            expect(_construtor.valorIcms).toEqual(_resultadoEsperado.valorIcms);
            expect(_construtor.valorSt).toEqual(_resultadoEsperado.valorSt);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })
    })

    describe('Verifica se a função de validação (isValid) está de acordo com a regra de negócio!', function(){
        it('Valores positivos. Deve retornar true!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 1;
            _construtor.aliquotaInterna = 2;
            _construtor.aliquotaInterestadual = 1;
            _construtor.mva = 1;
            _construtor.ipi = 1;
            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 10000;
            _construtor.aliquotaInterna = 100;
            _construtor.aliquotaInterestadual = 99;
            _construtor.mva = 100;
            _construtor.ipi = 10000;
            expect(_construtor.isValid()).toBe(true);
        })

        it('Valores acima de 100 para aliquota. Deve retornar false!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 101;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 101;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 101;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor zerado. Deve retornar false!', function(){
            var _construtor =  new StProprioModel();

            _construtor.base = 0;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 0;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 0;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor zerado/em branco para MVA/IPI. Deve retornar true!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 0;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 0;
            expect(_construtor.isValid()).toBe(true);
        })

        it('Valores abaixo de zero. Deve retornar false!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = -1;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = -1;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = -1;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = -1;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = -1;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Campos vazios. Deve retornar false!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = "";
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = "";
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = "";
            _construtor.mva = 25;
            _construtor.ipi = 100;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Aliquota Interna tem que ser maior que a Interestadual. Caso contrário, retorna false!', function(){
            var _construtor = new StProprioModel();

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;

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
        it('Verifica se os valores predefinidos estão calculando corretamente sem mva e ipi preenchidos.', function(){
            var _construtor = new StProprioModel();
            var _resultadoEsperado = {base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, mva: 0, ipi: 0, baseSt: '1000.00', baseStIpi: '1000.00', valorIcms: '120.00', valorSt: '60.00', valorDiscriminacao: '60.000'}

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 0;
            _construtor.ipi = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.mva).toEqual(_resultadoEsperado.mva);
            expect(_construtor.ipi).toEqual(_resultadoEsperado.ipi);
            expect(_construtor.baseSt).toEqual(_resultadoEsperado.baseSt);
            expect(_construtor.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
            expect(_construtor.valorIcms).toEqual(_resultadoEsperado.valorIcms);
            expect(_construtor.valorSt).toEqual(_resultadoEsperado.valorSt);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })

        it('Verifica se os valores predefinidos estão calculando corretamente sem mva e com ipi preenchidos.', function(){
            var _construtor = new StProprioModel();
            var _resultadoEsperado = {base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, mva: 0, ipi: 100, baseSt: '1100.00', baseStIpi: '1100.00', valorIcms: '120.00', valorSt: '78.00', valorDiscriminacao: '78.000'}

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 0;
            _construtor.ipi = 100;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.mva).toEqual(_resultadoEsperado.mva);
            expect(_construtor.ipi).toEqual(_resultadoEsperado.ipi);
            expect(_construtor.baseSt).toEqual(_resultadoEsperado.baseSt);
            expect(_construtor.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
            expect(_construtor.valorIcms).toEqual(_resultadoEsperado.valorIcms);
            expect(_construtor.valorSt).toEqual(_resultadoEsperado.valorSt);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })

        it('Verifica se os valores predefinidos estão calculando corretamente com mva e sem ipi preenchidos.', function(){
            var _construtor = new StProprioModel();
            var _resultadoEsperado = {base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, mva: 25, ipi: 0, baseSt: '1250.00', baseStIpi: '1000.00', valorIcms: '120.00', valorSt: '105.00', valorDiscriminacao: '105.000'}

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 0;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.mva).toEqual(_resultadoEsperado.mva);
            expect(_construtor.ipi).toEqual(_resultadoEsperado.ipi);
            expect(_construtor.baseSt).toEqual(_resultadoEsperado.baseSt);
            expect(_construtor.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
            expect(_construtor.valorIcms).toEqual(_resultadoEsperado.valorIcms);
            expect(_construtor.valorSt).toEqual(_resultadoEsperado.valorSt);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })

        it('Verifica se os valores predefinidos estão calculando corretamente com mva e ipi preenchidos.', function(){
            var _construtor = new StProprioModel();
            var _resultadoEsperado = {base: 1000, aliquotaInterna: 18, aliquotaInterestadual: 12, mva: 25, ipi: 100, baseSt: '1350.00', baseStIpi: '1100.00', valorIcms: '120.00', valorSt: '123.00', valorDiscriminacao: '123.000'}

            _construtor.base = 1000;
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;
            _construtor.mva = 25;
            _construtor.ipi = 100;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquotaInterna).toEqual(_resultadoEsperado.aliquotaInterna);
            expect(_construtor.aliquotaInterestadual).toEqual(_resultadoEsperado.aliquotaInterestadual);
            expect(_construtor.mva).toEqual(_resultadoEsperado.mva);
            expect(_construtor.ipi).toEqual(_resultadoEsperado.ipi);
            expect(_construtor.baseSt).toEqual(_resultadoEsperado.baseSt);
            expect(_construtor.baseStIpi).toEqual(_resultadoEsperado.baseStIpi);
            expect(_construtor.valorIcms).toEqual(_resultadoEsperado.valorIcms);
            expect(_construtor.valorSt).toEqual(_resultadoEsperado.valorSt);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })
    })

    describe('Validação das regras de proteção dos valores informados pelo usuário.', function(){
         it('Passa um valor menor que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            _construtor.base = -1;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            _construtor.base = 0;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            _construtor.base = 1;

            expect(_construtor.validacaoBase()).toBe(true);
        })

        it('Passa um valor menor que zero para a validação do Ipi. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _ipi = -1;

            expect(_construtor.validacaoIpi(_ipi)).toBe(false);
        })

        it('Passa um valor igual a zero para a validação do Ipi. Deve retornar true!', function(){

            var _construtor = new StProprioModel();
            var _ipi = 0;

            expect(_construtor.validacaoIpi(_ipi)).toBe(true);

        })

        it('Passa um valor maior que zero para a validação do Ipi. Deve retornar true!', function(){
            var _construtor = new StProprioModel();
            var _ipi = 101;

            expect(_construtor.validacaoIpi(_ipi)).toBe(true);
        })

        it('Passa um valor menor que zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = -1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor igual zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 0;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de aliquota. Deve retornar true!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 101;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor menor que zero para a validação de aliquota que aceita zero. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = -1;

            expect(_construtor.validacaoAliquotaAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor igual zero para a validação de aliquota que aceita zero. Deve retornar true!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 0;

            expect(_construtor.validacaoAliquotaAceitaZero(_aliquota)).toBe(true);
        })

        it('Passa um valor maior que zero para a validação de aliquota que aceita zero. Deve retornar true!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 1;

            expect(_construtor.validacaoAliquotaAceitaZero(_aliquota)).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota que aceita zero. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            var _aliquota = 101;

            expect(_construtor.validacaoAliquotaAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor menor para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            _construtor.aliquotaInterna = 12;
            _construtor.aliquotaInterestadual = 18;

            expect(_construtor.validacaoAliquotaInterestadual()).toBe(false);
        })

        it('Passa um valor igual para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar false!', function(){
            var _construtor = new StProprioModel();
            _construtor.aliquotaInterna = 12;
            _construtor.aliquotaInterestadual = 12;

            expect(_construtor.validacaoAliquotaInterestadual()).toBe(false);
        })

        it('Passa um valor maior para a aliquotaInterna em relação a aliquotaInterestadual. Deve retornar true!', function(){
            var _construtor = new StProprioModel();
            _construtor.aliquotaInterna = 18;
            _construtor.aliquotaInterestadual = 12;

            expect(_construtor.validacaoAliquotaInterestadual()).toBe(true);
        })
    })
})

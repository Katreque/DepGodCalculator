describe('IcmsbaseRedModel', function(){

    var IcmsbaseRedModel;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        IcmsbaseRedModel = $injector.get('IcmsbaseRedModel');
    }))

    describe('Criação do construtor', function(){
        it('Verifica se o mesmo é criado corretamente', function(){
            var _construtor = new IcmsbaseRedModel();
            var _resultadoEsperado = {base: undefined, aliquota: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};
            
            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquota).toEqual(_resultadoEsperado.aliquota);
            expect(_construtor.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
            expect(_construtor.valor).toEqual(_resultadoEsperado.valor);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })        
    })

    describe('Verifica se a função de validação (IsValid) está de acordo com a regra de negócio!', function(){
        it('Valores positivos. Deve retornar true!', function(){
            var _construtor = new IcmsbaseRedModel();

            _construtor.base = 1000;
            _construtor.aliquota = 1;
            _construtor.aliquotaRed = 1;
            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 100;
            _construtor.aliquota = 100;
            _construtor.aliquotaRed = 100;
            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(true);
        })

        it('valores acima de 100 para aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();

            _construtor.base = 100;
            _construtor.aliquota = 101;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 101;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valor neutro. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();

            _construtor.base = 0;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 100;
            _construtor.aliquota = 0;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 0;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Valores abaixo de zero. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();

            _construtor.base = -1;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 100;
            _construtor.aliquota = -1;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = -1;
            expect(_construtor.isValid()).toBe(false);
        })

        it('Campos vazios. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();

            _construtor.base = "";
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = -1;
            _construtor.aliquota = "";
            _construtor.aliquotaRed = 10;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = -1;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = "";
            expect(_construtor.isValid()).toBe(false);
        })
    })

    describe('Verificação do cálculo', function(){
        it('Verifica se os valores com Base: 100, aliquota: 10, aliquotaRed: 10 calcula corretamente.', function(){
            var _construtor = new IcmsbaseRedModel();
            var _resultadoEsperado = {base: 100, aliquota: 10, aliquotaRed: 10, valor: '9.00', valorDiscriminacao: '9.000'};

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.aliquotaRed = 10;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquota).toEqual(_resultadoEsperado.aliquota);
            expect(_construtor.aliquotaRed).toEqual(_resultadoEsperado.aliquotaRed);
            expect(_construtor.valor).toEqual(_resultadoEsperado.valor);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })            
    })

    describe('Validação das regras de proteção dos valores informados pelo usuário.', function(){
        it('Passa um valor menor que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            _construtor.base = -1;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            _construtor.base = 0;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            _construtor.base = 1;

            expect(_construtor.validacaoBase()).toBe(true);
        })

        it('Passa um valor menor que zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            var _aliquota = -1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            var _aliquota = 0;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de aliquota. Deve retornar true!', function(){
            var _construtor = new IcmsbaseRedModel();
            var _aliquota = 1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsbaseRedModel();
            var _aliquota = 101;

            expect(_construtor.validacaoAliquotaNaoAceitaZero(_aliquota)).toBe(false);
        })
    })
})
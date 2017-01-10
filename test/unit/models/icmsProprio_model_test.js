describe('IcmsproprioModel', function(){

    var _rootscope, _scope, icmsproprioModel;

    beforeEach(module('DEPGod'))

    beforeEach(inject(function($injector){
        IcmsproprioModel = $injector.get('IcmsproprioModel')
    }))

    describe('Criação do construtor', function(){
        it('Verifica se o mesmo é criado corretamente', function(){
            var _construtor = new IcmsproprioModel();
            var _resultadoEsperado = {base: undefined, aliquota: undefined, valor: 0, valorDiscriminacao: 0};
            
            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquota).toEqual(_resultadoEsperado.aliquota);
            expect(_construtor.valor).toEqual(_resultadoEsperado.valor);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })        
    })

    describe('Verificação do cálculo', function(){
        it('Verifica se os valores com Base: 100 e aliquota: 10 calcula corretamente.', function(){
            var _construtor = new IcmsproprioModel();
            var _resultadoEsperado = {base: 100, aliquota: 10, valor: '10.00', valorDiscriminacao: '10.000'};

            _construtor.base = 100;
            _construtor.aliquota = 10;
            _construtor.calcular();

            expect(_construtor.base).toEqual(_resultadoEsperado.base);
            expect(_construtor.aliquota).toEqual(_resultadoEsperado.aliquota);
            expect(_construtor.valor).toEqual(_resultadoEsperado.valor);
            expect(_construtor.valorDiscriminacao).toEqual(_resultadoEsperado.valorDiscriminacao);
        })            
    })

    describe('Verifica se a função de validação (IsValid) está de acordo com a regra de negócio!', function(){
        it('Valores positivos. Deve retornar true!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = 1000;
            _construtor.aliquota = 1;

            expect(_construtor.isValid()).toBe(true);

            _construtor.base = 100;
            _construtor.aliquota = 100;

            expect(_construtor.isValid()).toBe(true);
        })

        it('valores acima de 100 para aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            
            _construtor.aliquota = 101;
             expect(_construtor.isValid()).toBe(false);
        })

        it('Valor neutro. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();

            _construtor.base = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.aliquota = 0;
            expect(_construtor.isValid()).toBe(false);

            _construtor.base = 0;
            _construtor.aliquota = 0;
            expect(_construtor.isValid()).toBe(false);
        })

        it('valores abaixo de zero. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = -1;
            _construtor.aliquota = -1;

            expect(_construtor.isValid()).toBe(false);
        })

        it('Campos vazios. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = "";
            _construtor.aliquota = "";

            expect(_construtor.isValid()).toBe(false);
    
            _construtor.aliquota = "";
            expect(_construtor.isValid()).toBe(false);
            
            _construtor.aliquota = 1;
            expect(_construtor.isValid()).toBe(false);
        })
    })

    describe('Validação das regras de proteção dos valores informados pelo usuário.', function(){
        it('Passa um valor menor que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = -1;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = 0;

            expect(_construtor.validacaoBase()).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de base. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.base = 1;

            expect(_construtor.validacaoBase()).toBe(true);
        })

        it('Passa um valor menor que zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.aliquota = -1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero()).toBe(false);
        })

        it('Passa um valor igual a zero para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.aliquota = 0;

            expect(_construtor.validacaoAliquotaNaoAceitaZero()).toBe(false);
        })

        it('Passa um valor maior que zero para a validação de aliquota. Deve retornar true!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.aliquota = 1;

            expect(_construtor.validacaoAliquotaNaoAceitaZero()).toBe(true);
        })

        it('Passa um valor maior que cem para a validação de aliquota. Deve retornar false!', function(){
            var _construtor = new IcmsproprioModel();
            _construtor.aliquota = 101;

            expect(_construtor.validacaoAliquotaNaoAceitaZero()).toBe(false);
        })
    })
})
const { describe, expect, it } = require('@jest/globals')
const ServicoCalculadora = require("../src/services/calculadora")

const servico = new ServicoCalculadora()

describe('Testes do Somar', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should sum two numbers', () => {

        const result = servico.Somar(1, 2)
        expect(result).toBe(3);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(-3, 8)
        expect(result).toBe(5);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(2, -3)
        expect(result).toBe(-1);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(-2.1, 3.1)
        expect(result).toEqual(1);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(-2.1, 0)
        expect(result).toEqual(-2.1);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(0, -1.5)
        expect(result).toEqual(-1.5);
    })

    it('Should error', () => {

        const result = () => servico.Somar(1, "a")
        expect(result).toThrowError("Favor inserir números");
    })

})

describe('Testes do Subtrair', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(1, 2)
        expect(result).toBe(-1);
    })

    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(1, -2)
        expect(result).toBe(3);
    })

    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(-1, 2)
        expect(result).toBe(-3);
    })

    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(4.5, -5)
        expect(result).toBe(9.5);
    })

    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(-4, 0)
        expect(result).toBe(-4);
    })

    it('Should subtract two numbers', () => {

        const result = servico.Subtrair(0, 6)
        expect(result).toBe(-6);
    })

    it('Should error', () => {

        const result = () => servico.Subtrair("a", 2)
        expect(result).toThrowError("Favor inserir números");
    })
})

describe('Testes do Multiplicar', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(1, 2)
        expect(result).toBe(2);
    })

    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(3, -2)
        expect(result).toBe(-6);
    })

    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(-3, -2)
        expect(result).toBe(6);
    })

    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(3.5, 0)
        expect(result).toBe(0);
    })

    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(0, 3.2)
        expect(result).toBe(0);
    })

    it('Should multiply two numbers', () => {

        const result = servico.Multiplicar(0, 0)
        expect(result).toBe(0);
    })
})

describe('Testes do Dividir', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should divide two numbers', () => {

        const result = servico.Dividir(1, 2)
        expect(result).toBe(0.5);
    })

    it('Should divide two numbers', () => {

        const result = servico.Dividir(4, -2)
        expect(result).toBe(-2);
    })

    it('Should divide two numbers', () => {

        const result = servico.Dividir(-6, 3)
        expect(result).toBe(-2);
    })

    it('Should divide two numbers', () => {

        const result = servico.Dividir(2, 0.5)
        expect(result).toBe(4);
    })
})

describe('Testes da Potencia', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Potenciar numero', () => {

        const result = servico.Potencia(1, 2)
        expect(result).toBe(1);
    })

    it('Potenciar numero', () => {

        const result = servico.Potencia(5, 2)
        expect(result).toBe(25);
    })

    it('Potenciar numero', () => {

        const result = servico.Potencia(2, -2)
        expect(result).toBe(0.25);
    })
})

describe('Testes da Raiz', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should divide two numbers', () => {

        const result = servico.RaizQuadrada(4)
        expect(result).toBe(2);
    })

    it('Should divide two numbers', () => {

        const result = servico.RaizQuadrada(16)
        expect(result).toBe(4);
    })
})


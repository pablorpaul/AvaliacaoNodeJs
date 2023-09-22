class ServicoCalculadora {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 + num2
    }

    Subtrair(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 - num2
    }

    Multiplicar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 * num2
    }

    Dividir(num1, num2){
        if(isNaN(num1) || (isNaN(num2) || num2 == 0)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 / num2
    }

    Potencia(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 ** num2
    }

    RaizQuadrada(num1){
        if(isNaN(num1)){
            throw new Error("Favor inserir números válidos")
        }
        return Math.sqrt(num1)
    }
}

module.exports = ServicoCalculadora
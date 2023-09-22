const ServicoCalculadora = require("../services/calculadora")

const servico = new ServicoCalculadora()

class ControllerCalculadora{

    Calculadora(req, res){
        try {
            var result = 0
            switch (req.body.oper){
                case '+':
                    result = servico.Somar(req.body.num1, req.body.num2)
                    break;
                case '-':
                    result = servico.Subtrair(req.body.num1, req.body.num2)
                    break;
                case '*':
                    result = servico.Multiplicar(req.body.num1, req.body.num2)
                    break;
                case '/':
                    result = servico.Dividir(req.body.num1, req.body.num2)
                    break;
                case '**':
                    result = servico.Potencia(req.body.num1, req.body.num2)
                case '√':
                    result = servico.RaizQuadrada(req.body.num1)
                    break;
                default:
                    throw new Error("Operação inválida")   
            }
            res.status(200).json({
            message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }

    Operacoes(req, res){
        res.status(200).json({
            message: `operacoes: +, -, *, /, **, √`
            })
    }



}

module.exports = ControllerCalculadora
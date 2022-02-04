
function calculator() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n"))
    let resultado

    if (operacao == 1 || operacao == 2 || operacao == 3 || operacao == 4 || operacao == 5 || operacao == 6) {

        let n1 = Number(prompt("Insira o primeiro valor:\n"))
        let n2 = Number(prompt("Insira o segundo valor\n"))


        function soma() {
            resultado = n1 + n2
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao()
        }

        function subtracao() {
            resultado = n1 - n2
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao()
        }

        function multiplicacao() {
            resultado = n1 * n2
            alert(`${n1} x ${n2} = ${resultado}`)
            novaOperacao()
        }

        function divisaoReal() {
            resultado = n1 / n2
            alert(`${n1} ÷ ${n2} = ${resultado}`)
            novaOperacao()
        }

        function divisaoInteira() {
            resultado = n1 % n2
            alert(`O resto da divisão de ${n1} por ${n2} vale ${resultado}`)
            novaOperacao()
        }

        function potenciacao() {
            resultado = n1 ** n2
            alert(`${n1} ** ${n2} = ${resultado}`)
            novaOperacao()
        }



        if (operacao == 1) {
            soma()
        } else if (operacao == 2) {
            subtracao()
        } else if (operacao == 3) {
            multiplicacao()
        } else if (operacao == 4) {
            divisaoReal()
        } else if (operacao == 5) {
            divisaoInteira()
        } else if (operacao == 6) {
            potenciacao()
        }


        function novaOperacao () {
            let opcao = Number(prompt("Deseja realizar outra operação?\n 1 - Sim \n 2 - Não"))

            if (opcao == 1) {
                calculator()
            } else if (opcao == 2) {
                alert(`Até mais!`)
            }

        }


    } else {
        alert("Operação inválida! Recarregue a página!")
        } 

}

calculator()

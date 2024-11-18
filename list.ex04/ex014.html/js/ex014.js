
    function calcular(operacao) {
        
        const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos.";
        } else {
            switch (operacao) {
                case '+':  
    resultado = num1 + num2;
    break;
    case '-': 
    resultado = num1 - num2;
    break;
    case '/':  
    if (num2 !== 0) {  
        resultado = num1 / num2;
                    } else {
        resultado = "Divisão por zero não é permitida.";
                    }
    break;
    case '*': 
    resultado = num1 * num2;
    break;
    default:
    resultado = "Operação inválida.";
            }
        }

    document.getElementById('resultado').innerText = resultado;
    }

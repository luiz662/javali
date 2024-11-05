function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

let valor = parseFloat(prompt("Digite um valor numérico:"));
console.log(formatarMoeda(valor));
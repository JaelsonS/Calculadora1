document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos inputs
    const valor = parseFloat(document.getElementById('valor').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    // Verificando se os valores são válidos
    if (isNaN(valor) || isNaN(porcentagem)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calculando a porcentagem, o desconto e os juros
    const valorPorcentagem = (porcentagem * valor) / 100;
    const valorDesconto = valor - valorPorcentagem;
    const valorJuros = valor + valorPorcentagem;

    // Exibindo os resultados
    document.getElementById('desconto').textContent = `${valor} com ${porcentagem}% de desconto é ${valorDesconto.toFixed(2)}`;
    document.getElementById('juros').textContent = `${valor} com ${porcentagem}% de juros é ${valorJuros.toFixed(2)}`;
});

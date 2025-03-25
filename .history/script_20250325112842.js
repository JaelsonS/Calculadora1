document.getElementById('operation').addEventListener('change', function() {
    const operation = document.getElementById('operation').value;
    const descontoSection = document.getElementById('desconto-section');
    const jurosSection = document.getElementById('juros-section');

    if (operation === 'desconto') {
        descontoSection.style.display = 'block';
        jurosSection.style.display = 'none';
    } else {
        descontoSection.style.display = 'none';
        jurosSection.style.display = 'block';
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    const operation = document.getElementById('operation').value;
    let resultado = '';

    if (operation === 'desconto') {
        const valor = parseFloat(document.getElementById('valor').value);
        const porcentagem = parseFloat(document.getElementById('porcentagem').value);

        if (isNaN(valor) || isNaN(porcentagem)) {
            resultado = 'Por favor, insira valores válidos.';
        } else {
            const valorPorcentagem = (porcentagem * valor) / 100;
            const valorDesconto = valor - valorPorcentagem;
            resultado = `O valor com ${porcentagem}% de desconto é R$ ${valorDesconto.toFixed(2)}`;
        }
    } else if (operation === 'juros') {
        const valorJuros = parseFloat(document.getElementById('valor-juros').value);
        const taxaJuros = parseFloat(document.getElementById('juros-percent').value);
        const tempo = parseFloat(document.getElementById('tempo').value);
        const tipoJuros = document.getElementById('tipo-juros').value;

        if (isNaN(valorJuros) || isNaN(taxaJuros) || isNaN(tempo)) {
            resultado = 'Por favor, insira valores válidos.';
        } else {
            let valorFinal;
            if (tipoJuros === 'simples') {
                valorFinal = valorJuros * (1 + (taxaJuros / 100) * tempo);
            } else if (tipoJuros === 'composto') {
                valorFinal = valorJuros * Math.pow(1 + (taxaJuros / 100), tempo);
            }
            resultado = `O valor final após ${tempo} anos é R$ ${valorFinal.toFixed(2)}`;
        }
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('result').style.display = 'block';
});

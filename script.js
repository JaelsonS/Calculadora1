document.getElementById('calcular-desconto').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);
    
    if (isNaN(valor) || isNaN(porcentagem)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const valorPorcentagem = (porcentagem * valor) / 100;
    const valorDesconto = valor - valorPorcentagem;
    
    const resultado = `O valor com ${porcentagem}% de desconto é R$ ${valorDesconto.toFixed(2)}`;
    document.getElementById('resultado-desconto').textContent = resultado;

    addHistorico('Desconto', `R$ ${valor.toFixed(2)} - ${porcentagem}% -> R$ ${valorDesconto.toFixed(2)}`);
});

document.getElementById('calcular-juros').addEventListener('click', function() {
    const valorJuros = parseFloat(document.getElementById('valor-juros').value);
    const taxaJuros = parseFloat(document.getElementById('juros-percent').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const tipoJuros = document.getElementById('tipo-juros').value;

    if (isNaN(valorJuros) || isNaN(taxaJuros) || isNaN(tempo)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    let valorFinal;
    if (tipoJuros === 'simples') {
        valorFinal = valorJuros * (1 + (taxaJuros / 100) * tempo);
    } else {
        valorFinal = valorJuros * Math.pow(1 + (taxaJuros / 100), tempo);
    }
    
    const resultado = `O valor final após ${tempo} anos é R$ ${valorFinal.toFixed(2)}`;
    document.getElementById('resultado-juros').textContent = resultado;

    addHistorico('Juros', `${tipoJuros} - R$ ${valorJuros.toFixed(2)} - ${taxaJuros}% - ${tempo} anos -> R$ ${valorFinal.toFixed(2)}`);
});

function addHistorico(tipo, resultado) {
    const historicoLista = document.getElementById('historico-lista');
    const li = document.createElement('li');
    li.textContent = `${tipo}: ${resultado}`;
    historicoLista.appendChild(li);
}

document.getElementById('home-menu').addEventListener('click', () => {
    window.scrollTo(0, 0); 
});

document.getElementById('historico-menu').addEventListener('click', () => {
    document.getElementById('historico').scrollIntoView({ behavior: 'smooth' });
});
function setFocusOnEnter(event, nextElementId) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        const nextElement = document.getElementById(nextElementId);
        if (nextElement) {
            nextElement.focus(); 
    }
}

document.getElementById('valor').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'porcentagem');
});

document.getElementById('porcentagem').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'calcular-desconto');
});

document.getElementById('valor-juros').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'juros-percent');
});

document.getElementById('juros-percent').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'tempo');
});

document.getElementById('tempo').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'tipo-juros');
});

document.getElementById('tipo-juros').addEventListener('keydown', function(event) {
    setFocusOnEnter(event, 'calcular-juros');
});

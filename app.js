
function sortear() {
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let de = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);
    let exibirNumero = document.querySelector('#resultado');
    let intervalo = parseInt(ate - de + 1);

    let numerosSorteados = [];

    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        if (quantidade >= intervalo) {
            alert('A quantidade de números sorteados não pode ser menor que o intervalo')
            return;
        } else {
        while (numerosSorteados.includes(numero)) {

             numero = obterNumeroAleatorio(de, ate);

        }
    }
        numerosSorteados.push(numero)
    }

    if (de >= ate) {
        alert('O número digitado em "Do Número" não pode ser maior ou igual ao valor em "até o número"');
        return;
    }

    exibirNumero.innerHTML = `<label id="resultadoTexto" class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.querySelector('#btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {

        botaoReiniciar.classList.replace('container__botao-desabilitado', 'container__botao');

    } else {

        botaoReiniciar.classList.replace('container__botao', 'container__botao-desabilitado');

    }
}

function reiniciar() {
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#resultado').innerHTML = '<label id="resultadoTexto" class="texto__paragrafo">Números sorteados:  Nenhum até agora</label>';
    alterarStatusBotao();
}
let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    console.log('Calculando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(inputDuracao.value) * adultos + (carnePP(inputDuracao.value) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(inputDuracao.value) * adultos;
    let qtdTotalBebeidas = bebidasPP(inputDuracao.value) * adultos + (bebidasPP(inputDuracao.value) / 2 * criancas);


    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebeidas / 2000)} Pet's 2l de Bebida</p>`;

}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 1500;
    }
}
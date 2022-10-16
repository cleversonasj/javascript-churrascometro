let inputAdultos = document.getElementById("adultos");
let inputAdultosNaoBebem = document.getElementById("adultosNaoBebem");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = parseInt(inputAdultos.value);
  let adultosNaoBebem = parseInt(inputAdultosNaoBebem.value);
  let criancas = parseInt(inputCriancas.value);
  let duracao = parseInt(inputDuracao.value);

  let qtdTotalCarne =
    carnePP(duracao) * (adultos + adultosNaoBebem) +
    (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultosNaoBebem + (bebidasPP(duracao) / 2) * criancas;
  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kgs de Carne.</p>`;
  resultado.innerHTML += `<p>${qtdTotalCerveja / 355} Latas de 355ml de Cerveja.</p>`;
  resultado.innerHTML += `<p>${qtdTotalBebidas / 1000} Litros de Refrigerantes.</p>`;
}

function carnePP(duracao) {
  if (duracao >= 4) {
    return 600;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 4) {
    return 2840;
  } else {
    return 1775;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 4) {
    return 2500;
  } else {
    return 1500;
  }
}

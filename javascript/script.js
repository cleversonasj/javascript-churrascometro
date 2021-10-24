let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;
  resultado.innerHTML = `<p class="pIcon">Você vai precisar de: </p>`;
  resultado.innerHTML += `<div><img class="iconImage" src="./images/meat.png" alt="Carne"><p class="pIcon">${
    qtdTotalCarne / 1000
  } Kgs de Carne.</p></div>`;
  resultado.innerHTML += `<div><img class="iconImage" src="./images/beer.png" alt="Cerveja"><p class="pIcon">${
    qtdTotalCerveja / 355
  } Latas de Cerveja (Latas de 355ml).</p></div>`;
  resultado.innerHTML += `<div><img class="iconImage" src="./images/soda.png" alt="Refrigerante"><p class="pIcon">${
    qtdTotalBebidas / 1000
  } Litros de Refrigerantes, Sucos, etc.</p></div>`;
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

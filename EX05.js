let nome;
let cosmoAtual;
let casaAtual = 1;
let statusVida = true;

// BOTÃO INICIAR
document.getElementById("btnComecar").addEventListener("click", () => {
  nome = document.getElementById("nome").value;
  cosmoAtual = +document.getElementById("cosmo").value;

  if (!nome || isNaN(cosmoAtual) || cosmoAtual <= 0) {
    alert("Preencha corretamente!");
    return;
  }

  document.getElementById("entrada").classList.add("hidden");
  document.getElementById("jogo").classList.remove("hidden");

  atualizarTela();
});

// BOTÕES DE DECISÃO
document.getElementById("btnSacrificar").addEventListener("click", () => decisao(true));
document.getElementById("btnNormal").addEventListener("click", () => decisao(false));

function atualizarTela() {
  document.getElementById("status").innerText =
    `${nome} | Cosmo: ${cosmoAtual}`;

  document.getElementById("casa").innerText =
    `🏛️ Casa ${casaAtual} de 12`;
}

function decisao(sacrificar) {
  if (sacrificar) {
    let confirmar = confirm("Deseja sacrificar um sentido?");
    if (confirmar) {
      cosmoAtual *= 2;
    }
  }

  batalha();
}

function batalha() {
  let dano = Math.floor(Math.random() * 200) + 50;

  // USANDO -= conforme enunciado
  cosmoAtual -= dano;

  if (cosmoAtual <= 0) {
    statusVida = false;
    finalizar();
    return;
  }

  casaAtual++;

  if (casaAtual > 12) {
    finalizar();
  } else {
    atualizarTela();
  }
}

function finalizar() {
  document.getElementById("jogo").classList.add("hidden");
  let resultado = document.getElementById("resultado");
  resultado.classList.remove("hidden");

  // VALIDAÇÃO FINAL
  if (cosmoAtual >= 1000 && statusVida === true) {
    resultado.innerHTML =
      `🎉 Parabéns, ${nome}! Você salvou Atena com ${cosmoAtual} de cosmo restante!`;
  } else {
    resultado.innerHTML =
      `💀 ${nome}, você falhou na jornada... Cosmo final: ${cosmoAtual}`;
  }
}
function checar() {
  // Seleciona a alternativa correta do input com name "pergunta1" que está marcado
  const alternativaCorretaP1 = document.querySelector('input[name="pergunta1"]:checked');
  const alternativaCorretaP2 = document.querySelector('input[name="pergunta2"]:checked');
  const alternativaCorretaP3 = document.querySelector('input[name="pergunta3"]:checked');

  let pontos = 0;

  if (alternativaCorretaP1 && alternativaCorretaP1.value === "b") {
    pontos += 1;
    exibirResposta("resposta-p1", "Acertou", "correct");
  } else {
    exibirResposta("resposta-p1", "Errou", "incorrect");
  }
  //  exibirResposta("resposta-p1","Você acertou " + pontos + " de 3 perguntas.");

  if (alternativaCorretaP2 && alternativaCorretaP2.value === "c") {
    pontos += 1;
    exibirResposta("resposta-p2", "Acertou", "correct");
  } else {
    exibirResposta("resposta-p2", "Errou", "incorrect");
  }
  //  exibirResposta("resposta-p2", "Você acertou " + pontos + " de 3 perguntas.");

  if (alternativaCorretaP3 && alternativaCorretaP3.value === "a") {
    pontos += 1;
    exibirResposta("resposta-p3", "Acertou", "correct");
  } else {
    exibirResposta("resposta-p3", "Errou", "incorrect");
  }
  // Exibe a pontuação total
  exibirResposta("total", "Você acertou " + pontos + " de 3 perguntas.");
}

function exibirResposta(elementId, mensagem, classe) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.innerHTML = mensagem;
    if (classe) {
      elemento.className = classe;
    }

    // elemento.style.fontSize = '18px';
    elemento.style.background = '#fff1b2';
    elemento.style.padding = '10px';
    elemento.style.width = '350px';
    elemento.style.borderRadius = '5px';
    elemento.style.textAlign = 'center';
  }
}

function salvarNome() {
  let nomeSalvoInput = document.getElementById('inNome').value;
   
  if (nomeSalvoInput === "") {
    alert("Ops, Digite seu nome.");
  } else {
    document.getElementById("mostrarNome").textContent = "Olá, " + nomeSalvoInput + "!";
  }
  // console.log(nomeSalvoInput);
}


function paginacao(){
  location.href = "/assets/pages/perguntas.html"
}
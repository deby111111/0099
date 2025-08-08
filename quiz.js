// Módulo principal do quiz

import { getPerguntasAleatorias } from "./perguntas.js";

let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;

const perguntasDiv = document.getElementById("perguntas");
const btnProximo = document.getElementById("btnProximo");
const resultadoDiv = document.getElementById("resultado");
const tituloResultado = document.getElementById("tituloResultado");
const textoResultado = document.getElementById("textoResultado");
const btnReiniciar = document.getElementById("btnReiniciar");

// Inicia o quiz
export function iniciarQuiz() {
  perguntas = getPerguntasAleatorias();
  indiceAtual = 0;
  pontuacao = 0;
  resultadoDiv.classList.add("hidden");
  perguntasDiv.innerHTML = "";
  mostrarPergunta(indiceAtual);

  btnProximo.disabled = true;
  btnProximo.onclick = proximaPergunta;
  btnReiniciar.onclick = iniciarQuiz;
}

// Mostra a pergunta atual com opções
function mostrarPergunta(indice) {
  const pergunta = perguntas[indice];
  perguntasDiv.innerHTML = `<h2>${pergunta.texto}</h2>`;
  
  // Cria botões para as opções
  pergunta.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.onclick = () => selecionarOpcao(i);
    perguntasDiv.appendChild(botao);
  });
}

// Ao selecionar uma opção
function selecionarOpcao(i) {
  // Evita múltiplas seleções
  btnProximo.disabled = false;

  const pergunta = perguntas[indiceAtual];
  const impacto = pergunta.opcoes[i].impacto;
  pontuacao += impacto;

  // Marca visualmente a escolha (replace para ajustar texto)
  const botoes = perguntasDiv.querySelectorAll("button");
  for (const botao of botoes) {
    botao.disabled = true; // trava botões depois de escolher
  }
  botoes[i].style.backgroundColor = "#4CAF50";
}

// Próxima pergunta ou finaliza
function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta(indiceAtual);
    btnProximo.disabled = true;
  } else {
    mostrarResultado();
  }
}

// Mostra resultado com condicional simples
function mostrarResultado() {
  perguntasDiv.innerHTML = "";
  btnProximo.disabled = true;

  resultadoDiv.classList.remove("hidden");
  if (pontuacao > 15) {
    tituloResultado.textContent = "🌟 Parabéns! Você está salvando o planeta!";
    textoResultado.textContent = "Suas escolhas foram muito conscientes e positivas para o futuro da Terra.";
  } else if (pontuacao >= 5) {
    tituloResultado.textContent = "🙂 Quase lá!";
    textoResultado.textContent = "Você tem boas ideias, mas pode melhorar sua contribuição para o planeta.";
  } else {
    tituloResultado.textContent = "⚠️ Atenção!";
    textoResultado.textContent = "Suas escolhas indicam que o planeta pode sofrer sérios problemas se não mudar.";
  }
}
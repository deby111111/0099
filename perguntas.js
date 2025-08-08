// Perguntas com opções
// Exporta as perguntas embaralhadas (aleatoriedade)

const perguntasOriginais = [
  {
    texto: "O que você faz com a comida do planeta?",
    opcoes: [
      { texto: "Uso só o necessário e evito desperdício", impacto: 10 },
      { texto: "Desperdiço bastante, não ligo", impacto: -10 },
      { texto: "Tento reciclar e reaproveitar", impacto: 5 }
    ]
  },
  {
    texto: "Qual prioridade na escola você escolheria?",
    opcoes: [
      { texto: "Ensinar sustentabilidade", impacto: 10 },
      { texto: "Mais tecnologia e robôs", impacto: 0 },
      { texto: "Mais atividades esportivas", impacto: 5 }
    ]
  },
  {
    texto: "Como você cuida da natureza?",
    opcoes: [
      { texto: "Planto árvores e cuido dos rios", impacto: 10 },
      { texto: "Não me preocupo muito", impacto: -10 },
      { texto: "Faço campanhas de conscientização", impacto: 5 }
    ]
  }
];

// Função para embaralhar array (aleatoriedade)
function embaralhar(array) {
  let novoArray = [...array];
  for (let i = novoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
  }
  return novoArray;
}

// Exporta perguntas embaralhadas
export function getPerguntasAleatorias() {
  return embaralhar(perguntasOriginais);
}

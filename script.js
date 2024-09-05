const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Estilo e Preferências no Ambiente de Trabalho?",
        alternativas: [
      {
       texto: "Comunicação Formal e Estruturada",
         afirmacao: "A comunicação formal e estruturada ajuda a garantir que todas as informações sejam claras e documentadas, minimizando mal-entendidos."
     },
         {
           texto: "Comunicação Informal e Direta",
         afirmacao: "A comunicação informal e direta permite resolver questões rapidamente e mantém o ambiente de trabalho mais descontraído e acessível."
         }
           
        ]
    },
    {
        enunciado: "Como você se sente sobre mudanças de prioridade no trabalho?",
        alternativas: [
            {
                texto: "Planejamento e Ajustes",
                afirmacao: "Planejar com antecedência e ajustar o trabalho conforme as mudanças ajuda a manter a organização e a eficiência, mesmo com novos desafios."
            },
            {
                texto: "Adaptação Rápida",
                afirmacao: "Adaptar-se rapidamente às mudanças de prioridade permite agir de forma ágil e flexível, lidando com novas demandas de maneira eficiente."
            }
           
        ]
    },
    {
        enunciado: " Qual é a sua abordagem para a tomada de decisões no trabalho?",
        alternativas: [
            {
                texto: "Decisões Baseadas em Dados",
                afirmacao:"Tomar decisões baseadas em dados e análises detalhadas assegura que as escolhas sejam informadas e que os riscos sejam minimizados."
            },
            {
                texto: "Decisões Intuitivas",
                afirmacao:"Tomar decisões com base na intuição e na experiência permite agir de forma mais ágil e criativa, especialmente em situações dinâmicas."
            }
        ]
    }
];

let atual = 0;
let perguntaAnual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
     for (const alternativa of perguntaAtual.enunciado) {
        const botaoAlternativa = document.createElent("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>
        respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
     }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    atual++
    mostraPergunta();
}
function mostraResultado (){
     caixaoPerguntas.textContent = "Resumindo...";
     textoResultado.textContent = historiaFinal;
     caixaAlternativas.textContent = "";
}
mostraPergunta ();
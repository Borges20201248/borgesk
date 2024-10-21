const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual atividade você prefere para relaxar ?",
        alternativas: [
            {
                texto: " Ler um livro",
                afirmacao: "Ler pode ser uma ótima forma de escapar para outros mundos e enriquecer o conhecimento."
            },
            {
                texto: "Ouvir música",
                afirmacao: "A música tem o poder de acalmar a mente e criar uma atmosfera agradável."
            }
        ]
    },
    {
        enunciado: "Se tivesse que escolher um destino de viagem, você escolheria",
        alternativas: [
            {
                texto: "Praia",
                afirmacao: "A praia oferece sol, mar e a oportunidade de relaxar à beira d'água."
            },
            {
                texto: "Montanha",
                afirmacao: "As montanhas proporcionam um contato incrível com a natureza e vistas deslumbrantes."
            }
        ]
    },
    {
        enunciado: "Sobre alimentação, você prefere",
        alternativas: [
            {
                texto: " Comida salgada",
                afirmacao: "Pratos salgados costumam ser mais variados e podem ser muito saborosos."
            },
            {
                texto: " Comida doce ",
                afirmacao: "Sobremesas doces são uma forma deliciosa de finalizar uma refeição e satisfazer o paladar."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

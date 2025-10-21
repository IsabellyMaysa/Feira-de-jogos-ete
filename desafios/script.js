/*<!--
PROJETO TOTALMENTE ESTUDANTIL FEITO PARA FEIRA DE JOGOS DO ETE
# 
#Se voce é alguem olhando o codigo fonte, não faça algo que quebre o codigo e faça voce ter vantagem no 
#ranking ou algo assim, não é legal nem justo!
#DESENVOLVIDO POR John 1 TDS "A" ESCOLA TECNICA ESTADUAL DE PALMARES
# DATA DE CRIAÇÃO: 24/05/2024
# DATA DA ULTIMA MODIFICAÇÃO: 09/06/2024
# OUTROS PROJETOS EM: https://github.com/JohnJohn081
# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀       ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌               ▐░▌     ▐░▌                    ▐░▌     ▐░▌       ▐░▌▐░▌          
#▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌          ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀           ▐░▌     ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
#▐░▌               ▐░▌     ▐░▌                    ▐░▌     ▐░▌       ▐░▌          ▐░▌
#▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄           ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌          ▐░▌     ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀            ▀       ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  

-->*/

const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option-btn');
const timerElement = document.getElementById('timer');
const timerProgress = document.querySelector('.timer-progress');
const timerText = document.querySelector('.timer-text');
const hintElement = document.getElementById('hint');
const name = localStorage.getItem('userName');
const userClass = localStorage.getItem('turmaUser');
let acessoPag = localStorage.getItem('acessoPag', 'true') === 'true'; // dá o acesso para pagina1
let respondeu = false; 
let score = parseInt(localStorage.getItem('userScore')) || 0;
let timer; // Variável para armazenar o timer
let timeLeft = 60; // 1 minuto para cada pergunta
let dicas = 3; // quantidade de dicas
let usouDica = 'false'; // variavel utilizado na função getHint(Dica)


// Respostas do quiz e o sistema que carrega ele, facilmente acessado pelo Aluno caso tenha conhecimento necessario para tal ato
const questions = [
    {
        question: "Qual é a unidade de temperatura no Sistema Internacional (SI)?",
        options: ["A) Celsius", "B) Kelvin", "C) Fahrenheit", "D) Joule"],
        answer: "B",
        hint: "É a escala absoluta de temperatura."
    },
    {
        question: "Qual é o valor do zero absoluto em Kelvin?",
        options: ["A) 0 K", "B) 273 K", "C) -273 K", "D) 100 K"],
        answer: "A",
        hint: "É o ponto onde as partículas têm energia mínima."
    },
    {
        question: "Quanto vale 0 °C em Kelvin?",
        options: ["A) 0 K", "B) 100 K", "C) 273 K", "D) 373 K"],
        answer: "C",
        hint: "Basta somar 273 à temperatura em Celsius."
    },
    {
        question: "Quanto vale 100 °C em Kelvin?",
        options: ["A) 100 K", "B) 273 K", "C) 300 K", "D) 373 K"],
        answer: "D",
        hint: "É o ponto de ebulição da água em Kelvin."
    },
    {
        question: "Qual é o ponto de fusão da água em Celsius?",
        options: ["A) 0 °C", "B) 50 °C", "C) 100 °C", "D) -273 °C"],
        answer: "A",
        hint: "É quando o gelo começa a derreter."
    },
    {
        question: "Qual é o ponto de ebulição da água em Celsius ao nível do mar?",
        options: ["A) 0 °C", "B) 50 °C", "C) 100 °C", "D) 200 °C"],
        answer: "C",
        hint: "É a temperatura onde a água vira vapor."
    },
    {
        question: "Qual escala de temperatura é mais usada nos Estados Unidos?",
        options: ["A) Kelvin", "B) Celsius", "C) Fahrenheit", "D) Rankine"],
        answer: "C",
        hint: "O ponto de congelamento da água nela é 32°."
    },
    {
        question: "Qual é a fórmula para converter de Celsius para Kelvin?",
        options: ["A) K = °C - 273", "B) K = °C + 273", "C) K = °C × 273", "D) K = °C ÷ 273"],
        answer: "B",
        hint: "É uma soma simples com 273."
    },
    {
        question: "Qual é a fórmula para converter de Celsius para Fahrenheit?",
        options: ["A) °F = (°C × 9/5) + 32", "B) °F = (°C × 5/9) + 32", "C) °F = (°C × 9/5) - 32", "D) °F = °C + 273"],
        answer: "A",
        hint: "Multiplica por 9, divide por 5 e soma 32."
    },
    {
        question: "Qual é a fórmula para converter de Fahrenheit para Celsius?",
        options: ["A) °C = (°F - 32) × 5/9", "B) °C = (°F + 32) × 5/9", "C) °C = (°F - 32) × 9/5", "D) °C = °F × 273"],
        answer: "A",
        hint: "Primeiro subtrai 32, depois multiplica por 5/9."
    },
    {
        question: "O que acontece com a energia cinética das partículas ao aumentar a temperatura?",
        options: ["A) Diminui", "B) Aumenta", "C) Fica constante", "D) Desaparece"],
        answer: "B",
        hint: "Temperatura é proporcional à energia cinética."
    },
    {
        question: "Qual é a relação entre temperatura e agitação molecular?",
        options: ["A) Quanto maior a temperatura, menor a agitação", "B) Temperatura não afeta a agitação", "C) Quanto maior a temperatura, maior a agitação", "D) A agitação só depende da pressão"],
        answer: "C",
        hint: "As moléculas se movem mais rápido quando a temperatura sobe."
    },
    {
        question: "Em qual escala o zero absoluto é representado por 0?",
        options: ["A) Celsius", "B) Kelvin", "C) Fahrenheit", "D) Nenhuma"],
        answer: "B",
        hint: "É por isso que essa escala é usada em ciências."
    },
    {
        question: "Se uma substância está a 300 K, qual sua temperatura em °C?",
        options: ["A) 300 °C", "B) 27 °C", "C) -27 °C", "D) 573 °C"],
        answer: "B",
        hint: "Basta subtrair 273 para converter para Celsius."
    },
    {
        question: "Qual dessas grandezas é diretamente proporcional à temperatura absoluta?",
        options: ["A) Pressão de um gás em volume constante", "B) Massa do gás", "C) Comprimento de uma régua", "D) Energia potencial gravitacional"],
        answer: "A",
        hint: "Lei de Gay-Lussac relaciona pressão e temperatura."
    }
];


let currentQuestionIndex = 0;

// Função que carrega a proxima pergunta
function loadQuestion() {
    respondeu = false; 
    timeLeft = 60; // Reinicia o tempo
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    hintElement.textContent = "";
    

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    startTimer();
}

// Função para atualizar o cronômetro visual
function updateTimerVisual() {
    // Atualiza o texto
    timerElement.textContent = timeLeft;
    
    // Calcula a porcentagem do tempo restante
    const percentage = (timeLeft / 60) * 100;
    
    // Atualiza a barra de progresso
    timerProgress.style.strokeDashoffset = 100 - percentage;
    
    // Muda a cor conforme o tempo passa
    if (timeLeft > 30) {
        timerProgress.style.stroke = "#4CAF50"; // Verde
        timerText.classList.remove('timer-warning');
    } else if (timeLeft > 10) {
        timerProgress.style.stroke = "#FF9800"; // Laranja
        timerText.classList.remove('timer-warning');
    } else {
        timerProgress.style.stroke = "#F44336"; // Vermelho
        timerText.classList.add('timer-warning');
    }
}

// Função para iniciar e atualizar o cronômetro a cada segundo
function startTimer() {
    clearInterval(timer);
    updateTimerVisual();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerVisual();
        if (timeLeft <= 0) {
            clearInterval(timer);
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                    
                } else {
                    localStorage.setItem('acessoPag', 'false');
                    addToRanking(name, userClass, score);
                    mostrarNotificacao("Pontuação registrada com Sucesso!");
                }
            }, 2000);
        }
    }, 1000);
}

// função que verifica se a resposta é certa ou não
function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = document.querySelector('.option-btn:hover');
    clearInterval(timer); // Para o cronômetro quando uma resposta é verificada

    if (!respondeu) { 
        respondeu = true; 

        if (answer === currentQuestion.answer) {
            selectedOption.classList.add('correto');
            score += 1; // Adiciona pontos se a resposta estiver correta
            usouDica = 'false';
            efeitoAcerto(); // 🎉 efeito visual de acerto
        } else {
            selectedOption.classList.add('errado');
            usouDica = 'false';
            efeitoErro(); // ❌ efeito visual de erro
        }

        localStorage.setItem('userScore', score); 

        setTimeout(() => {
            selectedOption.classList.remove('correto', 'errado');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // chama a função que carrega a proxima pergunta
                mostrarNotificacao(currentQuestionIndex + "/15")                
            } else {
                localStorage.setItem('acessoPag', 'false');
                addToRanking(name, userClass, score);
            }
        }, 1200);
    }
}

// 🎇 EFEITO DE ACERTO – Confetes coloridos explodindo na tela
function efeitoAcerto() {
    for (let i = 0; i < 25; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confettiFx");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        confetti.style.animationDuration = 2 + Math.random() * 1 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}

// ❌ EFEITO DE ERRO – Um grande "X" vermelho piscando
function efeitoErro() {
    const erroX = document.createElement("div");
    erroX.classList.add("erroFx");
    erroX.textContent = "❌";
    document.body.appendChild(erroX);

    setTimeout(() => {
        erroX.remove();
    }, 800);
}


// não utilize "/" dentro do seu userName pois isso vai causar um erro de document no firebase!
// função pra adicionar o User e seu Score na firebase. 
function addToRanking(name, userClass, score) {
    mostrarNotificacao("Pontuação registrada com Sucesso!");
    localStorage.setItem('userName', name);
    localStorage.setItem('turmaUser', userClass);
    localStorage.setItem('acessoPag', 'false')
    window.location.href = '/../finalPage/home.html'; 
}    

function mostrarNotificacao(mensagem) {
    const notificacao = document.getElementById('notification');
    notificacao.innerText = mensagem;
    notificacao.className = 'notification show';
    setTimeout(() => {
        notificacao.className = notificacao.className.replace('show', '');
    }, 3000);
}


// função para dicas ()
function getHint() {
    if (usouDica === 'false'){
         if (dicas > 0){
            const currentQuestion = questions[currentQuestionIndex];
            hintElement.textContent = currentQuestion.hint; // Exibe a dica
            usouDica = 'true'; // variavel pra ele não flodar dica e perder todas as dicas
            dicas -= 1; // variavel dica sendo modificada para o valor atual
            mostrarNotificacao('Dicas' + dicas + '/3') 
            localStorage.setItem('userScore', score); // Atualiza o score no localStorage      
        }
        else{
            mostrarNotificacao("Voce já utilizou todas as dicas");
        }
    }
    else{
        console.log('voce ja utilizou dica');
    }
}


// verificação basica verificar acesso que só é consedido após o usuario clicar no botão iniciar submitBtn
if (!acessoPag) {
    alert('Usuario já respondeu a pergunta, clique em OK para iniciar o quiz');
    window.location.href = '/../../index.html'; 
} else {
    options.forEach(option => {
        option.addEventListener('click', () => {
            if (!respondeu) { 
                checkAnswer(option.textContent.charAt(0)); 
                respondeu = true; 
            }
        });
    });  

    loadQuestion();
}

window.onload = localStorage.setItem('userScore', 0), score = 0; // Atualiza o score no localStorage
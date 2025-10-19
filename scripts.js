/*<!--
PROJETO TOTALMENTE ESTUDANTIL FEITO PARA FEIRA DE JOGOS DO ETE
# 
#INFORMAÇÕES UTIES: O site tem um sistema de segurança basico, utiliza meios do navegador para bloquear o acesso de algumas pagina antes da hora
#Se voce é alguem olhando o codigo fonte esse texto, não faça algo que quebre o codigo
#DESENVOLVIDO POR John 1 TDS "A" ESCOLA TECNICA ESTADUAL DE PALMARES (Segundo tds "a")
# DATA DE CRIAÇÃO: 24/05/2024
# DATA DA ULTIMA MODIFICAÇÃO: 05/10/2025
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

// Adiciona um eventListener no botão submitBtn
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value.trim(); // Remove espaços em branco nas extremidades
    const userClass = document.getElementById('class').value;

    console.log('Nome:', name);
    console.log('Classe:', userClass);
    if (name === "") {
        name = "aluno sem nome1";
        console.log('Nome vazio ou espaço, definindo como:', name);
    }
    salvaDataUser(name, userClass); // Chama a função com os parâmetros atualizados
    localStorage.setItem('acessoPag', 'true'); // Dá o acesso para a página 1

    setTimeout(() => {
        window.location.href = '/desafios/desafios.html';
    }, 1000);
});



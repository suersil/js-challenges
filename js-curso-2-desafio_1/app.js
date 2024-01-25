let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole(){
    console.log('O botão foi clicado');
}

function exibirAlerta(){
    alert('Eu amo JS');
}

function exibirPrompt(){
    let cidade = prompt('Escreva o nome de uma cidade do Brasil');
    alert (`Estive em ${cidade} e lembrei de voce!`);
}

function somando(){
    let num1 = parseInt(prompt('Escolha um número'));
    let num2 = parseInt(prompt('Escolha mais um número'));
    let soma = num1 + num2;
    alert (`A soma dos dois números que voce escolheu é: ${soma}`);
}
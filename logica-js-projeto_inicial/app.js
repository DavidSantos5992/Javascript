alert('Boas vindas ao jogo do número secreto');
let variaN = 10
let numeroSecreto = parseInt(Math.random() * variaN);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e ' + variaN);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('Número secreto é menor ' + chute);
        } else if (numeroSecreto < chute) {
            alert('Número secreto é maior que ' + chute);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Voce acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


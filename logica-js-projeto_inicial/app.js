alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1)
console.log(`o numero secreto é ${numeroSecreto}`);
let chute;
let tentativas = 0;
let codigo = 0;

while (chute != numeroSecreto) {
    tentativas++;
    chute = prompt("Escolha um número entre 1 e 100");
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (numeroSecreto > chute) {
            alert(`Burro! Dica: o numero é MAIOR que ${chute}`);
        }
        else {
            alert(`Burro! Dica: o numero é MENOR que ${chute}`);
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Boa, o número era ${numeroSecreto} e você advinhou com ${tentativas} ${palavraTentativa}`);

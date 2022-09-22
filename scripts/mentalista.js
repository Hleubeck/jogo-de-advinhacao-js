var numeroSecreto = parseInt(Math.random() * 10);
var tentativa = 2;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativa !== 0) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Você acertou. Parabéns!";
    } else if (chute < numeroSecreto && chute >= 0 && chute < 11) {
      tentativa--;
      resultado.innerHTML = `Quase lá! O número secreto é maior que ${chute}. Você ainda tem ${
        tentativa + 1
      } tentativas.`;
      console.log(chute);
    } else if (chute > numeroSecreto && chute >= 0 && chute < 11) {
      tentativa--;
      resultado.innerHTML = `Quase lá! O núnero secreto é menor que ${chute}. Você ainda tem ${
        tentativa + 1
      } chances.`;
    } else {
      resultado.innerHTML = "Não mesmo, o número está entre 1 e 10.";
    }
  } else {
    resultado.innerHTML = `Você perdeu! O número era ${numeroSecreto}.`;
  }
}

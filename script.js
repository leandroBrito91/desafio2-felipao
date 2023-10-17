var resultado = verificaSaldo(20,2);
var resRank = nivel(resultado);

console.log(resultado + resRank);

function verificaSaldo(vitoria, derrota) {
  let saldo = vitoria - derrota;
  return(saldo);
}

function nivel() {
  let rank;
 
  if (resultado < 10) {
    rank = "Ferro";

  }else if(resultado >= 11 && resultado <= 20){
    rank = "Bronze";

  }else if(resultado >= 21 && resultado <= 50){
    rank = "Prata";

  }else if(resultado >= 51 && resultado <= 80){
    rank = "Ouro";

  }else if(resultado >= 81 && resultado <= 90){
    rank = "Diamente";

  }else if(resultado >= 91 && resultado <= 100){
    rank = "Lendário";

  }else if(resultado >= 101){
    rank = "Imortal";

  }
  return(rank);
}
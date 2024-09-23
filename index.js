function calculadoraSaldoRankeadas ( vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias <= 10){
        nivel = "Ferro";
    } else if (vitorias >= 11 && <=20){
        nivel = "Bronze";
        } else if (vitorias >= 21 && <= 50){
            nivel = "Prata";
            } else if (vitorias >= 51 && <=80){
                nivel = "Ouro";
                } else if (vitorias >= 81 && <= 90){
                    nivel = "Diamante";
                    } else if (vitorias >= 91 && <= 100){
                        nivel = "Lendário";
                        } else if (vitorias >= 101){
                            nivel =  "Imortal";

                        }

    return " O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}."

}

let vitorias = 45; 
let derrotas = 20;

console.log (calculadoraSaldoRankeadas(vitorias, derrotas));

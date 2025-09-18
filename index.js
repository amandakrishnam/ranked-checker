function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function calcularNivel(vitorias){
    let nivel;
    if (vitorias <= 10){
        nivel = "Ferro";
    }else if (vitorias > 10 && vitorias <= 20){
        nivel = "Bronze";
    }else if (vitorias > 20 && vitorias <= 50){
        nivel = "Prata";
    }else if (vitorias > 50 && vitorias <= 80){
        nivel = "Ouro";
    }else if (vitorias > 80 && vitorias <= 90){
        nivel = "Diamante";
    }else if (vitorias > 90 && vitorias <= 100){
        nivel = "Lendário";
    }else{
        nivel = "Imortal";
    }
    return nivel;
}

function exibirResultado(){
    let vitorias = parseInt(document.getElementById("vitorias").value);
    let derrotas = parseInt(document.getElementById("derrotas").value);

    const saldoFinal = calcularSaldo(vitorias, derrotas);
    const nivelFinal = calcularNivel(vitorias);

    let resultado = document.getElementById("resultado");
    resultado.innerText = `O Herói tem de saldo de ${saldoFinal} e está no nível de ${nivelFinal}`;
}

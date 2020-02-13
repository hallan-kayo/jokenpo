function jogadaComputador(){
    var numeroGerado= Math.floor(Math.random()*3+1)
    if(numeroGerado==1){
        document.getElementById("imagemComputador").src="_img/papel.png"
        document.getElementById("imagemComputador").name = "papel"
    }else if(numeroGerado==2){
        document.getElementById("imagemComputador").src="_img/pedra.png"
        document.getElementById("imagemComputador").name = "pedra"
    }else if(numeroGerado==3){
        document.getElementById("imagemComputador").src = "_img/tesoura.png"
        document.getElementById("imagemComputador").name = "tesoura"
    }
}

function alterneImagemParaPapel(){

    document.getElementById("imagemPlayer").src="_img/papel.png"
    document.getElementById("imagemPlayer").name = "papel"
}

function alterneImagemParaPedra(){
    document.getElementById("imagemPlayer").src="_img/pedra.png"
    document.getElementById("imagemPlayer").name = "pedra"
}

function alterneImagemParaTesoura(){
    document.getElementById("imagemPlayer").src="_img/tesoura.png"
    document.getElementById("imagemPlayer").name = "tesoura"
}

function verifyWinner(){
    if(document.getElementById("imagemPlayer").name == ""){
        alert("escolha uma opção válida")
        document.getElementById("imagemComputador").src = ""
    }
    if (document.getElementById("imagemPlayer").name == "pedra") {

        if (document.getElementById("imagemComputador").name == 'pedra') {
            alert("empate")
        } else if (document.getElementById("imagemComputador").name == 'papel') {
            alert("vencedor: computador")
        } else if (document.getElementById("imagemComputador").name == 'tesoura') {
            alert("vencedor: player1")
        }

    } else if (document.getElementById("imagemPlayer").name == "papel") {

        if (document.getElementById("imagemComputador").name == 'pedra') {
            alert("vencedor: player1")
        } else if (document.getElementById("imagemComputador").name == 'papel') {
            alert('empate')
        } else if (document.getElementById("imagemComputador").name == 'tesoura') {
            alert("vencedor: computador")
        }

    } else if (document.getElementById("imagemPlayer").name == "tesoura") {

        if (document.getElementById("imagemComputador").name == 'pedra') {
            alert("vencedor: computador")
        } else if (document.getElementById("imagemComputador").name == 'papel') {
            alert("vencedor: player1")
        } else if (document.getElementById("imagemComputador").name == 'tesoura') {
            alert("empate")
        }
    }
}
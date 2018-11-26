$(document).ready(function(){
  $('#dado').on('click',tirarUno);
  $('#dado2').on('click',tirarDos)
})

class dado{
    constructor(actual){
        this.celdaActual = actual; 
    }
    tirarDado(){
        var random = Math.round(Math.random() * (6 - 1)) + 1 ;
        return random;
    }
    getceldaActual(){
        return this.celdaActual;
    }
    setCeldaActual(nuevaCelda){
        this.celdaActual = nuevaCelda;
    }
}
var dadoUno = new dado(1);
var dadoDos = new dado(1);
function tirarUno(){
    var num = dadoUno.tirarDado();
    this.innerHTML = num;
    dadoUno.setCeldaActual(dadoUno.getceldaActual()+num);
    let classe = '.tablero__celda--'+dadoUno.getceldaActual();
    $('#ficha1').appendTo($(classe))
    casellaEspecial(dadoUno.getceldaActual());
}
function tirarDos(){
    var num = dadoDos.tirarDado();
    this.innerHTML = num;
    dadoDos.setCeldaActual(dadoDos.getceldaActual()+num);
    let classe = '.tablero__celda--'+dadoDos.getceldaActual();
    $('#ficha2').appendTo($(classe))
}

function casellaEspecial(celda){
    if(
        celda == 5 ||
        celda == 9 ||
        celda == 14 ||
        celda == 18 ||
        celda == 23 ||
        celda == 27 ||
        celda == 32 ||
        celda == 36 ||
        celda == 41 ||
        celda == 44 ||
        celda == 45 ||
        celda == 54 ||
        celda == 50 ||
        celda == 59
        ){
            alert("Has caigut a la oca, TORNA A TIRAR!!")
        }
    else if(
        celda == 6 ||
        celda == 42
        ){
            
        }
    else if(celda == 19){

    }else if(celda == 52){

    }else if(celda == 58){
        
    }
}
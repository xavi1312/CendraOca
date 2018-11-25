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
}
function tirarDos(){
    var num = dadoDos.tirarDado();
    this.innerHTML = num;
    dadoDos.setCeldaActual(dadoDos.getceldaActual()+num);
    let classe = '.tablero__celda--'+dadoDos.getceldaActual();
    $('#ficha2').appendTo($(classe))
}
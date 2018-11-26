$(document).ready(function(){
  $('#dado').on('click',nuevoTurno);
})

class jugador{
    constructor(actual){
        this.celdaActual = actual; 
        this.penalizado = 0;
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

    getPenalizado(){
        return this.penalizado;
    }
    setPenalizado(penalizado){
        this.penalizado += penalizado;
    }
}
var jugadorUno = new jugador(1);
var jugadorDos = new jugador(1);
var turnoJugadorUno = true;

function nuevoTurno(){
    var turno = jugadorUno;
    var ficha = "#ficha1";
    if(!turnoJugadorUno){
        turno = jugadorDos;
        ficha = "#ficha2";
    }
    tirar(turno, ficha);
}
function tirar(jugador, ficha){
    var numRan = jugador.tirarDado();
    $("#dado").text(numRan);
    
    mover(ficha, jugador,numRan);
    celdaEspecial(ficha,jugador);
    
}
function mover(ficha,jugador, fin){
    const ultimaCelda = 63;
    var numero;
    if(jugador.getceldaActual()+fin > ultimaCelda){
        fin = (jugador.getceldaActual()+fin) - ultimaCelda;
    }
    for(let i=1; i<=fin;
        i++
    ){
        numero = + (Number.parseInt(jugador.getceldaActual())+i);
        
        $(ficha).appendTo($('.tablero__celda--'+numero));
    }
    console.log(numero);
    jugador.setCeldaActual(numero)
}
function celdaEspecial(ficha,jugador){
    var celda = jugador.getceldaActual();
    switch(celda){
        case 5 : mover(ficha, jugador,4);  break;
        case 14: mover(ficha, jugador,4);  break;
        case 23: mover(ficha, jugador,4);  break;
        case 32: mover(ficha, jugador,4);  break;
        case 41: mover(ficha, jugador,4);  break;
        case 50: mover(ficha, jugador,4);  break;

        case 9 : mover(ficha, jugador,5);  break;
        case 18: mover(ficha, jugador,5);  break;
        case 27: mover(ficha, jugador,5);  break;
        case 36: mover(ficha, jugador,5);  break;
        case 45: mover(ficha, jugador,5);  break;
        case 54: mover(ficha, jugador,5);  break;

        case 6 : mover(ficha, jugador,13); break;

        case 12: mover(ficha, jugador,7);  break;

        case 52: ; break;

        case 58: ; break;
    }
}
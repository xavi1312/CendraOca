$(document).ready(function(){
  $('#dado').on('click',nuevoTurno);
})

class jugador{
    constructor(actual){
        this.celdaActual = actual; 
        this.penalizado = false;
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
        this.penalizado = penalizado;
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
    const ultimaCalda = 63;
    var numRan = jugador.tirarDado();
    $("#dado").text(numRan);

    mover(ficha, jugador.getceldaActual(), numRan)
    
}
function mover(ficha,inicio, fin){
    for(let i=inicio; i<=fin; i++){
        $(ficha).appendTo($('.tablero__celda--'+i));
    }
}
function casellaEspecial(ficha,celda, objeto){
    turnoJugadorUno = false;
    if(
        celda == 5 ||  
        celda == 14 ||
        celda == 23 ||
        celda == 32 ||
        celda == 41 ||
        celda == 50
        ){
            objeto.setCeldaActual(celda+4);
            mover(ficha, celda+4);
            turnoJugadorUno = true;
        }
    else if(
        celda == 9  ||
        celda == 18 ||
        celda == 27 ||
        celda == 36 ||
        celda == 45 ||
        celda == 54
    ){
        objeto.setCeldaActual(celda+5);
        mover(ficha, celda+5);
        turnoJugadorUno = true;
    }
    else if(
        celda == 6 ||
        celda == 12
        ){
            objeto.setCeldaActual(19);
            mover(ficha, 19);
        }
    else if(celda == 52){

    }else if(celda == 58){
        mover(ficha, 1)
    }
}
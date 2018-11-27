$(document).ready(function() {
  $("#dado").on("click", nuevoTurno);
  $("#in").on("click", miInterval);
});

class jugador {
  constructor(actual) {
    this.celdaActual = actual;
    this.penalizado = 0;
  }
  tirarDado() {
    var random = Math.round(Math.random() * (6 - 1)) + 1;
    return random;
  }
  getceldaActual() {
    return this.celdaActual;
  }
  setCeldaActual(nuevaCelda) {
    this.celdaActual = nuevaCelda;
  }

  getPenalizado() {
    return this.penalizado;
  }
  setPenalizado(penalizado) {
    this.penalizado += penalizado;
  }
}
var jugadorUno = new jugador(1);
var jugadorDos = new jugador(1);
var turnoJugadorUno = true;
var miInterval;
var limite;


function nuevoTurno() {
  var turno = jugadorUno;
  var ficha = "#ficha1";
  if (!turnoJugadorUno) {
    turno = jugadorDos;
    ficha = "#ficha2";
  }
  tirar(turno, ficha);
}
function tirar(jugador, ficha) {
  var numRan = jugador.tirarDado();
  $("#dado").text(numRan);

  mover(ficha, jugador, numRan);
  celdaEspecial(ficha, jugador);
}
function mover(ficha, jugador, fin) {
    var atras = false;
    const ultimaCelda = 63;
    var finAtras = 0;
    if(jugador.getceldaActual()+fin > ultimaCelda){
        finAtras = (jugador.getceldaActual() + fin) - ultimaCelda;
        fin = fin - finAtras;
        atras = true;
    }
    
    limite = Number.parseInt(jugador.getceldaActual()) + fin;
    miInterval = setInterval(moverDelante(ficha, jugador, fin),1000);
    if(atras){
    moverAtras(ficha, jugador, finAtras);
  }
}
function moverDelante(ficha, jugador, fin) {
    var numero = (Number.parseInt(jugador.getceldaActual()) + 1);

    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);
    
    if(jugador.getceldaActual() == limite){clearInterval(miInterval)}
/*for (let i = 0; i < fin; i++) {
    var numero = +(Number.parseInt(jugador.getceldaActual()) + 1);

    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);
    console.log(numero);
  }*/
}
function moverAtras(ficha, jugador, finAtras) {
  console.log(finAtras);
  for (let i = finAtras; i > 0; i--) {
    var numero = (Number.parseInt(jugador.getceldaActual()) - 1);

    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);
  }
}
function celdaEspecial(ficha, jugador) {
  var celda = jugador.getceldaActual();
  switch (celda) {
    case 5:
      moverDelante(ficha, jugador, 4);
      break;
    case 14:
      moverDelante(ficha, jugador, 4);
      break;
    case 23:
      moverDelante(ficha, jugador, 4);
      break;
    case 32:
      moverDelante(ficha, jugador, 4);
      break;
    case 41:
      moverDelante(ficha, jugador, 4);
      break;
    case 50:
      moverDelante(ficha, jugador, 4);
      break;

    case 9:
      moverDelante(ficha, jugador, 5);
      break;
    case 18:
      moverDelante(ficha, jugador, 5);
      break;
    case 27:
      moverDelante(ficha, jugador, 5);
      break;
    case 36:
      moverDelante(ficha, jugador, 5);
      break;
    case 45:
      moverDelante(ficha, jugador, 5);
      break;
    case 54:
      moverDelante(ficha, jugador, 5);
      break;

    case 6:
      moverDelante(ficha, jugador, 6);
      break;
    case 12:
      moverAtras(ficha, jugador, 6);
      break;

    case 19:
      jugador.setPenalizado(1);
      break;

    case 56:
      jugador.setPenalizado(2);
      break;

    case 58:
      moverAtras(ficha, jugador, 57);
      break;
  }
}



var contador =0;
function miInterval(){
    miInterval = setInterval(casella, 1000);
}
function casella(){
    contador++;
    console.log(contador);
    if(contador == 10){clearInterval(miInterval)};
}
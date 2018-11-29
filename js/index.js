$(document).ready(function() {
  $("#dado").on("click", nuevoTurno);
});

class jugador {
  constructor() {
    this.celdaActual = 1;
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
    this.celdaActual = Number.parseInt(nuevaCelda);
  }

  getPenalizado() {
    return this.penalizado;
  }
  setPenalizado(penalizado) {
    this.penalizado = penalizado;
  }
}
var jugadorUno = new jugador();
var jugadorDos = new jugador();
var turnoJugadorUno = true;
var miInterval;
var limite;
var delay = 1000;

function moverDelante(ficha, jugador, dadoDelante) {
  limite = jugador.getceldaActual() + dadoDelante;
  miInterval = setInterval(function() {
    var numero = jugador.getceldaActual() + 1;
    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);

    if (jugador.getceldaActual() == limite) {
      clearInterval(miInterval);
      celdaEspecial(ficha, jugador);
    }
  }, delay);
}
function moverAtras(ficha, jugador, dadoAtras) {
  limite = jugador.getceldaActual() - finAtras;
  miInterval = setInterval(function() {
    var numero = jugador.getceldaActual() - 1;

    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);

    if (jugador.getceldaActual() == limite) {
      clearInterval(miInterval);
      celdaEspecial(ficha, jugador);
    }
  }, delay);
}
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
}
function mover(ficha, jugador, fin) {
  var atras = false;
  const ultimaCelda = 63;
  var finAtras = 0;

  // si la dau + actual més gran que 63
  if (jugador.getceldaActual() + fin > ultimaCelda) {
    finAtras = jugador.getceldaActual() + fin - ultimaCelda;
    fin = fin - finAtras;
    atras = true;
  }

  moverDelante(ficha, jugador, fin);

  if (atras) {
    moverAtras(ficha,jugador, finAtras);
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
      moverDelante(ficha, jugador);
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

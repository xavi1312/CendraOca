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
    let boolean = false;
    if (this.penalizado != 0) {
      boolean = true;
    }
    return boolean;
  }
  setPenalizado(penalizado) {
    this.penalizado = penalizado;
  }
  turnoPenalizacion() {
    this.penalizado--;
  }
}
var jugadorUno = new jugador();
var jugadorDos = new jugador();
var turnoJugadorUno = true;
var miInterval;
var delay = 300;
var limite;
var contador = 0;

function nuevoTurno() {
  var turno;
  var ficha;
  console.log(" ");

  if (turnoJugadorUno) {
    if (!jugadorUno.getPenalizado()) {
      turno = jugadorUno;
      ficha = "#ficha1";
      tirar(turno, ficha);
    } else {
      console.log("penalitzat 1");
      jugadorUno.turnoPenalizacion();
    }
  } else if (!turnoJugadorUno) {
    if (!jugadorDos.getPenalizado()) {
      turno = jugadorDos;
      ficha = "#ficha2";
      tirar(turno, ficha);
    } else {
      console.log("penalitzat 2");
      jugadorDos.turnoPenalizacion();
    }
  }
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

  moverDelante(ficha, jugador, fin, false);

  if (atras) {
    moverAtras(ficha, jugador, finAtras, false);
  }
}

function moverDelante(ficha, jugador, dadoDelante, especial) {
  limite = jugador.getceldaActual() + dadoDelante;
  console.log(
    jugador.getceldaActual() +
      " -->    " +
      dadoDelante +
      "     " +
      ficha +
      " --  " +
      limite
  );
  miInterval = setInterval(function() {
    var numero = jugador.getceldaActual() + 1;
    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);

    if (jugador.getceldaActual() == limite) {
      clearInterval(miInterval);
      if (!especial) {
        celdaEspecial(ficha, jugador);
      }else{
        cambioJugador();
      }
    }
  }, delay);
}

function moverAtras(ficha, jugador, dadoAtras, especial) {
  limite = jugador.getceldaActual() - dadoAtras;
  console.log(
    jugador.getceldaActual() +
      " <--    " +
      dadoAtras +
      "     " +
      ficha +
      " --  " +
      limite
  );
  miInterval = setInterval(function() {
    var numero = jugador.getceldaActual() - 1;

    $(ficha).appendTo($(".tablero__celda--" + numero));
    jugador.setCeldaActual(numero);
    console.log(numero);

    if (jugador.getceldaActual() == limite) {
      clearInterval(miInterval);
      if (!especial) {
        celdaEspecial(ficha, jugador);
      }else{
        cambioJugador();
      }
    }
  }, delay);
}

function cambioJugador(){
  if (turnoJugadorUno) {
    turnoJugadorUno = false;
  } else {
    turnoJugadorUno = true;
  }
}

function celdaEspecial(ficha, jugador) {
  var celda = jugador.getceldaActual();

  switch (celda) {
    case 5:
      moverDelante(ficha, jugador, 4, true);
      break;
    case 14:
      moverDelante(ficha, jugador, 4, true);
      break;
    case 23:
      moverDelante(ficha, jugador, 4, true);
      break;
    case 32:
      moverDelante(ficha, jugador, 4, true);
      break;
    case 41:
      moverDelante(ficha, jugador, 4, true);
      break;
    case 50:
      moverDelante(ficha, jugador, 4, true);
      break;

    case 9:
      moverDelante(ficha, jugador, 5, true);
      break;
    case 18:
      moverDelante(ficha, jugador, 5, true);
      break;
    case 27:
      moverDelante(ficha, jugador, 5, true);
      break;
    case 36:
      moverDelante(ficha, jugador, 5, true);
      break;
    case 45:
      moverDelante(ficha, jugador, 5, true);
      break;
    case 54:
      moverDelante(ficha, jugador, 5, true);
      break;

    case 6:
      moverDelante(ficha, jugador, 6, true);
      break;
    case 12:
      moverAtras(ficha, jugador, 6, true);
      break;

    case 19:
      jugador.setPenalizado(1);
      break;

    case 56:
      jugador.setPenalizado(2);
      break;

    case 58:
      moverAtras(ficha, jugador, 57, true);
      break;
    default: cambioJugador();
  }
}

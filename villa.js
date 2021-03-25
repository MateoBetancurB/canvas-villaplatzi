var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var animal1 = "vaca.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = animal1;
vaca.addEventListener("load", dibujar);



function dibujar() {
    papel.drawImage(fondo, 0, 0);
    papel.drawImage(vaca, 100, 100);
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
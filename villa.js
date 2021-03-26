var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() {

    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        papel.drawImage(vaca.imagen, 310, 250);
    }
    if (pollo.cargaOK) {
        papel.drawImage(pollo.imagen, 300, 400);
    }
    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, 100, 250);
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
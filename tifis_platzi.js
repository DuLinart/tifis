var tablero;
var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var fondo = {
    imagenURL: "fondo.png",
    imagenOK: false
};
var tifis = {
    frenteOK: false,
    atrasOK: false,
    derOK: false,
    izqOK: false,
    velocidad: 50,
    x: 0,
    y: 0,
   
};
var liz = {
    imagenOK: false,
    x: 350,
    y: 200
};

var mensaje = {
    imagen1OK: false,
    x: 375,
    y: 150
};

function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = "diana-frente.png";
    tifis.frente.onload = confirmarFrente;

    tifis.atras = new Image();
    tifis.atras.src = "diana-atras.png";
    tifis.atras.onload = confirmarAtras;

    tifis.izq = new Image();
    tifis.izq.src = "diana-izq.png";
    tifis.izq.onload = confirmarIzq;

    tifis.der = new Image();
    tifis.der.src = "diana-der.png";
    tifis.der.onload = confirmarDer;

    liz.imagen = new Image();
    liz.imagen.src = "liz.png";
    liz.imagen.onload = confirmarLiz;



    document.addEventListener("keydown", teclado);

}
function teclado(evento)
{

    var codigo = evento.keyCode;
    if(codigo == teclas.UP)
    {
        tifis.y -= tifis.velocidad;
        if (tifis.y <0) {
            tifis.y -= velocidad;
        }
        if(tifis.y == 200 && tifis.x ==0)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==50)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==100)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==200)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==150)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==200)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==250)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==300)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==350)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==400)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==450)
        {
            tifis.y += tifis.velocidad;
        }
        if(tifis.y == 250 && tifis.x ==350)
        {
            mensaje.imagen = new Image();
            mensaje.imagen.src = "mensaje_hola.png";
            mensaje.imagen.onload = confirmarMensaje;
            dibujar();
        }
    }     
    if(codigo == teclas.DOWN)
    {
        tifis.y += tifis.velocidad;
        if (tifis.y >450) {
            tifis.y -= tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==0)
        {
            tifis.y -= tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==50)
        {
            tifis.y -= tifis.velocidad;

        }
        if(tifis.y == 200 && tifis.x ==100)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==150)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==200)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==250)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==300)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==350)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==400)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 350 && tifis.x ==450)
        {
            tifis.y -= tifis.velocidad;
            
        }
        if(tifis.y == 150 && tifis.x ==350)
        {
            mensaje.imagen = new Image();
            mensaje.imagen.src = "mensaje_hola.png";
            mensaje.imagen.onload = confirmarMensaje;
            dibujar();
        }
    }
    if(codigo == teclas.LEFT)
    {
        tifis.x -= tifis.velocidad;
        if (tifis.x <0) 
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==100)
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 0 && tifis.x ==200)
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 50 && tifis.x ==200)
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 100 && tifis.x ==200)
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 150 && tifis.x ==200)
        {
            tifis.x += tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==200)
        {
            tifis.x += tifis.velocidad;
        }
         if(tifis.y == 200 && tifis.x ==400)
        {
            mensaje.imagen = new Image();
            mensaje.imagen.src = "mensaje_hola.png";
            mensaje.imagen.onload = confirmarMensaje;
            dibujar();
        }
    }
    if(codigo == teclas.RIGHT)
    {
        tifis.x += tifis.velocidad;
        if (tifis.x >450) {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 0 && tifis.x ==200)
        {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 50 && tifis.x ==200)
        {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 100 && tifis.x ==200)
        {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 150 && tifis.x ==200)
        {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 200 && tifis.x ==200)
        {
            tifis.x -= tifis.velocidad;
        }
        if(tifis.y == 350 && tifis.x ==150)
        {
            tifis.x -= tifis.velocidad;
        }
         if(tifis.y == 200 && tifis.x ==300)
        {
            mensaje.imagen = new Image();
            mensaje.imagen.src = "mensaje_hola.png";
            mensaje.imagen.onload = confirmarMensaje;
            dibujar();
        }
    }


    dibujar(codigo);
}
function confirmarFondo()
{
    fondo.imagenOK = true;
    dibujar();
}

function confirmarFrente()
{
    tifis.frenteOK = true;
    dibujar();
}
function confirmarAtras()
{
    tifis.atrasOK = true;
    dibujar();
}
function confirmarIzq()
{
    tifis.izqOK = true;
    dibujar();
}
function confirmarDer()
{
    tifis.derOK = true;
    dibujar();
}

function confirmarLiz()
{
    liz.imagenOK = true;
    dibujar();
}
function confirmarMensaje()
{
    mensaje.imagen1OK = true;
    dibujar();
}


function dibujar(direccion)
{
    if(fondo.imagenOK)
    {
        tablero.drawImage(fondo.imagen, 0, 0);    
    }

    var tifisOrientada = tifis.frente;

    if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
    {
        if(direccion == teclas.DOWN || direccion == undefined)
        {
            tifisOrientada = tifis.frente;
        }
        else if(direccion == teclas.UP)
        {
            tifisOrientada = tifis.atras;
        }
        else if(direccion == teclas.LEFT)
        {
            tifisOrientada = tifis.izq;
        }
        else if(direccion == teclas.RIGHT)
        {
            tifisOrientada = tifis.der;
        }
    }
    tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

    if(liz.imagenOK)
    {
        tablero.drawImage(liz.imagen, liz.x, liz.y);
    }
    if (mensaje.imagen1OK) {
        tablero.drawImage(mensaje.imagen, mensaje.x, mensaje.y);
    }
}






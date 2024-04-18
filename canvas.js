
//  Obtener el contexto de dibujo
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Establecer el estilo de dibujo
ctx.fillStyle = "#202020"; // Color

// Funcion que crea un punto
const punto = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  // Borra el punto después de 1 segundo
  setTimeout(() => borrarPunto(x, y), 1000);
}

// Funcion que borra un punto
const borrarPunto = (x, y) => {
  ctx.clearRect(x - 6, y - 6, 12, 12);
}

// Escucha los clicks
window.addEventListener('click', function (evento) {
  var x = evento.clientX;
  var y = evento.clientY;

  // Pinta el punto
  punto(x, y);
});

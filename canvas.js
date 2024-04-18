
//  Obtener el contexto de dibujo
var canvas = document.getElementById("canvas"); // Suponiendo que el ID de tu canvas es "miCanvas"
var ctx = canvas.getContext("2d");

// Establecer el estilo de dibujo
ctx.fillStyle = "#202020"; // Color negro

const punto = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  // Eliminar el punto después de 5 segundos
  setTimeout(() => borrarPunto(x, y), 1000);
}

const borrarPunto = (x, y) => {
  ctx.clearRect(x - 6, y - 6, 12, 12);
}

// Listener
window.addEventListener('click', function (evento) {
  var x = evento.clientX;
  var y = evento.clientY;

  punto(x, y);
});

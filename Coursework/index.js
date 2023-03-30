const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizeInput = document.getElementById('size');
const circleButton = document.getElementById('circle');
const squareButton = document.getElementById('square');
const triangleButton = document.getElementById('triangle');

let isDrawing = false;
let startX, startY;
let shape = 'circle';

function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawSquare(x, y, size) {
  ctx.beginPath();
  ctx.rect(x - size / 2, y - size / 2, size, size);
  ctx.stroke();
}

function drawTriangle(x, y, size) {
  const height = size * Math.sqrt(3) / 2;
  ctx.beginPath();
  ctx.moveTo(x, y - height / 2);
  ctx.lineTo(x - size / 2, y + height / 2);
  ctx.lineTo(x + size / 2, y + height / 2);
  ctx.closePath();
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawShape(x, y, size) {
  clearCanvas();
  switch (shape) {
    case 'circle':
      drawCircle(x, y, size);
      break;
    case 'square':
      drawSquare(x, y, size);
      break;
    case 'triangle':
      drawTriangle(x, y, size);
      break;
  }
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
  drawShape(startX, startY, sizeInput.value);
});

canvas.addEventListener('mousemove', e => {
  if (!isDrawing) return;
  drawShape(startX, startY, sizeInput.value);
});

canvas.addEventListener('mouseup', e => {
  isDrawing = false;
});

sizeInput.addEventListener('input', e => {
  drawShape(startX, startY, sizeInput.value);
});

circleButton.addEventListener('click', e => {
  shape = 'circle';
  drawShape(startX, startY, sizeInput.value);
});

squareButton.addEventListener('click', e => {
  shape = 'square';
  drawShape(startX, startY, sizeInput.value);
});

triangleButton.addEventListener('click', e => {
  shape = 'triangle';
  drawShape(startX, startY, sizeInput.value);
});
const canvas = document.getElementById('paint-board');
const context = canvas.getContext('2d');
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 2;
context.strokeStyle = '#ff4754';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event){
    if(!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
}

canvas.addEventListener('mousedown', event =>{
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup',()=>isDrawing = false);
canvas.addEventListener('mouseout',()=>isDrawing = false);
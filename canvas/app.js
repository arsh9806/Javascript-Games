const canvas= document.getElementById('canvas');
const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// ctx.fillRect(10,10,10,10);


// context.beginPath();
// context.moveTo(10,10);
// context.lineTo(150, 10);
// // context.lineTo(80,100);
// context.closePath();
// context.strokeStyle='red';
// context.stroke();


// context.arc(100, 100, 50, 180 , Math.PI * 2 );
// context.strokeStyle='red';

// context.stroke();


canvas.width = 600;
canvas.height = 600;
// animations  : 
const circle = {
    x: 200,
    y: 200,
    size : 40,
    dx: 6,
    dy: 5
}
function drawCircle(){
    context.beginPath();
    context.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
    context.fillStyle='coral';
    context.fill(); 
}
function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    drawCircle();
    circle.x += -circle.dx;
    circle.y += circle.dy;
    if(circle.x+circle.size > canvas.width || circle.x-circle.size < 0){
        circle.dx *= -1;
    }
    if(circle.y+circle.size > canvas.height || circle.y-circle.size < 0){
        circle.dy *= -1;

    }
    requestAnimationFrame(update);
}
update()
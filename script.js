var canvas = document.getElementById("WriteBoard");
//ЧАСТЬ ДЛЯ ОТРИСОВКИ ЦВЕТОВ
let topbar = document.getElementById("topbar");

let colors = ["#212020", "#DFEE36", "#F0C838", "#E18229", "#FF2B2B", "#EC6EAA","#CA80F6", "#7024D0", "#4E37DE", "#4B7BF4", "#33ABD0", "#23C79F","#218C2B"];

document.addEventListener("DOMContentLoaded", () => {
let btn = "";
  colors.forEach(element => {
     btn += '<button class="rounded-color-button" type="button" style="background: '+element+' "></button>';
  });
  topbar.innerHTML = btn;
});


//ЧАСТЬ РИСОВАНИЯ
var context = canvas.getContext('2d');

let mouse = {x: 0, y:0 };
let isDraw = false;


canvas.addEventListener("mousedown", function(e){
  mouse.x = getCursorPositionX(canvas,e);
  mouse.y = getCursorPositionY(canvas,e);
  isDraw = true;
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function(e){
  if(isDraw == true){
                 
    mouse.x = getCursorPositionX(canvas,e);
    mouse.y = getCursorPositionY(canvas,e);

    context.lineTo(mouse.x, mouse.y);
    context.stroke();
}
});

canvas.addEventListener("mouseup", function(e){
  
  mouse.x = getCursorPositionX(canvas,e);
  mouse.y = getCursorPositionY(canvas,e);
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
  context.closePath();
  isDraw = false;
});


function getCursorPositionX(canvas, event){
  const rect = canvas.getBoundingClientRect()
  console.log('coordinate x ' + (event.clientX - rect.left));
  return  event.clientX - rect.left;
}

function getCursorPositionY(canvas, event){
  const rect = canvas.getBoundingClientRect()
  console.log('coordinate x ' + (event.clientY - rect.top));
  return  event.clientY - rect.top;
}
// canvas.onmousemove = function (e) {
//   ctx.lineTo(getCursorPositionX(canvas,e), getCursorPositionY(canvas,e));
//   ctx.stroke();

// };



// canvas.addEventListener('mousedown', function(e) {
//     //переместиться на точку начала рисования при нажатт на мышь
   
// })


// //выбор цвета
// var color = document.getElementById("color");


// //Установка цвета
// color.addEventListener('change', (event) => {
   

//     ctx.fillStyle = event.target.value;
//     ctx.fillRect(10, 10, 100, 100);
//   });
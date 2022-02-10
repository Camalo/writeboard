var canvas = document.getElementById("WriteBoard");
    var ctx = canvas.getContext("2d");

//выбор цвета
var color = document.getElementById("color");


//Установка цвета
color.addEventListener('change', (event) => {
   

    ctx.fillStyle = event.target.value;
    ctx.fillRect(10, 10, 100, 100);
  });


// document.addEventListener("DOMContentLoaded", () => {

    
    
// });


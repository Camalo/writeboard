let canvas = document.getElementById("WriteBoard");
let context = canvas.getContext('2d');

let topbar = document.getElementById("topbar");
let stikers =  document.getElementById("stikers");
const drawer = new CanvasDrawer(canvas, context);
const brush = new Brush(context);

// TODO: переименовать картинки из jpg в png
// TODO: добавить функцию перетаскивания стикеров на холсте 
// TODO: настройка ширины кисти
// TODO: добавление и набор текста
// TODO: удаление выбронного текста
// TODO: удаление выброванного стикера
// TODO: ластик +
// TODO: очистить весь холст +


document.addEventListener("DOMContentLoaded", () => {
  
  // отрисовать цвета
  let colors = brush.colors;
  let btn = "";
  let btnId = 1;
  colors.forEach(element => {
     btn += '<button id= ' + btnId++ + ' class="rounded-color-button" type="button" style="background: '+element+' "></button>';
  });
  topbar.innerHTML= btn;

  //отрисовать стикеры
  let html = '';
  for(let i = 0; i < 8; i++){
    html += '<img class="image-button" src="images/stiker' + (i + 1) + '.jpg" height="130" width="130" />';
  }

  for(let i =0; i < 4; i++){
    html += '<img class="image-button" src="images/paragraph' + (i + 1) + '.png" height="130" width="130" />';
  }

  for(let i =0; i < 4; i++){
    html += '<img class="image-button" src="images/dialog' + (i + 1) + '.png" height="130" width="130" />';
  }

  stikers.innerHTML = html;
});

canvas.addEventListener('input', function(e){
  console.log('input!');
});
document.addEventListener("click", function(event) {
  let target = event.target;

  // выбор цвета
  if(target.classList.contains('rounded-color-button')){
      brush.setColor(target.id - 1);
  }
  
  if(target.classList.contains('image-button')){

    drawer.currentStiker = target.src;
    drawer.isStiker = true;
  }
  // 
  if (target.id == 'addText'){
    console.log('addText is Clicked');
    drawer.isText = true;
  }
  if(target.id =='clearBtn'){
    drawer.clearCanvas();
  }
  if(target.id =='eraserBtn'){
    if(brush.isEraser == false){
      brush.useEraser();
      brush.isEraser = true;
    }
      else {
        brush.isEraser = false;
        brush.useBrush();
      }
  }
  if(target.id =='pencilBtn'){
    console.log ('Is pencil');
    brush.setLineWidth(5);
  }
  if(target.id =='markerBtn'){
    console.log ('Is marker');
    brush.setLineWidth(20);
    
  }
  
})
// РИСОВАНИЕ
canvas.addEventListener("click", function(e){
    if(drawer.isStiker == true){
      drawer.drawStiker(e);
      drawer.isStiker = false;
      // console.log();
    } else if(drawer.isText == true){
      
      drawer.writeText('something', e);
      drawer.isText = false;
    }
});

canvas.addEventListener("mousedown", function(e){
  drawer.beginDraw(e);
});

canvas.addEventListener("mousemove", function(e){
  drawer.draw(e);
});

canvas.addEventListener("mouseup", function(e){
  drawer.endDraw(e);
});


//СОХРАНЕНИЕ
let saveBtn = document.getElementById('save-button');

saveBtn.onclick = function (e){
  LoaderPictire.save(new Image());
}

// //ЗАГРУЗКА РИСУНКА 
// // Создаем объект изображения
// var img1 = new Image();

// // Привязываем функцию к событию onload
// // Это указывает браузеру, что делать, когда изображение загружено
// img1.onload = function() {
//   //куда кликнет мышь
// 	context.drawImage(img1, 100, 50);
// };

// ЗАГРУЗКА ИЗОБРАЖЕНИЯ НА CANVAS 

// ДОБАВЛЕНИЕ СТИКЕРА - один фиксированный размер и из моих изображений
// ДОБАВЛЕНИЕ ФОНА - из компьютера пользователя любого размера на весь canvas

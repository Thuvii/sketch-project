// var canvas = document.querySelector('.grid');
// var ctx = canvas.getContext('2d')
// let draw = false;


// canvas.addEventListener('mousedown',()=>{
//     draw = true;
//     ctx.beginPath();
//     ctx.lineWidth = 5;
// })

// canvas.addEventListener('mousemove',(e)=>{
//    if(!draw) return;
//    ctx.lineTo(e.offsetX, e.offsetY);
//    ctx.stroke();
// })


// canvas.addEventListener('mouseup',()=>{
//     draw=false;
// })
var container = document.getElementById('container')
let drawing = false;

var colorInput = document.getElementById('color');

var size = document.getElementById('size');
var enterBtn = document.getElementById('confirm');




var btn = document.getElementById('reset-button')

function draw(item){
    item.addEventListener('mousedown',()=>{
        drawing = true;
        item.style.backgroundColor = colorInput.value
    })
    item.addEventListener('mousemove',()=>{
        if(!drawing) return;
        item.style.backgroundColor = colorInput.value

    })
    item.addEventListener('mouseup',()=>{
        drawing=false;
    })
    btn.addEventListener('click',()=>{
       item.style.backgroundColor = '#ffff';
    })

}

function createCanvas(num){
    let canvasSize = num * num;
    container.innerHTML = '';
    for(var i = 0; i < canvasSize; i++){
        const newC = document.createElement('div');
        newC.classList.add('grid');
        newC.style.flex =`1 0 calc(100% / ${num})`
        newC.style.height =`calc(100% / ${num})`
        container.appendChild(newC);
        draw(newC);
        
    }
}

size.addEventListener('input',(e)=>{

    var newsize = parseInt(size.value)
    
        if(newsize > 100 ) {
            alert('please enter number smaller or equal 100')
            size.value = '';
            return;
        }else if(isNaN(newsize)){
            return;
        }
        createCanvas(size.value);
    
    
})












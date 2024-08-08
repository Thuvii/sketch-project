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

var btn = document.getElementById('reset-button')

function createCanvas(num){
    let canvasSize = num * num;
    for(var i = 0; i < canvasSize; i++){
        const newC = document.createElement('div');
        newC.classList.add('grid');
        newC.style.flex =`1 0 calc(100% / ${num})`
        newC.style.height =`calc(100% / ${num})`
        container.appendChild(newC);

        newC.addEventListener('mousedown',()=>{
            drawing = true;
            newC.classList.add('grid-hover');
        })
        newC.addEventListener('mousemove',()=>{
            if(!drawing) return;
            newC.classList.add('grid-hover');
        })
        newC.addEventListener('mouseup',()=>{
            drawing=false;
        })
    }
}

createCanvas(40)

btn.addEventListener('click',()=>{
    var grid = document.querySelectorAll('#container div')
    grid.forEach(element => element.classList.remove("grid-hover"));
})










const a=document.getElementById('num2');
const b=document.getElementById('num1');

var producto=0;
const btn=document.getElementById('btn');
btn.addEventListener('click',hacerClic);
function hacerClic(){
    var a=document.getElementById('num2').value;
    var b=document.getElementById('num1').value;
    producto=parseInt(a)+parseInt(b);
    document.getElementById("resul").innerHTML=producto;
}

const  not1=document.getElementById('n1');
const  not2=document.getElementById('n2');
const  not3=document.getElementById('n3');
let total=0;
let promedio=0;
const boton=document.getElementById('boton');
boton.addEventListener('click',HacerClick);
function HacerClick(){
    let not1=document.getElementById('n1').value;
    let not2=document.getElementById('n2').value;
    let not3=document.getElementById('n3').value;
    total = parseInt(not1)+parseInt(not2)+parseInt(not3);
    promedio = total/3;
    document.getElementById("promedio").innerHTML = promedio;

    if (promedio<7){
        titulo.classList.remove("green");
        titulo.classList.add("red");
    }else{
        titulo.classList.remove("red");
        titulo.classList.add("green");
    }
}

const blue=document.getElementById('blue');
blue.addEventListener('click',BLUE);
function BLUE(){
    fondo.classList.remove("yellow")
    fondo.classList.add("blue");
    fondo.classList.remove("orange")
}

const yellow=document.getElementById('yellow');
yellow.addEventListener('click',YELLOW);
function YELLOW(){
    fondo.classList.remove("blue")
    fondo.classList.add("yellow");
    fondo.classList.remove("orange")
}

const orange=document.getElementById('orange');
orange.addEventListener('click',ORANGE);
function ORANGE(){
    fondo.classList.remove("yellow")
    fondo.classList.remove("blue")
    fondo.classList.add("orange");
}
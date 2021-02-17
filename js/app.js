const botonNumero = document.querySelectorAll('.numero');
const botonOperaciones = document.querySelectorAll('.operaciones');
const botonIgual = document.getElementById('igual');
const botonLimpiar = document.getElementById('limpiar');
let resultado = document.getElementById('result');

let operaAct = '';
let operaAnt = '';
let operacion = undefined;

botonNumero.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarVista();
});

botonLimpiar.addEventListener('click', function(){
    limpiar();
    actualizarVista();
});

function agregarOperacion(op){
    if(operaAct === '') return;
    if(operaAnt !== ''){
        calcular();
    }
    operacion = op.toString();
    operaAnt = operaAct;
    operaAct = '';
}

function agregarNumero(num) {
    operaAct = operaAct.toString() + num.toString();
    actualizarVista();
}

function calcular() {
    let calculo;
    const anterior = parseFloat(operaAnt);
    const actual = parseFloat(operaAct);

    if(isNaN(anterior) || isNaN(actual)) return;
        switch (operacion) {
            case '+':
                calculo = anterior + actual;
                break;
            case '-':
                calculo = anterior - actual;
                break;
            case 'x':
                calculo = anterior * actual;
                break;
            case '/':
                calculo = anterior / actual;
                break;
            default:
                return ;
        }
        operaAct = calculo;
        operacion = undefined;
        operaAnt = '';
}
function limpiar() {
    operaAct = '';
    operaAnt = '';
    operacion = undefined;
}

function actualizarVista() {
    resultado.value = operaAct;
    console.log(resultado.value = operaAct);
}

limpiar();

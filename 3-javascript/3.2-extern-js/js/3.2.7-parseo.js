var num1 = prompt("Ingrese num 1: ");
var num2 = prompt("Ingrese num 2: ");
// parseInt
// Number
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log("num1", typeof num1);
console.log("num2", typeof num2);
var operator = prompt("Simbolo de la operacion: ");

var result = 0;
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    console.log("Operacion no permitida");
}

alert(`El resultado de ${num1} + ${num2} = ${result}`)
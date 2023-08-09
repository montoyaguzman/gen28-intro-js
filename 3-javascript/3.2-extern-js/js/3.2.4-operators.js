var operatorFirst = 150;
var operatorSecond = 30;


// Operadores aritmeticos
// + - * / ** = % -- ++



var operator = '+';
/**
 * Sintaxis
 */
// if (condicion) {
//     // sencences executes condicion === true
// } else if (condicion2) {
//     // sencences executes condicion2 === true
// } else {
//     // sencences executes condicion1 === false y condicion2 === false
// }

var result = 0;
if (operator === '+') {
    // hoisting: subir declaraciones de variables, aun si usar var result
    result = operatorFirst + operatorSecond;
} else if (operator === '-') {
    result = operatorFirst - operatorSecond;
} else if (operator === '*') {
    result = operatorFirst * operatorSecond;
} else if (operator === '/') {
    result = operatorFirst / operatorSecond;
} else {
    console.log("Operacion no permitida");
}

console.log("resultado = " + result); // concatena todo como texto
console.log("resultado = ", result); // muestra dos resultados string, number
// 150 + 30 = 180
console.log("El resultado de " + operatorFirst + " + " + operatorSecond + " = " + result);
// literal template (es6)
console.log(`El resultado de ${operatorFirst} + ${operatorSecond} = ${result}`);

// Residuo
var numberOne = 9;
var numberTwo = 3;
var residuo = numberOne % 2;
console.log("residuo: ", residuo);
if (residuo === 0) {
    console.log(`${numberOne} si es par`);
} else {
    console.log(`${numberOne} NO es par`);
}
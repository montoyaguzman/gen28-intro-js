var operatorFirst = 150;
var operatorSecond = 30;

// Operadores de asignacion
// =    Asignacion
// +=   Asignacion de adicion
// -=   Asignacion de resta

// Operadores aritmeticos
// +    Suma
// -    Resta
// *    Multiplicacion
// /    Division
// **   Potencia
// %    Modulo
// --   Decremento
// ++   Incremento

// Operadores de comparacion
// ==   Comparacion de igualdad de valor "8" == 8 TRUE 
// ===  Comparacion de igualdad de valor Y TIPO DE VARIABLE "8" === 8 FALSE
// !=   Validar diferencia de valores
// !==  Validar diferencia de valores Y TIPO DE VARIABLE
// <    Menor 8 < 10 TRUE
// <=   Menor o igual 100 <= 100 TRUE
// >    Mayor
// >=   Mayor igual

// Operadores logicos (estudiar tablas de verdad)
// Conjuncion unir dos condiciones con AND (&&)
// Conjuncion unir dos condiciones con AND (||)
// && AND condition1 && condition2
// || OR condition1 || condition2
// !  Negacion 
// !!


var operator = '+';
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

// Otro ejemplo de operadores
let n1 = 10;
let n2 = 20;
if (n1 <= n2) {
    // < y <= Menor y menor igual
    // > y >= Mayor y mayor igual
    // == Igual (compara valor de la variable)
    // === Exactamente igual (compara el valor de la variable y tipo de dato)
    console.log('dentro del if');
}
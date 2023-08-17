// SINTAXIS - DEFINIR FUNCIONES
// function functionName(arg1, arg2, ... arg3) {
//     bodyFunction or sentences
//     return [opcional]
// }

// SINTAXIS - LLAMAR O EJECUTAR FUNCIONES
// functionName(param1, param2, ... paramN);


// definir la funcion
function sum(num1, num2) { // argumentos
    const result = num1 + num2;
    console.log('result in function: ', result);
    return result;
}

function sayHellow() {
    console.log('Hola....!!');
}

// hacer una funcion que reste
function substractNumbers(number1, number2) {
    const result = number1 - number2;
    // console.log('result', result);
    return result;
}

// hacer una funcion que te salude de acuerdo a tu nombre
// sayHellowToPeople
function sayHellowToPeople(name) {
    console.log('Hola....', name);
}

// executar o llamar a una funcion
// console.log('return value', sum(10, 70)); // paso de parametros
// console.log('no retorna', sayHellow());

const result = substractNumbers(40, 20);
console.log(result);

sayHellowToPeople('Dante');
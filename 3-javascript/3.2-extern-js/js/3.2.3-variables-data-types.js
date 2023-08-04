// Primitivas

// String
var titlePage = "Donas el potito!";
// valor por defecto de inicializacion 
// var titlePage = "";

// Number (int y double)
var age = 25;
// valor por defecto de inicializacion 
// var age = 0;
var producPrice = 99.99;
// valor por defecto de inicializacion 
// var producPrice = 0.0;

// Boolean
var isLoggin = true;
var isPaymentOk = false;
// valor por defecto de inicializacion 
// var isLoggin = false;
// var isPaymentOk = false;

// Char
var letterC = "C";
// valor por defecto de inicializacion 
// var letterC = "";

// Complejas

// objetos
var student = {
    // key : value
    name: "juanito banana",
    id: "756191",
    age: 29,
    career: "Ing. en Alimentos",
    matters: ["math", "programming", "physic"]
};
// valor por defecto de inicializacion 
// var student = {};

// arrays
var fruits = ["orange", "pineapple", "banana", { name: "strawberry", weight: 500, type: [] } ];
// valor por defecto de inicializacion 
// var fruits = [];

console.log("titlePage: ", titlePage);
console.log("age: ", age);
console.log("isLoggin: ", isLoggin);
console.log("student: ", student);
console.log("student.name: ", student.name);
console.log("fruits: ", fruits);
console.log("fruits - pineapple: ", fruits[2]);

// imprimir la materia de programming
console.log(student.matters[1]);

// imprimir el nombre de la fresa
console.log(fruits[3].name);
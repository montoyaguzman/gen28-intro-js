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

var isMayor = true;
var isHomeworkOk = false;
var hasPermission = false;

if ((isMayor || hasPermission) && isHomeworkOk) {
    // (isMayor || hasPermission) TRUE
    // isHomeworkOk FALSE
    console.log("ir a lokiar... xD");
} else {
    console.log("ver netflix xD");
}

var num1 = 200;
var num2 = 100;
var result = num1 - num2;

if (result >= 100) {
    // 100 > 100 FALSE
    // 100 >= 100 TRUE
    console.log("ir a lokiar... xD");
} else {
    console.log("ver netflix xD");
}

var day = 7;

switch (day) {
    case 1:
        console.log('es lunes');
    break;
    case 2:
        console.log('es martes');
    break;
    default: 
        console.log('ese dia no existe');
    break;
}
// maximo 11 cases
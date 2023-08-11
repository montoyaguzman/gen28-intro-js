var titles = ['pokemon', 'asmr', 'dinosaurios', 'blank pink', 'mcr'];

// document.write(`<li> ${titles[0]} </li>`);
// document.write(`<li> ${titles[0]} </li>`);
// document.write(`<li> ${titles[0]} </li>`);

// SINTAXIS
// inicio (1)
// while(condition (2)) {
//     // sentences executed if condition is true
// razonDeCambio (3)
// }

var initPosition = 0; // inicio
while (initPosition < titles.length) { // condition
    document.write(`<li> ${titles[initPosition]} </li>`); // sentences
    initPosition = initPosition + 1; // razonDeCambio
}

// SINTAXIS
// for(inicio; condicion; razonDeCambio) {
 // sentences
// }

for(var i = 0; i < titles.length; i++) {
    document.write(`<li> ${titles[initPosition]} </li>`); // sentences
}
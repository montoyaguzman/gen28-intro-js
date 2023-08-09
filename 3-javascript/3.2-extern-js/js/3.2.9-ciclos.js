var titles = ['pokemon', 'asmr', 'dinosaurios', 'blank pink', 'mcr'];

// document.write("<li>titles[0]);
// document.write(titles[1]);
// document.write(titles[2]);

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
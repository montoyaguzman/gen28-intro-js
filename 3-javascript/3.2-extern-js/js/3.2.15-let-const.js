const titles = ['pokemon', 'asmr', 'dinosaurios', 'blank pink', 'mcr'];
for(let i = 0; i < titles.length; i++) {
    let name1 = 'juanito';
    console.log(`${titles[i]}`);
}
// console.log(i); // error undefined
// console.log(name1);  // error undefined


let name;
name = 'jose';
const MEMORY = 100; // ok
// MEMORY = 100; // ERROR Missing initializer in const declaration

name = 'juanito';
// MEMORY = 900; // Assignment to constant variable.

// las constante no se pueden reasignar de valor pero si pueden mutar

// Best practice
// const, let, var (style="" o !important)

const newTitles = [ 'asmr', 'dinosaurios', 'blank pink', 'mcr'];
// titles = ['ed maverick', 'kevin karl'];  // error Assignment to constant variable.
newTitles.push('nirvana');
newTitles.splice(0, 1); // (pos, cantidad)
newTitles.splice(1, 1);

console.log(newTitles);
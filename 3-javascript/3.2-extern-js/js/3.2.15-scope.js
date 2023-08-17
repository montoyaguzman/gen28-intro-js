// DOCS
// https://www.youtube.com/watch?v=uI6o97A4IrI
// https://www.youtube.com/watch?v=bvkY9ey83yY
// https://platzi.com/blog/como-funciona-el-scope-en-javascript/

// Ejemplo
var i;
var titles = ['pokemon', 'asmr', 'dinosaurios', 'blank pink', 'mcr'];
// Hoisting: Elevar una declaracion hasta el bloque mas alto posible
for(i = 0; i < titles.length; i++) {
    console.log(`${titles[i]}`);
}
console.log(i);


// Ejemplo
var i;
console.log('name: ', name); 
console.log('titles: ', titles); 
var titles = ['pokemon', 'asmr', 'dinosaurios', 'blank pink', 'mcr'];
var name = 'jose'
// Hoisting: Elevar una declaracion hasta el bloque mas alto posible
for(i = 0; i < titles.length; i++) {
    console.log(`${titles[i]}`);
}
console.log(i);

// problemas de var
// 1. Es confuso donde queda la definicio de la variable (hoisting)
// 2. Redefinicio de variables
// 3. Confusion de si o nos globales
// 4. No se limita correcta el alcance de una variable

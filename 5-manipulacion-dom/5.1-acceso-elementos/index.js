/**
 * Acceso a un elemento por ID
 */
const divElement1 = document.getElementById('title'); //getElement
const divElement2 = document.querySelector('#title'); // querySelector
console.log('divElement1:', divElement1);
console.log('divElement2:', divElement2);

/**
 * Acceso a un elemento por clase
 */
const liElements1 = document.getElementsByClassName('animal-item'); //getElement
const liElements2 = document.querySelectorAll('.animal-item'); // querySelector
console.log('liElements1:', liElements1);
console.log('liElements2:', liElements2);

/**
 * Acceso a un elemento por etiqueta
 */
const sectionElements1 = document.getElementsByTagName('section'); //getElement
const sectionElements2 = document.querySelectorAll('section'); // querySelector
console.log('sectionElements1:', sectionElements1);
console.log('sectionElements2:', sectionElements2);
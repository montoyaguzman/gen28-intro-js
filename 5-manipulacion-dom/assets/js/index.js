const formElement = document.querySelector('#language-form');
const ulElement = document.querySelector('#list-languages');
let languagesArray = [];

formElement.addEventListener('submit', function (event) {
    // 1. prevenir que se recargue la pagina al enviar el formulario
    event.preventDefault();

    // 2. Obtener los valores del formulario
    const inputElement = event.target.languageElement;
    const radioNodeList = event.target.statusRadioElement;
    let selectedRadioElement = null;

    // 3. Busco el radio que seleccionaron para el status
    for (let i=0; i < radioNodeList.length; i++) {
        if (radioNodeList[i].checked === true) {
            selectedRadioElement = radioNodeList[i];
        }
    }

    // 5. Crear un objeto elementList y agregarlo al array para despues pintarlo en pantalla
    const language = inputElement.value;
    const status = selectedRadioElement.value;
    const elementList = {
        description: language,
        status: status,
    }
    languagesArray.push(elementList);

    console.log(languagesArray);

    // 6. Limpiar la vista
    cleanView();

    // 7. Pintarlos en la pantalla
    renderViewLanguages(languagesArray);

    // 8. Actualizar la barra de totales


});

function renderViewLanguages(arrLanguages) {
    for (let i = 0; i < arrLanguages.length; i++) {
        
        // crear los elementos html
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const iconElement = document.createElement('i');
        const buttonElement = document.createElement('button');

        // agregar texto
        liElement.innerHTML = arrLanguages[i].description;

        // agregarle estilos
        liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        iconElement.classList.add('bi', 'bi-play-circle-fill', 'text-success');
        buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');

        // hacer aparecer las etiquetas en el DOM
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(iconElement);
        divElement.appendChild(buttonElement);

    }
};

function cleanView() {
    ulElement.innerHTML = '';
}
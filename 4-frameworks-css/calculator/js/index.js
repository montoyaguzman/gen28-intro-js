const buttonElement = document.querySelector('#operation');
const selectElement = document.querySelector('#typeOperation');
var operationSymbolType = '';

selectElement.addEventListener('change', function(event) {
    operationSymbolType = selectElement.options[selectElement.selectedIndex].value;
});

buttonElement.addEventListener('click', function(e) {
    // console.log(e.target);
    const num1Element = document.getElementById('num1');
    // document.getElementsByTagName
    // document.getElementsByClassName
    const num2Element = document.querySelector('#num2');
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);

    let result = 0;
    console.log(operationSymbolType)
    console.log(num1);
    console.log(num2);
    switch(operationSymbolType) {
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        default:
            alert('operacion no permitida...');
        break;
    }
    
    const divResultElement = document.querySelector('#result');
    divResultElement.innerHTML = result;
    
});

/**
 * 1. oBTENER EL VALUE de los input y el select (manejo del dom)
 * 2. Que el boton haga una accion (eventos)
 * 3. Pintar el resultada en la parte especifica del HTML que queramos (appendChild e inner html)
 * RETO: Comprobar que solo se ingresen numeros
 */
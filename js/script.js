let firstInput = 0
let secondInput = 0
let operatorInput = "+"

document.addEventListener('click', function(e) {
    let button = e.target;
    let buffer = document.getElementById("display").getAttribute('value');
    if (button.tagName == "BUTTON"){
        if(button.id === "buttonClear") {
            buffer = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (button.id === "buttonResult") {
            secondInput = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(firstInput, secondInput, operatorInput));
        } else if (button.id === "buttonAdd" || button.id === "buttonSubtract" || button.id === "buttonMultiply" || button.id === "buttonDivide"){
            firstInput = parseFloat(document.getElementById("display").getAttribute('value'));
            operatorInput = button.value;
            document.getElementById("display").setAttribute('value', "");
        } else {
            if (buffer === null){
                document.getElementById("display").setAttribute('value', button.textContent);
            } else {
                document.getElementById("display").setAttribute('value', buffer + button.textContent);
            }
        }
    }
}) 

function CalculateResult(firstInput, secondInput, operator) {
    switch (operator){
        case "+":
            return firstInput + secondInput;
            break;
        case "-":
            return firstInput - secondInput;
            break;
        case "*":
            return firstInput * secondInput;
            break;
        case "/":
            return firstInput / secondInput;
            break;
    }
}
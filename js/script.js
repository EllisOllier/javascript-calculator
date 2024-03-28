let firstInput = 0
let secondInput = 0
let operator = "+"

document.addEventListener('click', function(e) {
    let button = buffer;
    let buffer = document.getElementById("display").getAttribute('value');
    if (button.tagName == "BUTTON"){
        if(buffer.id === "btnClear") {
            buffer = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (buffer.id === "btnResult") {
            secondInput = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(firstInput, secondInput, operator));
        } else if (buffer.id === "btnAdd" || buffer.id === "btnSubtract" || buffer.id === "btnMultiply" || buffer.id === "btnDivide"){
            firstInput = parseFloat(document.getElementById("display").getAttribute('value'));
            operator = button.value;
            document.getElementById("display").setAttribute('value', "");
        } else {
            if (buffer === null){
                document.getElementById("display").setAttribute('value', buffer.textContent);
            } else {
                document.getElementById("display").setAttribute('value', buffer + buffer.textContent);
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
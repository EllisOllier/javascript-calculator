let firstInput = 0
let secondInput = 0
let operator = "+"

document.addEventListener('click', function(e) {
    let button = e.target;
    let buffer = document.getElementById("display").getAttribute('value');
    if (button.tagName == "BUTTON"){
        if(e.target.id === "btnClear") {
            buffer = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (e.target.id === "btnResult") {
            secondInput = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(firstInput, secondInput, operator));
        } else if (e.target.id === "btnAdd" || e.target.id === "btnSubtract" || e.target.id === "btnMultiply" || e.target.id === "btnDivide"){
            firstInput = parseFloat(document.getElementById("display").getAttribute('value'));
            operator = button.value;
            document.getElementById("display").setAttribute('value', "");
        } else {
            if (buffer === null){
                document.getElementById("display").setAttribute('value', e.target.textContent);
            } else {
                document.getElementById("display").setAttribute('value', buffer + e.target.textContent);
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
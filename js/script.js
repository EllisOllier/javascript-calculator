let firstInput = 0
let secondInput = 0
let operatorInput = "+"

document.addEventListener('click', function(e) {
    let btn = e.target;
    let buffer = document.getElementById("display").getAttribute('value');
    if (btn.tagName == "BUTTON"){
        if(btn.id === "btnClear") {
            buffer = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (btn.id === "btnResult") {
            secondInput = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(firstInput, secondInput, operatorInput));
        } else if (btn.id === "btnAdd" || btn.id === "btnSubtract" || btn.id === "btnMultiply" || btn.id === "btnDivide"){
            firstInput = parseFloat(document.getElementById("display").getAttribute('value'));
            operatorInput = btn.value;
            document.getElementById("display").setAttribute('value', "");
        } else {
            if (buffer === null){
                document.getElementById("display").setAttribute('value', btn.textContent);
            } else {
                document.getElementById("display").setAttribute('value', buffer + btn.textContent);
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
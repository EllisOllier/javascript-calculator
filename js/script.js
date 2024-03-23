let num1 = 0
let num2 = 0
let operator = "+"

document.addEventListener('click', function(e) {
    let btn = e.target;
    let buffer = document.getElementById("display").getAttribute('value');
    if (btn.tagName == "BUTTON"){
        if(btn.id === "btnClear") {
            buffer = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (btn.id === "btnResult") {
            num2 = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(num1, num2, operator));
        } else if (btn.id === "btnAdd" || btn.id === "btnSubtract" || btn.id === "btnMultiply" || btn.id === "btnDivide"){
            num1 = parseFloat(document.getElementById("display").getAttribute('value'));
            operator = btn.value;
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

function CalculateResult(num1, num2, operator) {
    switch (operator){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    }
}
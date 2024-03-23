let num1 = 0
let num2 = 0
let operator = "+"

document.addEventListener('click', function(e) {
    let btn = e.target;
    let oldValue = document.getElementById("display").getAttribute('value');
    if (btn.tagName == "BUTTON"){
        if(e.target.id === "btnClear") {
            oldValue = "";
            document.getElementById("display").setAttribute('value', "");
        } else if (e.target.id === "btnResult") {
            num2 = parseFloat(document.getElementById("display").getAttribute('value'));
            document.getElementById("display").setAttribute('value', CalculateResult(num1, num2, operator));
        } else if (e.target.id === "btnAdd" || e.target.id === "btnSubtract" || e.target.id === "btnMultiply" || e.target.id === "btnDivide"){
            num1 = parseFloat(document.getElementById("display").getAttribute('value'));
            operator = btn.value;
            document.getElementById("display").setAttribute('value', "");
        } else {
            if (oldValue === null){
                document.getElementById("display").setAttribute('value', e.target.textContent);
            } else {
                document.getElementById("display").setAttribute('value', oldValue + e.target.textContent);
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
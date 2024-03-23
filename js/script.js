let displayBox = document.getElementById("display");

document.addEventListener('click', function(e) {
    let btn = e.target;
    switch (btn.id) {
        case "btnAdd":
            console.log("Add");
            break;
        case "btnSubtract":
            console.log("Subtract");
            break;
        case "btnMultiply":
            console.log("Multiply");
            break;
        case "btnDivide":
            console.log("Divide");
            break;
        case "btnResult":
            console.log("Result");
            break;
        case "btnSeven":
            console.log("7");
            break;
        case "btnEight":
            console.log("8");
            break;
        case "btnNine":
            console.log("9");
            break;
        case "btnFour":
            console.log("4");
            break;
        case "btnFive":
            console.log("5");
            break;
        case "btnSix":
            console.log("6");
            break;
        case "btnThree":
            console.log("3");
            break;
        case "btnOne":
            console.log("1");
            break;
        case "btnTwo":
            console.log("2");
            break;
        case "btnOne":
            console.log("1");
            break;
        case "btnZero":
            console.log("0");
            break;
        case "btnDecimal":
            console.log(".");
            break;
        case "btnClear":
            console.log("Clear")
            break;
    }
})
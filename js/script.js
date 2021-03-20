const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");

let displayValue = "", firstValue = 0, secondValue = 0, operator = "";

function add(a, b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a / b;
}
function operate(num1, num2, buttonId)
{
    switch(buttonId)
    {
        case "addButton":
            return add(num1, num2);
        case "subtractButton":
            return subtract(num1, num2);
        case "multiplyButton":
            return multiply(num1, num2);
        case "divideButton":
            return divide(num1, num2);
    }
}
function buttonClick(buttonId)
{
    // console.log(buttonId);
    switch(buttonId)
    {
        case "zeroButton":
            inputDisplay.textContent += "0"
            displayValue += "0";
            console.log(buttonId + ": " + displayValue);
            break;
        case "oneButton":
            inputDisplay.textContent += "1"
            displayValue += "1";
            console.log(buttonId + ": " + displayValue);
            break;
        case "twoButton":
            inputDisplay.textContent += "2";
            displayValue += "2";
            console.log(buttonId + ": " + displayValue);
            break;
        case "threeButton":
            inputDisplay.textContent += "3";
            displayValue += "3";
            console.log(buttonId + ": " + displayValue);
            break;
        case "fourButton":
            inputDisplay.textContent += "4";
            displayValue += "4";
            console.log(buttonId + ": " + displayValue);
            break;
        case "fiveButton":
            inputDisplay.textContent += "5";
            displayValue += "5";
            console.log(buttonId + ": " + displayValue);
            break;
        case "sixButton":
            inputDisplay.textContent += "6";
            displayValue += "6";
            console.log(buttonId + ": " + displayValue);
            break;
        case "sevenButton":
            inputDisplay.textContent += "7";
            displayValue += "7";
            console.log(buttonId + ": " + displayValue);
            break;
        case "eightButton":
            inputDisplay.textContent += "8";
            displayValue += "8";
            console.log(buttonId + ": " + displayValue);
            break;
        case "nineButton":
            inputDisplay.textContent += "9";
            displayValue += "9";
            console.log(buttonId + ": " + displayValue);
            break;
        case "divideButton":
            console.log(buttonId + ": " + displayValue);
            inputDisplay.textContent += " / ";
            if(firstValue === 0)
            {
                firstValue = parseInt(displayValue);
                displayValue = "";
            }
            operator = buttonId;
            break;
        case "multiplyButton":
            console.log(buttonId + ": " + displayValue);
            inputDisplay.textContent += " * ";
            if(firstValue === 0)
            {
                firstValue = parseInt(displayValue);
                displayValue = "";
            }
            operator = buttonId;
            break;
        case "subtractButton":
            console.log(buttonId + ": " + displayValue);
            inputDisplay.textContent += " - ";
            if(firstValue === 0)
            {
                firstValue = parseInt(displayValue);
                displayValue = "";
            }
            operator = buttonId;
            break;
        case "addButton":
            console.log(buttonId + ": " + displayValue);
            inputDisplay.textContent += " + ";
            if(firstValue === 0)
            {
                firstValue = parseInt(displayValue);
                displayValue = "";
            }
            operator = buttonId;
            break;
        case "clearButton":
            console.log(buttonId + ": " + displayValue);
            break;
        case "equalButton":
            console.log(buttonId + ": " + firstValue);
            console.log(buttonId + ": " + operator);
            if(firstValue !== 0)
            {
                secondValue = parseInt(displayValue);
                console.log(buttonId + ": " + secondValue);
                outputDisplay.textContent = inputDisplay.textContent + " = " + operate(firstValue, secondValue, operator);
                firstValue = 0;
                secondValue = 0;
                displayValue = "";
                operator = "";
                inputDisplay.textContent = "";
            }
            break;    
    }
}
function main()
{
    Array.from(document.querySelectorAll("button"))
        .forEach(button =>
            {
                button.addEventListener("click", () =>
                {
                    buttonClick(button.id);
                });
            });
    console.log("main() ran");
}
main();
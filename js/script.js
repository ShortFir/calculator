
// Future stuff maybe...
//
// Instead of case for buttonId, use an object(buttonId, value)...
// Numbers have a function, operators another, functions a third.
// Different addEvents for each I think.
//
// Array for the runningTotal and display string etc, combine them ?,
// then process the array on equals?

const inputDisplay = document.getElementById("inputDisplay");
const outputDisplay = document.getElementById("outputDisplay");

let displayString = "", currentValue = "", operator = "";
let runningTotal = 0;

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
function updateDisplay()
{
    inputDisplay.textContent = displayString;
}
function clearInputDisplay()
{
    displayString = "";
    currentValue = "";
    operator = "";
    runningTotal = 0;
    updateDisplay();
}
function operateButton(buttonId)
{
    (runningTotal === 0) ?
        runningTotal = parseFloat(currentValue) :
        runningTotal = operate(runningTotal, parseFloat(currentValue), operator);
    operator = buttonId; // placed after operate to avoid logic errors
    currentValue = "";
}
function displayOutput(displayArg)
{
    outputDisplay.textContent += displayArg + `\n`;
    outputDisplay.scrollTop = outputDisplay.scrollHeight;
}
function buttonClick(buttonId)
{
    console.log(`${buttonId}:Before:R:${runningTotal}:C:${currentValue}`);
    switch(buttonId)
    {
        case "zeroButton":
            currentValue += "0";
            displayString += "0";
            updateDisplay();
            // if(currentValue !== "")
            // {
            //     currentValue += "0";
            //     displayString += "0";
            //     updateDisplay();
            // }else
            // {
            //     displayOutput("Error! No leading zeros");
            // }
            break;
        case "oneButton":
            currentValue += "1";
            displayString += "1";
            updateDisplay();
            break;
        case "twoButton":
            currentValue += "2";
            displayString += "2";
            updateDisplay();
            break;
        case "threeButton":
            currentValue += "3";
            displayString += "3";
            updateDisplay();
            break;
        case "fourButton":
            currentValue += "4";
            displayString += "4";
            updateDisplay();
            break;
        case "fiveButton":
            currentValue += "5";
            displayString += "5";
            updateDisplay();
            break;
        case "sixButton":
            currentValue += "6";
            displayString += "6";
            updateDisplay();
            break;
        case "sevenButton":
            currentValue += "7";
            displayString += "7";
            updateDisplay();
            break;
        case "eightButton":
            currentValue += "8";
            displayString += "8";
            updateDisplay();
            break;
        case "nineButton":
            currentValue += "9";
            displayString += "9";
            updateDisplay();
            break;
        case "decimelButton":
            if(!currentValue.includes("."))
            {
                currentValue += ".";
                displayString += ".";
                updateDisplay();
            }
            break;
        case "divideButton":
            if(parseFloat(currentValue) !== 0 && currentValue !== ".")
            {
                displayString += `\u00F7`; // Divide unicode
                operateButton(buttonId)
                updateDisplay();
            }
            break;
        case "multiplyButton":
            if(parseFloat(currentValue) !== 0 && currentValue !== ".")
            {
                displayString += `\u00D7`; // Multiply unicode
                operateButton(buttonId)
                updateDisplay();
            }
            break;
        case "subtractButton":
            if(parseFloat(currentValue) !== 0 && currentValue !== ".")
            {
                displayString += `\u2212`; // Substract unicode
                operateButton(buttonId)
                updateDisplay();
            }
            break;
        case "addButton":
            if(parseFloat(currentValue) !== 0 && currentValue !== ".")
            {
                displayString += `\u002B`; // Plus unicode
                operateButton(buttonId)
                updateDisplay();
            }
            break;
        case "clearButton":
            clearInputDisplay();
            break;
        case "deleteButton":
            if(currentValue !== "")
            {
                currentValue = currentValue.split("").slice(0, -1).join("");
                displayString = displayString.split("").slice(0, -1).join("");
                updateDisplay();
            }else
            {
                (operator !== "") ?
                    displayOutput("Can't delete operator") :
                    displayOutput("Can't delete nothing");
            }
            break;
        case "equalButton":
            if(runningTotal === 0)
            {
                displayOutput("Nothing to calculate");
                break;
            }
            else if(parseFloat(currentValue) === 0)
            {
                displayOutput("Can't divide by Zero!");
                break;
            }
            else if(runningTotal !== 0 &&
                parseFloat(currentValue) !== 0 &&
                    currentValue !== "." &&
                        currentValue !== "")
            {
                operateButton(buttonId);
                displayOutput(displayString + " = " +
                    ((runningTotal % 1 !== 0) ?
                        runningTotal.toFixed(2) : runningTotal));
                clearInputDisplay();
            }
            break;    
    }
    console.log(`${buttonId}::After:R:${runningTotal}:C:${currentValue}`);
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
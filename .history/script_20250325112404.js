let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstValue = null;

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.dataset.value;

        if (value === "C") {
            currentInput = "";
            firstValue = null;
            operator = "";
            display.textContent = "0";
        } else if (value === "calculate") {
            if (firstValue !== null && operator) {
                let secondValue = parseFloat(currentInput);
                if (operator === "+") {
                    currentInput = (firstValue + secondValue).toString();
                } else if (operator === "-") {
                    currentInput = (firstValue - secondValue).toString();
                } else if (operator === "*") {
                    currentInput = (firstValue * secondValue).toString();
                } else if (operator === "/") {
                    currentInput = (firstValue / secondValue).toString();
                }
                operator = "";
                firstValue = null;
                display.textContent = currentInput;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (firstValue === null) {
                firstValue = parseFloat(currentInput);
            }
            operator = value;
            currentInput = "";
        } else {
            if (currentInput === "0") {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});

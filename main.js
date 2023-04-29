const display = document.querySelector(".display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === "") return;
  if (["+", "-", "*", "/"].includes(display.value.slice(-1))) return;
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => clearDisplay(), 1500);
  }
}

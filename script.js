let operator = "";
let memory = [];
let expression = "";
let number = "";
let output = 0;
let isEvaluated = false;

let display = document.getElementById("display");
let history = document.getElementById("history");

function numberPress(n) {
  if (isEvaluated) return;
  number += n;
  expression += n;
  display.textContent = expression;
}
function operatorPress(op) {
  if (expression == "" || operator != "" || isEvaluated) return;
  expression += op;
  number = "";
  display.textContent = expression;
}
function calculate() {
  output = eval(expression);
  expression = expression + " = " + output;
  output = output.toFixed(2);
  display.textContent = output;
  history.textContent = "";
  displayHistory(expression);
  isEvaluated = true;
}
function displayHistory(expression) {
  if (memory.length === 10) {
    memory.shift();
  }
  memory.push(expression);
  memory.map((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<p>${item}</p>`;
    history.appendChild(card);
  });
  //   clearDisplay();
}
function clearDisplay() {
  display.textContent = "";
  number = "";
  expression = "";
  operator = "";
  output = "";
  isEvaluated = false;
}

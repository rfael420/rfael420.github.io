const display = document.getElementById("display");
const body = document.body;

const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)"
];

function appendValue(value) {
  display.value += value;
  changeBackground();
}

function clearDisplay() {
  display.value = "";
  changeBackground();
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    changeBackground();
  } catch (error) {
    display.value = "Error";
    changeBackground();
  }
}

function changeBackground() {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  body.style.background = randomGradient;
}

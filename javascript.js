let number1 = 0;
let number2 = 0;
let operator = '';

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function operate(o, a, b) {
  switch (o) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return sub(a, b);
      break;
    case "*":
      return mul(a, b);
      break;
    case "/":
      return div(a, b);
      break;
  }
}

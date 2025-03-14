let numObj = {
  one: "",
  two: "",
  operator: ""
};

let state = "one";

let numbers = document.querySelectorAll(".number")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let operators = document.querySelectorAll(".operator")

function cl() {
  numObj.one = '';
  numObj.two = '';
  state = "one";
  display.textContent = 0;
}

function round(n) {
  Math.round(n * 1000) / 1000;
}

clear.addEventListener('click', cl)

numbers.forEach((button) => {
  button.addEventListener('click', () => {
    if (numObj[state] === '' && button.textContent == '0') {
    } else {
    numObj[state] += button.textContent;
    }
    trim();
  })
});

function trim() {
  if (numObj.one.length > 8) {
    numObj.one = numObj.one.substr(numObj.one.length - 8);
  }
  if (numObj.two.length > 8) {
    numObj.two = numObj.two.substr(numObj.two.length - 8)
  }
  display.textContent = numObj[state];

}

operators.forEach((operator) => {
  let o = operator.textContent;
  operator.addEventListener('click', () => {
    if (numObj.two != "" && o != "=") {
      console.log(`if; n.two: '${numObj.two}' o: '${o}'`);
      numObj.one = operate(numObj.operator, +numObj.one, +numObj.two);
      numObj.one = numObj.one.toString();
      numObj.two = "";
      trim();
      display.textContent = numObj.one;
    } else {
      console.log(`else; n.two: '${numObj.two}' o: '${o}'`);
      state = "two";
      switch (o) {
        case '+':
          numObj.operator = '+';
          break;
        case '*':
          numObj.operator = '*';
          break;
        case '/':
          numObj.operator = '/';
          break;
        case '-':
          break;
          numObj.operator = '-';
        case '.':
          state = "one";
          numObj[state] += '.'
          display.textContent = numObj[state];
          break;
        case '=':
          if (numObj.two == "") {
          } else {
            numObj.one = operate(numObj.operator, +numObj.one, +numObj.two);
            numObj.one = numObj.one.toString();
            trim()
            display.textContent = numObj.one;
          }
          break;
      }
    }
  })
});



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

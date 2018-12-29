let flag;
let flagTwo;
let flagThree = 3;
let value;
let n;
// 3 * 3 * 3 return 9 and then 9 * 3? Worry ab case?
// irrational root then square repeating decimals
function clickNum(number) {
  let p = document.getElementById('real-input');
  if (flag == 1) {
    p.innerHTML = 0;
    n = 0;
    flag = 0;
  }  
  if (flagTwo == 2) {
    n += String(number);
  } else if (p.innerHTML == "0") {
    n = String(number);
  } else {
    n += String(number);
  }
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flagThree = 0;
}

function clickPi() {
  let p = document.getElementById('real-input');
  if (flag == 1) {
    n = Math.PI.toFixed(9);
    p.innerHTML = Math.PI.toFixed(9);
    flag = 0;
  } else {
    n = Math.PI.toFixed(9);
    p.innerHTML = Math.PI.toFixed(9);
  } 
}

function allClear() {
  let p = document.getElementById('real-input');
  p.innerHTML = 0;
  let pTwo = document.getElementById('intermediaries');
  pTwo.innerHTML = "";
  n = 0;
}
// decimal returns after first decimal digit is entered
function decimal() {
  let p = document.getElementById('real-input');
  if (flagThree == 3) {
    n = 0 + ".";
  } else {
    n += ".";
  } 
  p.innerHTML = Number(n).toLocaleString('arab');
  flagTwo = 2;
}

function plusMinus() {
  let p = document.getElementById('real-input');
  n = Number(n) * -1;
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
}

let num = "";
let operation = "";

function multiply() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "multiplication";
}

function divide() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "division";
}

function add() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "addition";
}

function subtract() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "subtraction";
}

function power() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "power";
}

function root() {
  let p = document.getElementById('real-input');
  num = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  p.innerHTML = 0;
  n = 0;
  operation = "root";
}

function equals() {
  let p = document.getElementById('real-input');
  let numTwo = Number(n);
  let pTwo = document.getElementById('intermediaries');
  pTwo.innerHTML += " and " + numTwo;
  let result = "";
  if (operation == "multiplication") {
    result = num * numTwo;
  }  
  if (operation == "division") {
    result = num / numTwo;
  }
  if (operation == "addition") {
    result = num + numTwo;
  } 
  if (operation == "subtraction") {
    result = num - numTwo;
  }
  if (operation == "power") {
    result = num ** numTwo;
  }
  if (operation == "root") {
    if (num < 0 && (numTwo % 2) == 0) {
      result = 0;
    } else if (num < 0 && (numTwo % 2) != 0) {
      result = (num * -1) ** (1 / numTwo);
      result = result * -1;
    } else {
      result = num ** (1 / numTwo);
    }
  }
  if (operation == "") {
    pTwo.innerHTML = p.innerHTML;
    result = 0;
  }
  
  n = result;
  
  if (result < 1000000000 && result >= 0) {
    p.innerHTML = result.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (result > -1000000000 && result < 0) {
    p.innerHTML = result.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = result.toExponential([5]);
  }
  flag = 1;
  operation = "";
}

function percent() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Number(n) / 100;
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

// degrees? radians? switch?

function sin() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Math.sin(Number(n));
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function cos() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Math.cos(Number(n));
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function tan() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Math.tan(Number(n));
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function factorial() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  if ((Number(n) % 1) == 0) {
    let x = Number(n);
    while (x > 1) {
      n = Number(n) * (x - 1);
      x--;  
    }
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
    p.innerHTML = Number(n).toExponential([5]);
    }
    flag = 1;
  } else {
    p.innerHTML = 0;
    n = 0;
  }
}

function square() {  
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Number(n) ** 2;
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function cube() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Number(n) ** 3;
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function sqrt() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Number(n) ** (1 / 2);
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

function cubert() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML = Number(n).toExponential([5]);
  }
  n = Number(n) ** (1 / 3);
  if (Number(n) < 1000000000 && Number(n) >= 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (Number(n) > -1000000000 && Number(n) < 0) {
    p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = Number(n).toExponential([5]);
  }
  flag = 1;
}

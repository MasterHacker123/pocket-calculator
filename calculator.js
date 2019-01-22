let flag;
let flagTwo = 0;
let flagThree = 3;
let flagFour = 0;
let flagFive = 0;
let value;
let n = 0;
function clickNum(number) {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (flag == 1) {
    p.innerHTML = 0;
    pTwo.innerHTML = "";
    n = 0;
    flag = 0;
  }
  if (flagFive == 5) {
    flagFive = 0;
    falseNum = 0;
    falseInteg = 0;
    operation = "";
  }
  if (p.innerHTML == "0") {
    n = String(number);
    p.innerHTML = n;
  } else if (p.innerHTML == "0." || p.innerHTML == "0.0" || p.innerHTML == "0.00" || p.innerHTML == "0.000" || p.innerHTML == "0.0000" || p.innerHTML == "0.00000" || p.innerHTML == "0.000000" || p.innerHTML == "0.0000000") {
    n += String(number);
    p.innerHTML = n;
  } else {
    n += String(number);
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = Number(n).toExponential([5]);
    }
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
  if (flagFive == 5) {
    flagFive = 0;
    falseNum = 0;
    falseInteg = 0;
    operation = "";
  }
  flag = 1;
}

function allClear() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  pTwo.innerHTML = "";
  p.innerHTML = 0;
  n = 0;
  flagTwo = 0;
  flagFour = 0;
  operation = "";
  operationTwo = "";
  operationThree = "";
  flagFive = 0;
  falseNum = 0;
  falseInteg = 0;  
}

function decimal() {
  let p = document.getElementById('real-input');
  if (flagThree == 3 || flag == 1) {
    n = 0 + ".";
    p.innerHTML = n;
    flag = 0;
  } else if (flagTwo == 2) {
    console.log("yooo");
  } else {
    n += ".";
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'}) + ".";
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      p.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'}) + ".";
    } else {
      p.innerHTML = Number(n).toExponential([5]);
    }
  }
  flagTwo = 2;
  if (flagFive == 5) {
    flagFive = 0;
    operation = "";
    falseNum = 0;
    falseInteg = 0;
  }  
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
let operationTwo = "";
let operationThree = "";
let result = "";
let resultTwo = 0;
let integ = 0;

function multiply() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "multiplication";
    pseudoEquals();
  } else {
    subNum = Number(n);
    p.innerHTML = 0;
    operation = "multiplication";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  flagFive = 0;
  falseNum = 0;
  falseInteg = 0;
  operationThree = "multiplication";
}

function divide() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "division";
    pseudoEquals();
  } else {
    subNum = Number(n);
    p.innerHTML = 0;
    operation = "division";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  flagFive = 0;
  falseNum = 0;
  falseInteg = 0;
  operationThree = "division";
}

function add() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "addition";
    pseudoEquals();
  } else {
    subNum = Number(n);
    p.innerHTML = 0;
    operation = "addition";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  flagFive = 0;
  falseNum = 0;
  falseInteg = 0;
  operationTwo = "addition";
}

function subtract() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "subtraction";
    pseudoEquals();
  } else {
    subNum = Number(n);
    p.innerHTML = 0;
    operation = "subtraction";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  flagFive = 0;
  falseNum = 0;
  falseInteg = 0;
  operationTwo = "subtraction";
}

function power() {
  let p = document.getElementById('real-input');
  num = Number(n);
  p.innerHTML = 0;
  n = 0;
  operation = "power";
  flagTwo = 0;
  falseNum = 0;
  falseInteg = 0;
  flagFive = 0;
}

function root() {
  let p = document.getElementById('real-input');
  num = Number(n);
  p.innerHTML = 0;
  n = 0;
  operation = "root";
  flagTwo = 0;
  falseNum = 0;
  falseInteg = 0;
  flagFive = 0;
}
let falseNum = 0;
let falseInteg = 0; 

function equals() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  let numTwo = Number(n);
  if (flagFive == 5) {
    if (operation == "addition") {
      result = falseInteg + falseNum;
    } else if (operation == "subtraction") {
      result = falseInteg - falseNum;
    } else if (operation == "multiplication") {
      result = falseInteg * falseNum;
    } else if (operation == "division") {
      result = falseInteg / falseNum;
    }
    falseInteg = result;
  } else if (integ != 0) {
    if (operation == "multiplication" && operationTwo == "addition") {
      result = integ + num * numTwo;
    } else if (operation == "multiplication" && operationTwo == "subtraction") {
      result = integ - (num * numTwo);
    } else if (operation == "multiplication") {
      result = integ * numTwo;
    }
    if (operation == "division" && operationTwo == "addition") {
      result = integ + num / numTwo;
    } else if (operation == "division" && operationTwo == "subtraction"){
      result = integ - num / numTwo;
    } else if (operation == "division") {
      result = integ / numTwo;
    }
    if (operation == "addition") {
      result = (subNum) + (numTwo);
    }
    if (operation == "subtraction") {
      result = (integ) - (numTwo);
    }
    if (operation == "power") {
      result = integ ** numTwo;
    }
    if (operation == "root") {
      if (integ < 0 && (numTwo % 2) == 0) {
        result = 0;
      } else if (integ < 0 && (numTwo % 2) != 0) {
        result = (integ * -1) ** (1 / numTwo);
        result = result * -1;
      } else {
        result = integ ** (1 / numTwo);
      }
    }
    if (operation == "") {
      result = integ;
    }
    falseNum = Number(n);
    falseInteg = result; 
    operationTwo = "";
    operationThree = "";
    integ = 0;
  } else {
    if (operation == "multiplication") {
      result = subNum * numTwo;
    }
    if (operation == "division") {
      result = subNum / numTwo;
    }
    if (operation == "addition") {
      result = (subNum) + (numTwo);
    }
    if (operation == "subtraction") {
      result = (subNum) - (numTwo);
    }
    if (operation == "power") {
      result = num ** numTwo;
    }
    if (operation == "root") {
      if (num < 0 && (numTwo % 2) == 0) {
        result = 0;
        pTwo.innerHTML = "Error";
      } else if (num < 0 && (numTwo % 2) != 0) {
        result = (num * -1) ** (1 / numTwo);
        result = result * -1;
      } else {
        result = num ** (1 / numTwo);
      }
    }
    if (operation == "") {
      result = p.innerHTML;
    }
    falseNum = Number(n);
    falseInteg = result; 
    operationTwo = "";
    operationThree = "";
  }
  n = result;

  if (result < 1000000000 && result >= 0) {
    p.innerHTML = result.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (result > -1000000000 && result < 0) {
    p.innerHTML = result.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    p.innerHTML = result.toExponential([5]);
  }

  if (result == Infinity || result == -Infinity) {
    pTwo.innerHTML = "Error";
  }
  flag = 1;
  flagTwo = 0;
  flagFour = 0;
  flagFive = 5;
}

function pseudoEquals() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  let numTwo = Number(n);
  if (operation == "multiplication" || operation == "division") {
    num = numTwo;
    integ = subNum;
  }
  if (operationThree == "multiplication") {
    if (operationTwo == "addition") {
      resultTwo = subNum + num * numTwo;
      operationTwo = "";
      operationThree = "";
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
    } else if (operationTwo == "subtraction") {
      resultTwo = subNum - num * numTwo;
      operationTwo = "";
      operationThree = "";
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
    } else {
      resultTwo = subNum * numTwo;
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
      operationThree = "";
    }
    integ = resultTwo;
    n = resultTwo;
    num = n;

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  }
  if (operationThree == "division") {
    if (operationTwo == "addition") {
      resultTwo = subNum + num * numTwo;
      operationTwo = "";
      operationThree = "";
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
    } else if (operationTwo == "subtraction") {
      resultTwo = subNum - num * numTwo;
      operationTwo = "";
      operationThree = "";
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
    } else {
      resultTwo = subNum / numTwo;
      n = resultTwo;
      integ = resultTwo;
      subNum = resultTwo;
      operationThree = "";
    }
    integ = resultTwo;
    n = resultTwo;
    // num = n;
    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  }

  if (operation == "addition" && operationTwo == "addition") {
    num = numTwo;
    resultTwo = (subNum) + (num);
    operationTwo = "addition";
    n = resultTwo;
    integ = resultTwo;
    subNum = resultTwo;

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  } else if (operation == "addition" && operationTwo == "subtraction") {
    num = numTwo;
    resultTwo = (subNum) - (num);
    operationTwo = "addition";
    n = resultTwo;
    integ = resultTwo;
    subNum = resultTwo;

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  }
  if (operation == "subtraction" && operationTwo == "addition") {
    num = numTwo;
    resultTwo = (subNum) + (num);
    operationTwo = "subtraction";
    n = resultTwo;
    integ = resultTwo;
    subNum = resultTwo;

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  } else if (operation == "subtraction" && operationTwo == "subtraction") {
    num = numTwo;
    resultTwo = (subNum) - (num);
    operationTwo = "subtraction";
    n = resultTwo;
    integ = resultTwo;
    subNum = resultTwo;

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      p.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      p.innerHTML = resultTwo.toExponential([5]);
    }
  }
  if (operation == "") {
    resultTwo = 0;
  }

  if (resultTwo == Infinity || result == -Infinity) { 
    pTwo.innerHTML = "Error";
  }

  flagOne = 1;
  flagTwo = 0;
}

function percent() {
  let p = document.getElementById('real-input');
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

function sin() {
  let p = document.getElementById('real-input');
  let pTwo = document.getElementById('intermediaries');
  if (n == 3.141592654 || n == 6.283185308) {
    n = 0;
  } else {
    n = Math.sin(Number(n));
  }
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
  if (n == 1.570796327 || n == 4.712388981) {
    n = 0;
  } else {
    n = Math.cos(Number(n));
  }
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
  if (n == 1.570796327 || n == 4.712388981) {
    n = 0;
    pTwo.innerHTML = "Error";
  } else {
    n = Math.tan(Number(n));
  }
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
  n = Number(n) ** 2;
  if (n == Infinity) {
    pTwo.innerHTML = "Error";
  }
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
  n = Number(n) ** 3;
  if (n == Infinity || n == -Infinity) {
    pTwo.innerHTML = "Error";
  }
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
  if (n < 0) {
    n = 0;
    pTwo.innerHTML = "Error";
  } else {
    n = Number(n) ** (1 / 2);
  }
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

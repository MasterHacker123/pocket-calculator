let flag;
let flagTwo = 0;
let flagThree = 3;
let flagFour = 0;
let value;
let n;
// decimal pt for large number division and the nums themselves small font or something
// get error messages going up (mine are zero)
function clickNum(number) {
  let p = document.getElementById('real-input');
  if (flag == 1) {
    p.innerHTML = 0;
    n = 0;
    flag = 0;
  }
  if (p.innerHTML == "0") {
    n = String(number);
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
}

function allClear() {
  let p = document.getElementById('real-input');
  p.innerHTML = 0;
  let pTwo = document.getElementById('intermediaries');
  pTwo.innerHTML = "";
  n = 0;
  flagTwo = 0;
  flagFour = 0;
  operationTwo = "";
  operationThree = "";
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
    let pTwo = document.getElementById('intermediaries');
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = Number(n).toExponential([5]);
    }
    p.innerHTML = 0;
    operation = "multiplication";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  operationThree = "multiplication";
}

function divide() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "division";
    pseudoEquals();
  } else {
    subNum = Number(n);
    let pTwo = document.getElementById('intermediaries');
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = Number(n).toExponential([5]);
    }
    p.innerHTML = 0;
    operation = "division";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  operationThree = "division";
}

function add() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "addition";
    pseudoEquals();
  } else {
    subNum = Number(n);
    let pTwo = document.getElementById('intermediaries');
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = Number(n).toExponential([5]);
    }
    p.innerHTML = 0;
    operation = "addition";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  operationTwo = "addition";
}

function subtract() {
  let p = document.getElementById('real-input');
  if (flagFour == 4) {
    operation = "subtraction";
    pseudoEquals();
  } else {
    subNum = Number(n);
    let pTwo = document.getElementById('intermediaries');
    if (Number(n) < 1000000000 && Number(n) >= 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (Number(n) > -1000000000 && Number(n) < 0) {
      pTwo.innerHTML = Number(n).toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = Number(n).toExponential([5]);
    }
    p.innerHTML = 0;
    operation = "subtraction";
  }
  n = 0;
  flagTwo = 0;
  flagFour = 4;
  operationTwo = "subtraction";
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
  flagTwo = 0;
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
  flagTwo = 0;
}

function equals() {
  let p = document.getElementById('real-input');
  let numTwo = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (numTwo < 1000000000 && numTwo >= 0) {
    pTwo.innerHTML += " and " + numTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else if (numTwo > -1000000000 && numTwo < 0) {
    pTwo.innerHTML += " and " + numTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
  } else {
    pTwo.innerHTML += " and " + numTwo.toExponential([5]);
  }
  if (integ != 0) {
    if (operation == "multiplication") {
      result = integ * numTwo;
    }
    if (operation == "division") {
      result = integ / numTwo;
    }
    if (operation == "addition") {
      result = (integ) + (numTwo);
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
      pTwo.innerHTML = p.innerHTML;
      result = 0;
    }
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
  flagTwo = 0;
  flagFour = 0;
  operation = "";
}

function pseudoEquals() {
  let p = document.getElementById('real-input');
  let numTwo = Number(n);
  let pTwo = document.getElementById('intermediaries');
  if (operation == "multiplication" || operation == "division") {
    num = numTwo;
    // operationThree = something, clone the opTwo and opThree variables running order
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
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

    if (resultTwo < 1000000000 && resultTwo >= 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else if (resultTwo > -1000000000 && resultTwo < 0) {
      pTwo.innerHTML = resultTwo.toLocaleString('arab', {maximumFractionDigits: '9'});
    } else {
      pTwo.innerHTML = resultTwo.toExponential([5]);
    }
  }
  if (operation == "power") {
    resultTwo = num ** numTwo;
  }
  if (operation == "root") {
    if (num < 0 && (numTwo % 2) == 0) {
      resultTwo = 0;
    } else if (num < 0 && (numTwo % 2) != 0) {
      resultTwo = (num * -1) ** (1 / numTwo);
      resultTwo = result * -1;
    } else {
      resultTwo = num ** (1 / numTwo);
    }
  }
  if (operation == "") {
    pTwo.innerHTML = p.innerHTML;
    resultTwo = 0;
  }


  flagOne = 1;
  flagTwo = 0;
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

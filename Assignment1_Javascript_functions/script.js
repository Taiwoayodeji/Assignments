function add() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 + number2;
  console.log(result);
  document.getElementById("result").textContent = "Result: " + result;
}

function subtract() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 - number2;
  console.log(result);
  document.getElementById("result").textContent = "Result: " + result;
}

function multiply() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 * number2;
  console.log(result);
  document.getElementById("result").textContent = "Result: " + result;
}

function divide() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  if (number2 !== 0) {
    let result = number1 / number2;
    console.log(result);
    document.getElementById("result").textContent = "Result: " + result;
  } else {
    console.log("Error: Cannot divide by zero");
    document.getElementById("result").textContent =
      "Error: Cannot divide by zero";
  }
}

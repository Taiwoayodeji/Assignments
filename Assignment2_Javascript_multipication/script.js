function generateTable() {
  const num = document.getElementById("number").value;
  const container = document.getElementById("table-container");
  container.innerHTML = "";

  if (num) {
    for (let i = 1; i <= 10; i++) {
      const result = num * i;
      const p = document.createElement("p");
      p.textContent = `${num} x ${i} = ${result}`;
      p.className = result % 2 === 0 ? "even" : "odd";
      container.appendChild(p);
    }
  }
}

function clearResults() {
  document.getElementById("table-container").innerHTML = "";
  document.getElementById("number").value = "";
}

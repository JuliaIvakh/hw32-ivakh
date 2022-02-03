function createMatrix(rows, cols) {
  const table = document.createElement("table");
  table.setAttribute("border", "1");
  document.body.append(table);

  let counter = 0;
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 1; j <= cols; j++) {
      ++counter;
      const td = document.createElement("td");
      td.innerHTML = counter;
      tr.append(td);
    }
  }
}
console.log(createMatrix(10, 10));

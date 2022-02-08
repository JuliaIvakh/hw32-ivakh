const resultSize = 10;

function tableCreator(tableDatas, tableRows) {
  const table = document.createElement("table");
  let content = 1;
  for (let j = 1; j <= tableRows; j++) {
    const tr = document.createElement("tr");

    for (let i = 1; i <= tableDatas; i++) {
      const td = document.createElement("td");
      td.textContent = content++;
      tr.append(td);
    }
    table.append(tr);
  }
  document.body.append(table);
  return table;
}

tableCreator(resultSize, resultSize);

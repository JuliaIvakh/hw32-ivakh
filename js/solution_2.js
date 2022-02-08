function generateList(arr) {
  const list = document.createElement("ul");
  for (const item of arr) {
    if (!Array.isArray(item)) {
      const li = document.createElement("li");
      li.textContent = item;
      list.append(li);
    } else {
      const li = document.createElement("li");
      li.append(generateList(item));
      list.append(li);
    }
  }
  document.body.append(list);
  return list;
}

const resultArray = [1, 2, [1.1, 1.2, 1.3], 3];
generateList(resultArray);

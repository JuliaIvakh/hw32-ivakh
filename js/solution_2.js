const arr1 = [1, 2, 3];
const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  const ul = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("li");
    listItem.append(
      Array.isArray(array[i])
        ? generateList(array[i])
        : document.createTextNode(array[i])
    );
    ul.append(listItem);
  }

  document.body.append(ul);
  return ul;
}
console.log(generateList(arr1));
console.log(generateList(arr2));

const ul = document.getElementById("ulId");
const attrList = ul.attributes;

//Task 1
const arrAttr = [];
for (let attribute of attrList) {
  arrAttr.push(attribute.nodeValue);
}
console.log(arrAttr);

//Task 2
const arrAttrNames = [];
for (let attrName of attrList) {
  arrAttrNames.push(attrName);
}
console.log(arrAttrNames);

//Task 3
const newLi = (ul.lastElementChild.innerHTML = "Привет меня зовут Юля");
console.log(newLi);

// Task 4
function newAttrFirst() {
  ul.firstElementChild.setAttribute("data-my-name", "Julia");
}
newAttrFirst();
console.log(ul.firstElementChild);

// Task 5
function remove() {
  ul.removeAttribute("data-dog-tail");
}
remove();
console.log(ul.attributes);

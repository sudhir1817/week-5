let sum = 0;
const numbers = [65, 44, 12, 4];

function addNumberToSum(item) {
  sum += item;
}

numbers.forEach(addNumberToSum);

console.log("Sum of numbers:", sum);

const fruits = ["apple", "orange", "cherry"];

function logFruit(fruit) {
  console.log(fruit);
}

fruits.forEach(logFruit);
const names = ["John", "Jane", "Bob", "Alice"];

const listItems = [];

names.forEach(function (name) {
  listItems.push("<li>" + name + "</li>");
});

console.log(listItems.join(""));

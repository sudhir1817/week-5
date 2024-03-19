const array0 = [1, 4, 9, 16];
// Pass a function to map
const map0 = array0.map(function(x) 
{return x * 3});
console.log(map0);

const numbers = [4, 9, 16, 25];
const map2 = numbers.map(Math.sqrt);
console.log(map2);

const array1 = [1, 4, 9, 16];
const map3 = array1.map(function(x) {
  return x * 2;
});
console.log(map3);
//forEach
var num1 = [1, 2, 3];
num1.forEach(function (num) { return console.log(num * 2); });
//map
var num2 = [1, 2, 3];
var doubledNumbers = num2.map(function (num) { return num * 2; });
console.log(doubledNumbers);
//filter
var num3 = [1, 2, 3, 4, 5];
var evenNumbers = num3.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers);
//reduce
var num4 = [1, 2, 3, 4];
var sum = num4.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum);

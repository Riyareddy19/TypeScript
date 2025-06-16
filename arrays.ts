//Readonly
const names: readonly string[] = ["riya"];
console.log(names);

//Type Inference
const numbers = [1, 2, 3];
numbers.push(10);
console.log(numbers);
let head: number = numbers[0];
console.log(head);
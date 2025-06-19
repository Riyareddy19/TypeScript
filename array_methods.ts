//forEach
const num1 : number[] = [1, 2, 3];
num1.forEach((num: number) => console.log(num*2));

//map
const num2: number[] = [1, 2, 3];
const doubledNumbers: number[] = num2.map((num : number) => num * 2);
console.log(doubledNumbers);

//filter
const num3: number[] = [1, 2, 3, 4, 5];
const evenNumbers: number[] = num3.filter((num: number) => num % 2 === 0);
console.log(evenNumbers);

//reduce
const num4: number[] = [1, 2, 3, 4];
const sum: number = num4.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
console.log(sum);
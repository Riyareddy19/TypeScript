//Return Type

function my_string(): string{
  return "Hey I am Riya";
}
console.log(my_string ());

//Void Return Type

function print_text(): void {
  console.log('Hello!');
}
print_text();

//Parameters

function multiply(a: number, b: number)
{
  return a * b;
}
console.log(multiply(2, 5));

//Optional Parameters

function add(a: number, b: number, c?: number)
{
  return a + b + (c || 0);
}
console.log(add(2, 6)); //c is optional, ans --> 2+6+0 = 8

//Default Parameters

function power(base: number, exeponent: number = 2)
{
  return base ** exeponent;
}
console.log(power(5)); //they second parameter is set default.

//Named Parameters

function divide ({dividend, divisor}: {dividend: number, divisor: number})
{
  return dividend / divisor;
}
console.log(divide({dividend: 16, divisor: 4}));

//Type Alias

type Neg = (value: number) => number; 
const neg_func: Neg = (value) => value * -1;

console.log(neg_func(20));
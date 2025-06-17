//Return Type
function my_string() {
    return "Hey I am Riya";
}
console.log(my_string());
//Void Return Type
function print_text() {
    console.log('Hello!');
}
print_text();
//Parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
//Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 6)); //c is optional, ans --> 2+6+0 = 8
//Default Parameters
function power(base, exeponent) {
    if (exeponent === void 0) { exeponent = 2; }
    return Math.pow(base, exeponent);
}
console.log(power(5)); //they second parameter is set default.
//Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 16, divisor: 4 }));
var neg_func = function (value) { return value * -1; };
console.log(neg_func(20));

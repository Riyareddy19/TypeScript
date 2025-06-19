//for loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//for of loop
var colors = ['red', 'green', 'blue'];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
//for in loop
var person = { name: 'Alice', age: 23 };
for (var key in person) {
    console.log("".concat(key, " : ").concat(person[key]));
}
//while loop
var count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
//do while loop
var x = 0;
do {
    console.log(x);
    x++;
} while (x < 10);

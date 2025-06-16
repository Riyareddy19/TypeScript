//Special Types
//any
var v = true; //actual = boolean
v = "string"; //due to any we can convert into string
console.log(Math.round(v)); //string can not be roundoff, output(NaN)
//never
// let x: never = true;
//undefined
var y = undefined;
console.log(typeof y);
//null
var z = null;
console.log(typeof z);

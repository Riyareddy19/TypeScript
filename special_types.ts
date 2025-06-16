//Special Types

//any
let v: any = true; //actual = boolean
v = "string"; //due to any we can convert into string
console.log(Math.round(v)); //string can not be roundoff, output(NaN)

//never
// let x: never = true;

//undefined
let y: undefined = undefined;
console.log(typeof y);

//null
let z: null = null;
console.log(typeof z);
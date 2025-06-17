//casting with as

let x: unknown = 'hello';
console.log((x as string).length);

//casting with <>

let str: unknown = 'laptop';
console.log((<string>str).length);

//Force Casting

let str1 = 24;
console.log((str1 as unknown) as number);
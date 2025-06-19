//for loop
for(let i = 0; i < 5; i++){
  console.log(i);
}

//for of loop
const colors : string[] = ['red', 'green', 'blue'];
for(const color of colors) {
  console.log(color);
}

//for in loop
const personInfo = {name : 'Alice', age: 23}
for(const key in personInfo) {
  console.log(`${key} : ${personInfo[key]}`);
}

//while loop
let count = 0;
while(count < 3) {
  console.log(count);
  count++;
}

//do while loop
let num = 0;
do{
  console.log(num);
  num++;
} while(num<10);
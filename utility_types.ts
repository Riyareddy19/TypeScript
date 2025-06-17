//Partial

interface point {
  x:number;
  y:number;
}
let point_part : Partial<point> = {};
point_part.y = 10;
console.log(point_part);

//Required

interface my_car{
  brand : string;
  model : string;
  mileage? : number;
}

let myCar : Required<my_car> = {
  brand : 'TATA',
  model : 'Nexon',
  mileage : 12000
}; 
console.log(myCar);

//Record
const name_age : Record<string, number> = {
  'Hopper' : 23,
  'Joyce' : 20
};
console.log(name_age);

//Omit

interface Person_info{
  name : string;
  age : number;
  salary? : number;
}
const person_info : Omit<Person_info, 'age' | 'location'> = {
  name : 'Mike',
};
console.log(person_info);

//Pick

interface list {
  name : string;
  surname? : string;
  roll_no : number;
}
const mylist : Pick<list, 'roll_no' > = {
  roll_no : 46
};
console.log(mylist);

//Exclude

type Primitive = string | number | boolean
const value : Exclude <Primitive, string> = true;
console.log(typeof(value));

//Return Type

type point_generator = () => {x : number, y : number};
const point: ReturnType<point_generator> = {
  x : 10,
  y : 20
};
console.log(point);

//Parameters

type Point_priter = (p : {x : number; y : number}, q : {z : number; p : number}) => void;

const pointPrinter: Parameters<Point_priter>[1] = {
  z: 30,
  p: 40
};
console.log(pointPrinter);

//Readonly

interface Customer {
  name : string;
  phoneNo : number;
}
const customer: Readonly<Customer> = {
  name : "Lucus",
  phoneNo : 3255678235
};
console.log(customer);
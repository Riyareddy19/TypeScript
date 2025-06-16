//basic object type
const car: {type: string, model: string, year: number} = {
  type : "Toyota",
  model : "Fortuner",
  year : 2011
};
console.log(car);

//Type Inference

const car2 = {
  type: "Ford",
  model : "XUV",
  year : 2020
};
car2.type = "Mahindra"; 
// car2.type = 2; //error
console.log(car2);

//optional property

const car3: { type: string, mileage?: number } = { 
  type: "BMW"
};
car3.mileage = 2000;
console.log(car3);

//index signature

const nameAge: { [index: string]: number } = {};
nameAge.riya = 18;
console.log(nameAge);

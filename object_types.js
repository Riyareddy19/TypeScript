//basic object type
var car = {
    type: "Toyota",
    model: "Fortuner",
    year: 2009
};
console.log(car);
//Type Inference
var car2 = {
    type: "Ford",
    model: "XUV",
    year: 2020
};
car2.type = "Mahindra";
// car2.type = 2; //error
console.log(car2);
//optional property
var car3 = {
    type: "Toyota"
};
car3.mileage = 2000;
console.log(car3);
//index signature
var nameAgeMap = {};
nameAgeMap.riya = 18;
console.log(nameAgeMap);

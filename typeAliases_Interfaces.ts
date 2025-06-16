//Type Aliases

type Caryear = number
type Cartype = string
type Carmodel = string
type Car = {
  year: Caryear,
  type: Cartype,
  model: Carmodel
}

const carYear: Caryear = 2020
const carType: Cartype = "Mahindra"
const carmodel: Carmodel = "XUV"
const car_det: Car = {
  year: carYear,
  type: carType,
  model: carmodel
};
console.log(car_det);

//Interfaces

interface Triangle {
  height: number;
  base: number;
}

const triangle: Triangle = {
  height: 20,
  base: 10
};
console.log(triangle);

//Interfaces

interface Square{
  side : number
}
interface ColoredSquare extends Square{
  color : string
}
const coloredSquare: ColoredSquare = {
  side : 10,
  color : "yellow"
};
console.log(coloredSquare);
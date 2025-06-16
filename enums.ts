//Numeric Enums
//Default
enum direction {
  north,
  south,
  east,
  west
}
let currentDirection = direction.north;
console.log(currentDirection); //0

//initialized

enum direction2 {
  north = 1,
  south,
  east,
  west
}
console.log(direction2.north); //1
console.log(direction2.west); //4

//Fully-initalized

enum Status {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(Status.NotFound);//404
console.log(Status.Success);//200

//string enum

enum directions3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
};
console.log(directions3.North); //North
console.log(directions3.West); //west
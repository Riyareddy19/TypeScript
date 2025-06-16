//Numeric Enums
//Default
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
var currentDirection = direction.north;
console.log(currentDirection); //0
//initialized
var direction2;
(function (direction2) {
    direction2[direction2["north"] = 1] = "north";
    direction2[direction2["south"] = 2] = "south";
    direction2[direction2["east"] = 3] = "east";
    direction2[direction2["west"] = 4] = "west";
})(direction2 || (direction2 = {}));
console.log(direction2.north); //1
console.log(direction2.west); //4
//Fully-initalized
var Status;
(function (Status) {
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Accepted"] = 202] = "Accepted";
    Status[Status["BadRequest"] = 400] = "BadRequest";
})(Status || (Status = {}));
console.log(Status.NotFound); //404
console.log(Status.Success); //200
//string enum
var directions3;
(function (directions3) {
    directions3["North"] = "North";
    directions3["East"] = "East";
    directions3["South"] = "South";
    directions3["West"] = "West";
})(directions3 || (directions3 = {}));
;
console.log(directions3.North); //North
console.log(directions3.West); //west

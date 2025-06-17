//Members : Types
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
// //Inheritance : Extends
// interface Shape2 {
//   getArea: () => number;
// }
// class Rectangle2 implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}
//   public getArea(): number {
//     return this.width * this.height;
//   }
// }
// class Square2 extends Rectangle2 {
//   public constructor(width: number) {
//     super(width, width);
//   }
// }
// const my_Square = new Square2(20);
// console.log(my_Square.getArea());

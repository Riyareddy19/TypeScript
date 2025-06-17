//Members : Types

class Person {
  first_name: string;
}
const person = new Person();
person.first_name = "Jane";
console.log(person);

//Members : Visibility

class Person2 {
  // private name: string;

  public constructor(private name : string)
  {}
  public getName(): string{  // get getName():
    return this.name;
  }
}
const person2 = new Person2("Max");
console.log(person2.getName()); //(person2.getName), if used 'get'.

//Parameter Properties

class Person3 {
  public constructor(private name : string){}

  public getName(): string{
    return this.name;
  }
}
const person3 = new Person3("Robin");
console.log(person3.getName());

//Readonly

class Person4 {
  private readonly name: string;

  public constructor(name: string)
  {
    this.name = name;
  }
  public getName() : string{
    return this.name;
  }
}
const person4 = new Person4("Steve");
console.log(person4.getName());

//Inheritance : Implements

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape{
  public constructor(protected readonly width: number, protected readonly height: number) {}
  
  public getArea() : number {
    return this.width * this.height;
  }
}
const myRect = new Rectangle(10,20);
console.log(myRect.getArea());

//Inheritance : Extends

interface Shape2 {
  getArea: () => number;
}

class Rectangle2 implements Shape2 {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
      
class Square2 extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }
}
const my_Square = new Square2(20);
console.log(my_Square.getArea());

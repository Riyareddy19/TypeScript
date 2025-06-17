//Functions

function createPair<S, T>(v1: S, v2: T) : [S, T]
{
  return [v1, v2];
}
console.log(createPair<string, number>('Welcome', 2025));

//Classes

class Value<T> {
  private num: T | undefined;

  constructor(private name: string) {}

  public set_value(value: T){
    this.num = value;
  }

  // public getValue(): T | undefined {
  //   return this.num;
  // }

  public toString() : string {
    return `${this.name} : ${this.num}`;
  }
}
let myValue = new Value<number>('My Number');
myValue.set_value(50);
console.log(myValue.toString());


//Type Aliases

type New<T> = {value: T};
const new_value: New<number> = {value : 10};
console.log(new_value.value); //10
console.log(new_value); // {value : 10}
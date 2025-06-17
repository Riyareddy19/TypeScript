//Functions
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('Welcome', 2025));
//Classes
var Value = /** @class */ (function () {
    function Value(name) {
        this.name = name;
    }
    Value.prototype.set_value = function (value) {
        this.num = value;
    };
    // public getValue(): T | undefined {
    //   return this.num;
    // }
    Value.prototype.toString = function () {
        return "".concat(this.name, " : ").concat(this.num);
    };
    return Value;
}());
var myValue = new Value('My Number');
myValue.set_value(50);
console.log(myValue.toString());
var new_value = { value: 10 };
console.log(new_value.value);

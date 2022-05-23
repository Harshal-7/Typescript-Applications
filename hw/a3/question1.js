var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.Number1 = a;
        this.Number2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(15, 10);
var obj2 = new Arithmetic(25, 15);
var Ret = 0;
console.log("");
console.log("Arithetics from obj1 : ");
Ret = obj1.Addition();
console.log("Addition is : " + Ret);
Ret = obj1.Substraction();
console.log("Substraction is : " + Ret);
Ret = obj1.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = obj1.Division();
console.log("Division is : " + Ret);
console.log("");
console.log("Arithetics from obj2 : ");
Ret = obj2.Addition();
console.log("Addition is : " + Ret);
Ret = obj2.Substraction();
console.log("Substraction is : " + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = obj2.Division();
console.log("Division is : " + Ret);
console.log("");

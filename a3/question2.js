var Circle = /** @class */ (function () {
    function Circle(a, b) {
        if (b === void 0) { b = 3.14; }
        this.Radius = a;
        this.PI = b;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(5, 6.28);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of circle is : " + Ret);
Ret = obj2.Area();
console.log("Area of circle is : " + Ret);

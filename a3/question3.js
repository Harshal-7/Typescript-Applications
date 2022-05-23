var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumfarance = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(5);
var obj2 = new CircleX(5, 6.28);
var Ret = 0;
console.log("obj1 : ");
Ret = obj1.Area();
console.log("Area of circle is : " + Ret);
Ret = obj1.Circumfarance();
console.log("Circumfarance of circle is : " + Ret);
console.log(" ");
console.log("obj2 : ");
Ret = obj2.Area();
console.log("Area of circle is : " + Ret);
Ret = obj2.Circumfarance();
console.log("Circumfarance of circle is : " + Ret);

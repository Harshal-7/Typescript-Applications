class Circle
{
    Radius : number;
    PI : number;

    constructor(a:number,b:number = 3.14)
    {
        this.Radius = a;
        this.PI = b;
    }

    Area()
    {
        var Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    Circumfarance()
    {
        var Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var obj1 = new CircleX(5);
var obj2 = new CircleX(5,6.28);

var Ret : number = 0;

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

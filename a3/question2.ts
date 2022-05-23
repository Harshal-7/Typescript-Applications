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

var obj1 = new Circle(5);
var obj2 = new Circle(5,6.28);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of circle is : " + Ret);

Ret = obj2.Area();
console.log("Area of circle is : " + Ret);
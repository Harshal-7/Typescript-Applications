class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(a:number,b:number)
    {
        this.Number1 = a;
        this.Number2 = b;
    }

    Addition()
    {
        var Ans : number = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }
    Substraction()
    {
        var Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }
    Multiplication()
    {
        var Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }
    Division()
    {
        var Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }
}

var obj1 = new Arithmetic(15,10);
var obj2 = new Arithmetic(25,15);

var Ret : number = 0;

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

// Object Oriented Programming (OOP)

// Class Defination
class Arithmetic
{
    // Characteristics
    No1 : number;
    No2 : number;

    constructor(a:number,b:number)
    {
        this.No1 = a;
        this.No2 = b;
    }

    Addition()      // Behaviour
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction()  // Behaviour
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var obj1 = new Arithmetic(10,11);
var obj2 = new Arithmetic(20,21);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition is : " + Ret);

Ret = obj1.Substraction();
console.log("Substraction is : " + Ret);

Ret = obj2.Addition();
console.log("Addition is : " + Ret);

Ret = obj2.Substraction();
console.log("Substraction is : " + Ret);




// Kay karaycha ahe ?       (Behaviours/Function)
// Addition & Substraction

// Te Karnyakrta ky karav lagel ?   (Characteristics/Variable)
// 2 Number value thewayla ani 1 Number answer thewayla
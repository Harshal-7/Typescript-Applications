// Procedure Oriented Programming (POP)

function Addition(No1 : number, No2 : number): number
{
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}

function Substraction(No1 : number, No2 : number): number
{
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}

var Ret : number = 0;
var Value1 : number = 11;
var Value2 : number = 10;

Ret = Addition(Value1,Value2);
console.log("Addition is : " + Ret);

Ret = Substraction(Value1,Value2);
console.log("Substraction is : " + Ret);
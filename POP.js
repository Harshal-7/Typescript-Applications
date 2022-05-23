// Procedure Oriented Programming (POP)
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var Ret = 0;
var Value1 = 11;
var Value2 = 10;
Ret = Addition(Value1, Value2);
console.log("Addition is : " + Ret);
Ret = Substraction(Value1, Value2);
console.log("Substraction is : " + Ret);

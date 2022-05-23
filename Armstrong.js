var Arithmetic = /** @class */ (function () {
    function Arithmetic(No) {
        this.DigCnt = 0;
        this.DigCnt = 0;
        this.Sum = 0;
        this.temp = No;
        this.Num = No;
    }
    Arithmetic.prototype.CheeckArmStrong = function () {
        while (this.Num != 0) {
            this.DigCnt++;
            this.Num = Math.floor(this.Num / 10);
        }
        this.Num = this.temp;
        while (this.Num != 0) {
            this.Digit = Math.floor(this.Num % 10);
            this.Sum = this.Sum + this.Perfect(this.Digit, this.DigCnt);
            this.Num = Math.floor(this.Num / 10);
        }
        if (this.Sum == this.temp) {
            return true;
        }
        else {
            return false;
        }
    };
    Arithmetic.prototype.Perfect = function (base, power) {
        var Mult = 1;
        var cnt = 0;
        for (cnt = 1; cnt <= power; cnt++) {
            Mult = Mult * base;
        }
        return Mult;
    };
    return Arithmetic;
}());
var Value = 153;
var Ret;
var obj = new Arithmetic(Value);
Ret = obj.CheeckArmStrong();
if (Ret == true) {
    console.log("It is an ArmStrong Number");
}
else {
    console.log("It is not an ArmStrong Number");
}

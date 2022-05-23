class Arithmetic
{
    Digit : number;
    DigCnt : number;
    Sum : number;
    Num : number
    temp : number;

    constructor(No : number)
    {
        this.DigCnt = 0;
        this.DigCnt = 0;
        this.Sum = 0;
        this.temp = No;
        this.Num = No;

    }

    CheeckArmStrong()
    {
        while(this.Num != 0)
        {
            this.DigCnt++;
            this.Num = Math.floor(this.Num / 10);
        }
        
        this.Num = this.temp;

        while(this.Num != 0)
        {
            this.Digit = Math.floor(this.Num % 10);

            this.Sum = this.Sum + this.Perfect(this.Digit,this.DigCnt);
            
            this.Num = Math.floor(this.Num / 10);
        }

        if(this.Sum == this.temp)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    Perfect(base:number,power:number) : number
    {
        var Mult : number = 1;
        var cnt : number = 0;

        for(cnt = 1; cnt <= power; cnt++)
        {
            Mult = Mult * base;
        }

        return Mult;
    }

}

var Value : number = 153;
var Ret : boolean;

var obj = new Arithmetic(Value);

Ret = obj.CheeckArmStrong();

if(Ret == true)
{
    console.log("It is an ArmStrong Number");
}
else
{
    console.log("It is not an ArmStrong Number");
}
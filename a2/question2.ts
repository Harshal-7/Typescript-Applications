function main() : void
{
    let Arr : number[] = [23,6,7,4,5,7];
    var Size : number = 6;
    var ret : number = 0;

    ret = Summation(Arr,Size);

    console.log("Summation is : " + ret);
}

function Summation(Brr : number[],Length : number) : number
{
    var Cnt : number = 0;
    var Sum : number = 0;

    for(Cnt = 0; Cnt < Length; Cnt++)
    {
        Sum = Sum + Brr[Cnt];
    }
    return Sum;
}
main();
function main() : void
{
    let Arr : number[] = [23,89,6,29,56,45,77,32];
    var Size : number = 8;
    var ret : number = 0;

    ret = Maximum(Arr,Size);

    console.log("Maximum element is : " + ret);
}

function Maximum(Brr : number[],Length : number) : number
{
    var Cnt : number = 0;
    var Max : number = 0;
    Max = Brr[0];

    for(Cnt = 1; Cnt < Length; Cnt++)
    {
        if(Brr[Cnt] > Max)
        {
            Max = Brr[Cnt];
        }
    }
    return Max;
}
main();
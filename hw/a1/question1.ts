main();
function main() : void
{
    var value1 : number = 301;
    var value2 : number = 242;
    var value3 : number = 32;

    var ret : number = 0;

    ret = Maximum(value1,value2,value3);
    
    console.log("Maximum number is : " + ret);
}

function Maximum(no1:number,no2:number,no3:number) : number
{
    var max : number = 0;

    if(no1 > no2 && no1 > no3)
    {
        max = no1;
    }
    else if(no2 > no1 && no2 > no3)
    {
        max = no2;
    }
    else if(no3 > no1 && no3 > no2)
    {
        max = no3;
    }
    return max;

}
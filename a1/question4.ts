function main() : void
{
    var value1 : number = 972;
    var ret : boolean;

    ret = ChkPrime(value1);

    if(ret == true)
    {
        console.log("It is a prime number");
    }
    else
    {
        console.log("It is not a prime number");
    }
}

function ChkPrime(no : number) : boolean
{
    var Cnt : number = 0;
    var Flag : boolean = true;

    for(Cnt = 2; Cnt < no; Cnt++)
    {
        if(no % Cnt == 0)
        {
            Flag = false;
            break;
        }
    }

    if(Flag == false)
    {
        return false;
    }
    else
    {
        return true;
    }


}

main();

function main() : void
{
    var value1 : number = 20;
    var ret : number = 0;

    DisplayFactor(value1);
}

function DisplayFactor(no : number) : void
{
    var Cnt : number = 0;

    for(Cnt = 1; Cnt <= (no/2); Cnt++)
    {
        if(no % Cnt == 0)
        {
            console.log(Cnt);
        }
    }
}

main();

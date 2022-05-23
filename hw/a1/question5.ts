function main() : void
{
    var value1 : number = 20;
    Fibonacci(value1);
}

function Fibonacci(no : number) : void
{
    var Cnt : number = 0;
    var firstnum : number = 1;
    var lastnum : number = 0;
    var sum : number = 0;

    for(Cnt = 1; Cnt <= no; Cnt++)
    {
        sum = firstnum + lastnum;
        
        if(sum >= no)
        {
            break;
        }

        console.log(sum);
        
        firstnum = lastnum;
        lastnum = sum;
    }
}
main();
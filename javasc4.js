function Test(num1,num2)
{
    if(num1 < 0 || num2 < 0)
    {
        return undefined;
    }

    return Math.round(Math.pow((Math.sqrt(num1) + Math.sqrt(num2)), 2));    
}

console.log(Test(-2,2));

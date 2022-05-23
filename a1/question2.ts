function main() : void
{
    var value1 : number = 15;
    var PI : number = 3.14;
    var ret : number = 0;

    ret = Area(value1,PI);
    console.log("Area of circle : " + ret);
}

function Area(radius : number, pi : number = 3.14) : number
{
    var ans : number = 0;
    ans = pi * radius * radius;
    return ans;
}
main();

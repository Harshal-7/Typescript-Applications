var myObj = {
    "Japan" : "Tokyo",
    "India" : "Delhi",
    "USA" : "Washington D.C.",
    "England" : "London",
    "Korea" : "Seoul",
}

function checkObj(checkProp)
{
    if(myObj.hasOwnProperty(checkProp))
    {
        return "Property Found";
    }
    else
    {
        return "Property Not-Found";
    }
}

console.log(checkObj("France"));
console.log(checkObj("Japan"));
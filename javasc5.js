function LookUpFunction(value)
{
    var result = "";

    var lookUp = {
        "Japan" : "Tokyo",
        "India" : "Delhi",
        "USA" : "Washington D.C.",
        "England" : "London",
        "Korea" : "Seoul",
    };

    result = lookUp[value];

    return result;
}

console.log(LookUpFunction("Japan"));
console.log(LookUpFunction("India"));
console.log(LookUpFunction("Korea"));
console.log(LookUpFunction("Singapore"));
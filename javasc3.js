function nextInLine(arr,item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before : " + JSON.stringify(testArr));

console.log("Popped Item : " + nextInLine(testArr,6));
console.log("Popped Item : " + nextInLine(testArr,7));
console.log("Popped Item : " + nextInLine(testArr,8));

console.log("After : " + JSON.stringify(testArr));

// function nextInLine(arr,item)
// {
//     arr.push(item);
//     return item;
// }

// var testArr = [1,2,3,4,5];

// console.log("Before : " + JSON.stringify(testArr));

// console.log("item added : " + nextInLine(testArr,6));
// console.log("item added : " + nextInLine(testArr,7));
// console.log("item added : " + nextInLine(testArr,8));

// console.log("After : " + JSON.stringify(testArr));
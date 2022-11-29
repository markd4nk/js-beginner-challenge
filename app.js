function addition(num1, num2) {
   return  num1 + num2
}
console.log(addition(3,5));

function hoursIntoSeconds(hour1){
    return hour1 * 3600
}
console.log(hoursIntoSeconds(2));


function calcPerimeter(length, width){
    return length * 2 + width *2 
}
console.log(calcPerimeter(4, 5));

function calcTriangleArea(base, height){
    return (base*height)/2

}
console.log(calcTriangleArea(3,2));

function appendFrontend(string){
    return string + "frontend"
}
console.log(appendFrontend("apple"));


function sumGreaterThan100(numb1, numb2){
   
    return  numb1 + numb2 >= 100
}
console.log(sumGreaterThan100(100, 0));


function lessThanOrEqualToZero(number1){
    return number1 <= 0
}
console.log(lessThanOrEqualToZero(6));


function oppositeBoolean(bool){
    return !bool;
}
console.log(oppositeBoolean(false));


function isNotZero(number0){
    return number0 !== 0
}
console.log(isNotZero(2));


function calcRemainder(x, y){
    return x % y;
}
console.log(calcRemainder(8, 9));


function isOdd(odd){
    return odd % 2 !== 0;
}
console.log(isOdd(5));


function booleanInteger(argument){
  return argument % 2 === 0 ? 1 : -1;
  
}
console.log(booleanInteger(8));
 


function isLoggedInAndSubscribed(log, sub){
    return (log === "LOG") && (sub === "SUB")
    

}
console.log(isLoggedInAndSubscribed("notlogged", "SUB"));
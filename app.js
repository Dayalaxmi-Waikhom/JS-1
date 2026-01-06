
//C Mini tasks 
//1 
let x = 1;
let y = 2;

function sum() {
  return x + y;
}
console.log(sum());

//2
function AreaOfCircle(r) {
  return Number((Math.PI * r * r).toFixed(2));
}
let radius = 2;
let area = AreaOfCircle(radius);

console.log("Area of Circle:", area);

//3
function greeting(letters){
    return letters[0].toUpperCase() + letters.slice(1).toLowerCase();
}
console.log(greeting("hello"));

//4
function lastDigit(n) {
  return Math.abs(n) % 10;
}


let result = lastDigit(123453);
console.log(result);
//5
 function isEven(n) {
  return n % 2 === 0;
}
let nnumber = 6;

console.log(isEven(nnumber));

//6 
function compare(a,b){
    if (a>b){
        console.log("b is greater than a");
    } else if (a === b) {
        console.log("a is equals to b");
    }else {
        console.log("a is less than b"); 
    }
}
console.log(compare(6,6));
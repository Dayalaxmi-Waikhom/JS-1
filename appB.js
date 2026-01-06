//B Fix the code 
//1
let string = "100";
let number = Number(string);
console.log(number);

let num = 20;
console.log(number+num);

//2 
let a = 1;
let b = 2;
[a,b] = [b,a]; // a = 2 , b= 1
console.log(a,b);

//3 

function isTruthly(value) {
    return Boolean(value)
}
console.log(isTruthly(1)); 

//4 
 let age = 30;
 if ( age >= 18 ) {
    console.log("Adult");
 } else{
    console.log("Minor");
 };
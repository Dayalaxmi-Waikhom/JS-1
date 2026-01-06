console.log(typeof null); //object Output 

console.log([] == false); // Output True 

console.log("5" + 2); //output 52 (5 is string and 2 is number)

console.log("5" - 2); // output 3 

console.log(Boolean(""));  //output false

console.log(Boolean("0"));  //output true

console.log(0 === -0); //output true( bsc 0 is not an integer )

console.log(NaN === NaN); //output false

console.log(Number("10px")); //output NaN (bsc the value of number is given in string)

console.log(1 + true + "2"); //output 22 (bsc we consider true as 1, so when we added string and number we get 22 

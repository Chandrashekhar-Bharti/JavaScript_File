// let score = "33"

// console.log(typeof score);
// console.log(typeof(score)); // score used as a method  used this ()

// getting string because let score ="33" treat as string 
// let score =33 is getting number

// let score = "33abs"
// print then getting number but here score has "33abs"
// let score1 = undefined //print NaN 
// let score2 = Null // print 0
// score = true print 1 and false print 0
// console.log(typeof score);
// console.log(typeof score1);

// let valueInNumber=Number(score)
//        here Number key is classbased so is guranteed to print score as number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
let scores = "Shekhar"
console.log(typeof scores);

let isLoggedIn = "shekhar"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
// 1 => true,; 0=> false
// "" => false
// "shekhar" => true

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************** Operations *****************************

let value = 3
let negValue = -value
console.log(negValue);
/*
Basic operation
console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2**3);
console.log(2/3);
console.log(2%2);
*/ 

let str1 = "hello";
let str2 = " Shekhar"
let str3 =str1+str2;
console.log(str3);
 

/*
console.log("1" + 2);
console.log(1 + "2");
console.log("1"+"2");// here 12 value print hoga
console.log(1+2+"2")// here 1st arrive number then treat as number print 32 it's work on 3 values
*/

// These some operation but not prefer in development
// console.log(+true);
// console.log(+"");
// let num1, num2,num3
// num1=num2=num3 = 2+2

let gameCounter =100;
gameCounter++;
console.log(gameCounter);

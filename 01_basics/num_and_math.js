
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //toPrecision() is gets the presicion value here is like 123.9 
const number = 42.56
console.log(number.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // its getting generally 0 to 1 show output is 0.1,0.2,....

// if you want to print random value b/w 1 to 9
console.log((Math.random()*10) + 1); //if multiply 10 then one value shift in left side and +1 is not getting only get 1 not below 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// (max-min+1) is getting the range and min is getting minimum value
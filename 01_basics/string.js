
// this 1ST method decrare of string
const name ="shekhar"
const repoCount=50

// Stirng concatenation thats old method not to preferred
// console.log(name + repoCount + "value");

// using modern method

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// here using back stick 
// in placeholder we can direct apply method 

// 2ND Methodwe also declare string in this type


const gameName = new String ('webhost-hc-com')
/*
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,5)
console.log(newString);

const gameName1 = "strings"
console.log(gameName1);
const anotherString = gameName1.slice(-7,3)
//  slice function taking also negative value if start negative value then start ending of the string
console.log(anotherString); // output - str

*/
const newStringOne = "   Nilesh    "
console.log(`This is string ${newStringOne}`);
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nitesh.com/nitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // checking sundar has present or not in the url if is present then getting true otherwise false

console.log(gameName.split('-'));



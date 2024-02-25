// for of

// ["", "", ""] // string passes in array
// [{}, {}, {}]  // object passes in array

const arr = [1, 2, 3, 4, 5]

/*
for (const iterator of object) {
                                               here object means what value pass like here arr 
}*/ //syntax -> for of loop

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)  // print each char and also print space
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // this line not print because map holds unique value and this line alredy above define


// console.log(map);
for (const key of map) {
    // console.log(key);    //print the array format
    
}

for (const [key, value] of map) {     // key and value ko alag alag use krne ke liye [key,value ] ko bracket me write kiye hai    
//                                           //isko use nhi krte to sabhi value array ke form me print hota hai
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {    // this line is not  execute because object is not iterate like this
//     console.log(key, ':-', value);
    
// }
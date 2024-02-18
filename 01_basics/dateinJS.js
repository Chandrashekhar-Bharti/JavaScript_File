// Dates

let myDate = new Date()
// console.log(myDate.toString()); // output sat feb 17 2024 07:09:50
// console.log(myDate.toDateString()); // here print date as string like sat Feb 17 2024
// console.log(myDate.toLocaleString()); // print date as locale like 2/17/2024 and getting time
// console.log(typeof myDate); // date is object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
// date and month start with 0
console.log(newDate.getMonth()); //for get exact month we get +1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
let date = new Date ("01-12-2023")
console.log(date.getTime()); //its getting milliseconds for since 1 jan 1970 till date 01-12-2023 time now
let myTimeStamp = Date.now()

console.log(myTimeStamp); //its getting milliseconds for since 1 jan 1970 till date now time

// covert milliseconds to seconds
// its getting seconds for divide 1000 but return points value  so we use Math.floor function
console.log(Math.floor(Date.now()/1000));



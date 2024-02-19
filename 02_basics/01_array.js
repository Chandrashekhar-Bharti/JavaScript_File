// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron man", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // insert element 
// myArr.push(7)
// myArr.pop()     //remove last element

// myArr.unshift(9) //insert element at the first index
// myArr.shift()  // remove from begginig of the array

// console.log(myArr.includes(9));    // return true or false if the value is in the array
   
// console.log(myArr.indexOf(3));     // returns the position of the element

            // -1 means that it does not exist on this array

// const newArr = myArr.join()    //join() ->  transforms an array into a string


// console.log(myArr);
// console.log( newArr);

// slice method: returns  elements between two points
// console.log(myArr.slice(2, 5))      //from 2 to 5 (not included 5)
                                //if we put only one parameter it will go until the end of the array

                                // splice method : changes the content of the array
                        /* myArr.splice(1,3)  
                                // here in splice() is get 1 to 3 element and 
                                oginal array -> [0,1,2,3,4,5]
                                splice(1,3) get [1,2,3]
                                and original manipulate means these [1,2,3] delete from original  array
                                so now arr -> [0,4,5,]
                         */
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(2, 5)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);
console.log(myn2); 
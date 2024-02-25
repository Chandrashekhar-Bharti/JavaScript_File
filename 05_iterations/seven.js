const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers           // here below used chaining concept used
                .map((num) => num * 10 ) 
                .map( (num) => num + 1)                          
                .filter( (num) => num >= 40) // in filter if condition is true then return 
                        //  filter return either true  or false

console.log(newNums);
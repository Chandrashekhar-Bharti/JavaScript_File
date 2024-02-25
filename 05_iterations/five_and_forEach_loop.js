const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (val){       
//     console.log(val);
// } )
                                //here call function like arrow and normal function both are working same
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // here write only reference of printMe function and it print all item of array


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// objects passes in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); 
} )
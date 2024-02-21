//var c = 300 //dont recommend to use var 
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b); //because b is define under if block scope{} and we cant access b outside the if block scope {}
// console.log(c);


function one(){
    const username = "shekhar"

    function two(){       
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // same condition like var b it cant access outside the block scope

    two() // function two can be access of parent function i.e. function one() 

}

//one()      // here function one () is execute then after function two () is execute so print only  shekhar in output because we are calling function two inside function one and function two has its own

if (true) {
    const username = "shekhar"
    if (username === "shekhar") {
        const website = " youtube"
        console.log(username + website);   //execute these line so get shekhar + youtube
    }
    // console.log(website); // these getting error because we cant access website  out side the if block so its only accessible inside the if block
}

// console.log(username); // thse getting error because we cant access username out side the if block so its only accessible inside the if block


// ++++++++++++++++++ interesting ++++++++++++++++++

// these type of function declaration

/*
console.log(addone(5)) // these execute perfect and get output is 6

function addone(num){
    return num + 1
}
 
*/

// addTwo(5)  // these execute but get error because addTwo fuction is hold in a variable so we cannat access 'addTwo()' function before initialization
const addTwo = function(num){
    return num + 2
    
}
console.log(addTwo(5)) // these execute perfect
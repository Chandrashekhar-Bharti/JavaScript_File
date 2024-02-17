// Primitive data type
        //    -> 7 type :- String,Number, Boolean, Null,Undefined, Symbol,BigInt


        const score = 100; // not need to define the their data type like Number
        const scoreValue = 10.8;
        
        const isLogged = false
        const out = null;
        
        let userEmail; // result is undefined
        /*
        const id = Symbol('123')
        const anotherid =Symbol('123') // both are have same value but is has different 
        console.log(id);
        console.log(anotherid);
        console.log(id===anotherid);
        
        // Non_Primitive( Reference)
                //  -> 3Types : Array, object, Function
        
        // Array
         const fruits = ["mongo","orange","apple"];
        //  Object
        {
                name: "Shekhar";
                age: 23;
                lastname : "Bharti"
        
        }// you can use object  using var name like
         let myObject = {
                id:23,
                accontNo : 23536,
         }
        
         const myFunction = function(){
                console.log("Hii, how are you");
         }
        
        //  finding  data type of any variable using "typeof" function
        */
        /*
        console.log(typeof out); // output object
        console.log(typeof myFunction); // function but called as "object fuction"
        console.log(typeof undefined);// undefined
        console.log(typeof null); //object
        console.log(typeof Boolean); // boolean
        console.log(typeof Number); // number
        console.log(typeof String); // string
        console.log(typeof id); // symbol
        */
        
        // ***********************************************************************
        // stack used for Primitive Data type
        // example of stack//  
        let userId = "shekhar"
        
        let anotherUserId = userId;
        anotherUserId = "chandrashekhar";
        
        console.log(userId);
        console.log(anotherUserId);
        
        // Heap used for Non-primitive data type
        // example of Heap
        let userOne = {
                email: "user@gmail.com",
                upi: "user@ybl"
        
        }
        
        let userTwo = userOne;
        userTwo.email = "shekhar@google.com"
        
        console.log(userOne.email);
        console.log(userTwo.email); 
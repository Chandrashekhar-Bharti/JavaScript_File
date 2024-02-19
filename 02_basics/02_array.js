const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //is push array under array o/t -> ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]
 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //because 1 array contain another array so here access   flash


const allHeros = marvel_heros.concat(dc_heros) //concate limit only one value at a time
console.log(allHeros); 

// const all_new_heros = [...marvel_heros, ...dc_heros] // another way of concate and these concate more than one value 

// console.log(all_new_heros);
/*
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(1) // flat  method is used to remove the nested array  and make it one dimensional array
                                                             // but flat(1) is get depth of the array  and make it to single dimension

console.log(real_another_array);

*/

// console.log(Array.isArray("Hitesh")) // these not array
// console.log(Array.from("Hitesh"))  // convert string to array  
// console.log(Array.from({name: "hitesh"}))    // interesting   //these give empty array because here told him which value like key anc their value make a array


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));  //Array.of() is used to make array from set of elements
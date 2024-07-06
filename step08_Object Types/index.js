"use strict";
let personInformation = {
    name: 'Faiza',
    age: 23,
    email: 'faiza23@gmail.com'
};
// TypeScript can infer the types of properties based on their values.
let person2 = {
    name: 'Faiza',
    age: 21,
    email: 'Faiza@gmail.com'
};
console.log(person2);
// person2.name =  2 //error
// let person3 : {name: string, age : number, email: string}= {  //Error
//     name:'Sana',
//     age: 20,
// }
// person3.email = 'sana@gmail.com' //not work
// console.log(person3)
//Index Signature 
// allow you to define the types of keys and values for objects when the exact properties are not known in advance
let ageGap = {};
ageGap.Sana = 21; //No error
// ageGap.Faiza = "Twenty" // Type 'string' is not assignable to type 'number'.

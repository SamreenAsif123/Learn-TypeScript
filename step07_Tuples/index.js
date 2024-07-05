"use strict";
//Tuple is a typed array
//It has a pre defined Length and type for each index.
let myTuple = ['Hafsa', 20, true];
console.log(myTuple);
console.log(myTuple[1]);
myTuple.push('Faiqa');
console.log(myTuple); //We have no type safety in our tuple for indexes 3+
//But it is best practice to use readonly 
let readonlyTuple = [1, "Hello"];
readonlyTuple[0] = 2;
console.log(`Readonly Tuple : ${readonlyTuple}`); // Error: Cannot assign to '0' because it is a read-only property.
//---------------------------------------------------------------
//Advantages:
//Ensures a fixed number of elements with specific types
// Makes it clear what type of data is expected.
//Important Points :
//The number of elements in a tuple is fixed.
//The types of the elements are defined and cannot change
//Useful for returning multiple values from a function, storing related data of different types together.
///Named Tuple Or Label Tuple :
//You can use name or labels for better readability.
let personInformation = ['Safa', 19, 'Female', true];
//Destructuring Tuples:
//extract elements from a tuple and assign them to variables.
//Create a tuple with different types.
let myOtherTuple = ['Hafsa', true];
//Extract elements into variables.
let [str, bool] = myOtherTuple;
//Now, we can use these variables separately
console.log(str);
console.log(bool);
//Tuples are also used in Functions
function getPerson() {
    return ['Adnan ', 15];
}
let [PersonName, age] = getPerson();
console.log([PersonName, age]);

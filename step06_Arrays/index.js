"use strict";
const fruitNames = ['Orange', 'Mango', 'Apple', 'Banana', 'Strawberry', 'Dates'];
console.log(fruitNames);
console.log(fruitNames[3]);
//If i want to push another value in an array .
fruitNames.push('watermelon');
console.log(`Fruit list after adding another vvalue : ${fruitNames}`);
// fruitNames.push(3); //error
// console.log(fruitNames) //error
//Another way to make array. In this method we can add value after making an array
const friendNames = [];
friendNames[0] = 'Shahnaz';
friendNames[1] = 'Amna';
friendNames[2] = 'Ayesha';
console.log(friendNames);
//The readonly keyword can prevent arrays from being changed.
const subjectList = ['Chemistry', 'Biology', 'Physics', 'Urdu', 'English'];
// subjectList.push ('Computer Science'); //error
//changing the value of array
const colorList = ['Blue', 'Black', 'Red', 'Brown', 'Yellow', 'Peach'];
console.log(`Before changing : ${colorList}`);
colorList[4] = 'White';
console.log(`after Changing : ${colorList}`);
//Converting an array to a string
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
// const demoElement = document.getElementById("demo");
// if (demoElement !== null) {
//     demoElement.innerHTML = colorList.toString();
// }
// console.log(demoElement)
//TO access full array
// const favoriteCartoon : string[] =  ['Chotta Bheem', 'Main Jaan or meri pyari mama ', 'Doremon', 'TOm and Jerry']
// const fromElement = document.getElementById("from");
// if (fromElement !== null) {
//     fromElement.innerHTML = favoriteCartoon.toString()}
//Array Properties and Methods
const schoolNames = ['Al Shams Public secondary School', 'Uffaq School System', 'The City Clif School'];
console.log(schoolNames.length);
console.log(schoolNames.sort());

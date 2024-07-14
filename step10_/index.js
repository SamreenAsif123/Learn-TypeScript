"use strict";
//Type Aliases and Interfaces
// type person = {
//     favDish : 'string'  // We cannot add another property in Aliases but we can add anotehr property in interface
// }
let sana = {
    name: 'sana',
    age: 20,
    hobby: 'reading books'
};
let Ayesha = {
    name: 'Ayesha',
    hobby: 'Playing Cricket',
    age: 20,
};
// Now, we can use this interface to define objects that follow this structure.
const carModel1 = {
    color: "Blue",
    engineType: "V8",
    doors: 4,
};
console.log(carModel1);
const carModel2 = {
    color: "black",
    engineType: "electric",
    doors: 2,
    colorOption: 3
};
console.log(carModel2);

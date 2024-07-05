//Typescript has some special type that provide additional  flexibility and functionality for handling different kinds of data and type scenarios.


//Type : any
// disable type checking 
//allows any operation to be performed on the value.

//Example
let myFriend : any = 'Sana';
myFriend = 3
myFriend = true


//Type : Unknown 
//Similar to type any but it is safer than type any because it doesn't allow any operation without typechecking or type assertions.

let value: unknown;
value = 4;
value = "a string";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Type-safe operation
}





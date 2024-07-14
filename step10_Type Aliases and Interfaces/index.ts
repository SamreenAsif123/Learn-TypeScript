//Type Aliases and Interfaces

//Aliases 
// 1. A way to create a new name for any type (object, primitive, union, intersection, function, etc.).
// 2. improves code readability.
//3. Can represent any type, including primitives, objects, unions, intersections, and functions.


type person = {
    name : string,
    age: number,
    hobby: string
};

// type person = {
//     favDish : 'string'  // We cannot add another property in Aliases but we can add anotehr property in interface
// }

let sana : person = {
    name: 'sana',
    age: 20,
    hobby: 'reading books'
}

let Ayesha : person = {
    name: 'Ayesha',
    hobby: 'Playing Cricket',
    age: 20,
}


//Interface
//1. Interface is used to define the shape of an object. 
//2. It's similar to a type alias but specifically for objects.
//3. Interfaces can also be extended, allowing you to create new interfaces based on existing ones.

interface Car {
    color: string;
    engineType: string;
    doors: number;
    
  }
  
  // Now, we can use this interface to define objects that follow this structure.
  const carModel1: Car = {
    color: "Blue",
    engineType: "V8",
    doors: 4,

  };

  console.log(carModel1)
  

interface CarColorOption extends Car  {
      colorOption : number; //Here i add another property in interface. Now i also have to add this properties in object otherwise error will show.
  }

  const carModel2:CarColorOption = {
    color: "black",
    engineType: "electric",
    doors: 2,
     colorOption: 3
  };

  console.log(carModel2)

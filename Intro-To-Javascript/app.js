//Number
// += , -=, /=, *=, ++, -- , %

let number = 40;
number += 5;
number -= 5;
number++;
number--;
const remainder = number % 3;

// Implicit Type Conversion  --------------------------------

let number1 = "13";
let number2 = "22";
const number3 = number1 - number2;
// javascript converting string to number
// But when Addition it does concatenation
console.log(number3);

// ----------------------------------------------------------------

//----------- Data-----------------------------------------------------//
//Data Types = 7 totals
//Primitive - String, Number, boolean , Null, undefined,Symbol
// Object - Arrays, Functions, Objects

//typedef - operator (typeof variable) (typeof value)

//string
const text = "some text";
//number
const numbers = 44;
//boolean
let value = true;

//--------------Data ends--------------------------------------------------//

// --------------------------------Functions --------------------------------//

// function declarations --------------------------------
function addValue(num1, num2) {
  return num1 + num2;
}
const sum = addValue(1, 2);
//function expressions --------------------------------
const add = function (num1, num2) {
  return num1 + num2;
};
add(1, 2);
// arrow functions --------------------------------
const addition = (num1, num2) => num1 + num2;
addition(2, 3);

// ---------- ------------------------end -----------------------------------------//

// --------------------------------------- Arrays -------------------------------------//

//Arrays - containers that hold lists of items

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[1]);
// numbers[1] = 10;
// console.log(numbers[1]);

// Array Methods
// push() - add to end of array
// pop() - remove from end of array
// unshift() - add to front of array
// shift() - remove from front of array
// splice() - remove from array
// slice() - copy part of an array

// push()
numbers.push(6);
// pop()
numbers.pop();
// unshift()
numbers.unshift(0);
// shift()
numbers.shift();
// splice()
numbers.splice(1, 1);
// slice()
numbers.slice(0, 2);

// ---------------------------- End -------------------------------------------//

// ---------------------------- Objects -------------------------------------------//

// Objects - containers that hold key value pairs

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// Destructuring
const { firstName, lastName, address } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(address.city);

// ---------------------------- End -------------------------------------------//

// ---------------------------- Conditional Statements -------------------------------------------//
// > , < , >= , <= , == , === , != , !==

//------------------ Switch ----------- ----------------------------//

const dice = 1;

switch (dice) {
  case 1:
    console.log("You rolled a 1");
    break;
  case 2:
    console.log("You rolled a 2");
    break;
  case 3:
    console.log("You rolled a 3");
    break;
  case 4:
    console.log("You rolled a 4");
    break;
  case 5:
    console.log("You rolled a 5");
    break;
  case 6:
    console.log("You rolled a 6");
    break;
  default:
    console.log("You don't rolled ");
}

// ---------------------------- End Switch-------------------------------------------//

// ---------------------------- Loops -------------------------------------------//

// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
} // 0,1,2,3,4,5,6,7,8,9

// While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} // 0,1,2,3,4,5,6,7,8,9

// Do While Loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10); // 0,1,2,3,4,5,6,7,8,9

// ---------------------------- End Loops -------------------------------------------//

/****************************************/
//TypeScript Type: Number, String, Boolean
/*********************************** */

// function add(num1: number, num2: number, print: boolean, phrase: String) {
//   let addition = num1 + num2;
//   if (print) console.log(phrase, addition);
//   if (!print) console.log("nothing has to be printed.");

//   return addition;
// }

// let number1 = 4;
// const number2 = 5;
// const printResult = true;
// const phrase = "Result is : ";

// add(number1, number2, printResult, phrase);

/********/
//Object
/********/

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   roles: [number, string]; //tuple
// } = {
//   name: "faisal",
//   age: 23,
//   hobbies: ["reading", "coding"],
//   roles: [3, "author"],
// };

enum Role {
  ADMIN = 1,
  AUTHOR,
  ASSISTANT,
}

const person = {
  name: "faisal",
  age: 23,
  hobbies: ["reading", "coding"],
  position: Role.ADMIN, // human readable format instead of number or complex code
};
// does not work for push
// person.roles[1] = "writer";

// let lang: string[];
// lang = ["js", "ts"];

// console.log(person.hobbies);
// console.log(lang);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// console.log(person.position); // 1

//Union typ

function add(num1: number | string, num2: number | string) {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

let number1 = "faisal";
let number2 = 4;

console.log(add(number1, number2));

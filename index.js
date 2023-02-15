// // Variables and Data Types
// let person = "Nathan";
// console.log(person);
// person = "SkillAhead";
// console.log(person);

// // Data types
// // 1. String
// let another = "Message";
// console.log(typeof(another));

// // 2. Number
// let age = -50.005;
// console.log(age);
// console.log(typeof(age));

// // 3. Boolean
//  let time = true;
//  console.log(time);
//  console.log(typeof(time));
//  console.log("Mr Bolaji")

// // 4. Array
// let student = ['Mary Sanni', 'Bolaji Opaniran', 'David Obialor'];
// console.log(student[1]);
// console.log(typeof(student));

// // 5. Undefined
// let something;
// console.log(something);
// console.log(typeof(something));

// // 6. Null
// let nothing = null;
// console.log(nothing);
// console.log(typeof(nothing));

// // 7. Object
// let Students = {
//     "name" : "Mary Sanni",
//     "name1" : "Bolaji Opaniran",
//     "name2" : "David Obialor",
// }
// console.log(Students.name2);
// console.log(typeof(Students));

// Operators and Expressions

// 1. Arithemetic Operator: +(addition), -(subtraction), *(multiplication), /(division), %(modulus);

// let sand = 5%3;
// console.log(sand)

// // 2. Assignment Operator: =, +=, -=, *=, /=;
// let title = 5;
// title /= 30;
// console.log(title);

// // 3. Comparison Operators: <, >, <=, >=, ==, !=;
// let age =30;
// let time=20;

// let answer = age != time;
// console.log(answer)

// Exercise: Create a program that takes two numbers from the user and, multiplies it, and prints it in the console.

// let num1 = prompt("Insert a number");
// let num2 = prompt("Insert another number");

// num1 = Number(num1);
// num2 = Number(num2);

// let answer = (num1 * num2)/100;

// console.log(answer);

// Exercise: Create a program that calculate the simple interest for a given amount, rate, and time. The formula for finding simple interest is (P*R*T)/100. The program should collect input for the amount, rate, and time, from the user.

// function assign() {
//     let num1 = prompt("Insert a number");
//     let num2 = prompt("Insert another number");

//     num1 = Number(num1);
//     num2 = Number(num2);

//     let answer = (num1 * num2)/100;

//     console.log(answer);
// }

// assign()


// Conditional Statements

// if else statement
let link = "inactive";

if (link == "active") {
    console.log("The link is active, start online class");
}
else {
    console.log("The link is inactive, it seems there is no class today");
}

// Exercise: Write a program that gets a user's input and checks if the number is either positive, negative, or zero.

// let input = prompt("Enter any number");

// if (input >= 1) {
//     console.log("The number is a positive number.");
// }else if (input <= -1) {
//     console.log("The number is a negative number.");
// }else if (input == 0) {
//     console.log("The number is zero");
// }else {
//     console.log("Please enter a valid number");
// }

// Exercise: Create a program that gets two numbers from a user and determines which number is greater.
// var num1, num2;
// num1 = prompt("Input the First integer");
// num2 = prompt("Input the second integer");
                                                 
// if(Number(num1, 10) > Number(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }


// switch statement
let time = prompt("");
switch (time) {
    case 0:
        console.log("This is zero")
        break;
    case 1:
        console.log("This is one")
        break;
    case 2:
        console.log("This is two")
        break;
    case 3:
        console.log("This is three")
        break;
    case 4:
        console.log("This is four")
        break;
    case 5:
        console.log("This is five")
        break;
    default:
        console.log("Try again")
        break;
}

// Exercise: Create a program using the switch statement to get what day it is from Sunday to Saturday and print eg. "Today is Monday"

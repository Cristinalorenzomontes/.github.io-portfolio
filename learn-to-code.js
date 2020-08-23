"use strict";

//Loops

// let students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

// for (let i = 0; i < students.length; i++) {
//   console.log("Welcome " + students[i]);
// }

//Functions

// let length1 = 15;
// let width1 = 10;
// let area1 = length1 * width1;

// let length2 = 12;
// let width2 = 14;
// let area2 = length2 * width2;

// console.log(area1);
// console.log(area2);

// function area(length, width) {
//   return length * width;
// }

// let rectanglesAreas = [];
// rectanglesAreas.push(area(10, 15));
// rectanglesAreas.push(area(14, 2));
// rectanglesAreas.push(area(4, 5));

// console.log(rectanglesAreas);

// // let area1 = area(10, 15);

// // console.log(area1);

// let bankBalance = 500;

// function makeTransaction(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Purchase Successful");
//   } else {
//     console.log("Insufficient Funds");
//   }
// }

// console.log(bankBalance);
// makeTransaction(79.0);
// console.log(bankBalance);
// makeTransaction(2.32);
// console.log(bankBalance);
// makeTransaction(10.45);
// console.log(bankBalance);
// makeTransaction(450.0);
// console.log(bankBalance);

// let transaction = function (priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Purchase Successful");
//   } else {
//     console.log("Insufficient Funds");
//   }
// };

// transaction(10);

// let printCustomerName = function (first, last) {
//   console.log("First Name " + first + "Last Name: " + last);
// };

// let applyForCreditCard = function (creditScore, soul) {
//   //call some functions to process application
// };

// let bankOperations = [];
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);

// console.log(bankOperations);

//Objects

// let student = {
//   firstName: "John",
//   lastName: "Parker",
//   age: 7,
// };

// console.log(student.firstName);

// let students = [];

// function student(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.greeting = function () {
//     return "Hi, I´m " + this.firstName + " and I´m " + this.age + " years old.";
//   };
// }

// students.push(new student("Jenny", "Laga", 5));
// students.push(new student("Timmy", "Turner", 8));
// students.push(new student("Carl", "Jr", 4));

// let Student = students[0];

//for in loop to itirate trought objects, keys and value

// for (let key in Student) {
//   console.log(Student[key]);
// }

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   console.log(student.greeting());
// }

//BIND

// //Alex Brown's
// this.car = "Honda Civic w/ Ugly Spoiler";

// let marksGarage = {
//   car: "Aston Martin",
//   getCar: function () {
//     return this.car;
//   },
// };

// console.log(marksGarage.getCar());

// let storeGetCarForLater = marksGarage.getCar;

// // console.log(storeGetCarForLater()); //WTF

// let theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
// console.log(theRealGetCarFunction());

let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numField2");
let resultField = document.getElementById("resultField");
let form = document.getElementById("xIsWhatPercentageOfY");

form.addEventListener("submit", function (ev) {
  if (!numField1.value || !numField2.value) {
    alert("Please enter values in the fields");
  } else {
    let x = parseFloat(numField1.value);
    let y = parseFloat(numField2.value);

    let result = x / y;
    let percent = result * 100;

    resultField.innerText = "Answer: " + percent + "%";
    ev.preventDefault();
  }
});

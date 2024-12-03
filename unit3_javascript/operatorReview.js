// Arithmetic operators - Writing code expressions
//  that perform math operations

// examples of apps that use arithmetic operators

// depositing money into a digital account
var depositAmount = 300009;
var checkingAccount = 1000;
var savingsAccount = 2000;

//console.log(depositAmount + checkingAccount);
// function- set of instructions that performs a job

// peer to peer money transfers
var amountBeingSent = "";
var userAccounTotal = "";

// Assignment - giving variables values.
// we use the single equal sign  (=) to assign data to variables

// sneakers is the varable. We are ASSIGNING the value of 200.00
// with the equal sign.
var sneakers = 200.0;
sneakers *= 0.3;

//console.log(sneakers);

// Comparision - analyzing values. checking to see if a certain
// condition is met.
// ==
// ===
// !=

// Logical

function doMath() {
  console.log(2 + 60);
}

function ageVerification(age) {
  if (age >= 21) {
    console.log("You may purchase this item.");
  } else {
    console.log("You are restricted from buying these items.");
  }
}

//ageVerification(25);

function itemVerification(item) {
  // Check to see if the store has an item
  let NorthEastStore = ["bike", "gift card", "cake"];
  let NorthPhillyStore = [];
  let SouthPhillyStore = [];
  let SouthWestStore = [];
  let upTownStore = [];
  if (neStore.includes(item)) {
    console.log(`This location does have a ${item}.`);
  } else {
    console.log(`This location does not have a ${item}.`);
  }
}

// Test the function
// itemVerification("tv");

// function itemVerification(item) {
//     // Stores and their inventory
//     let stores = {
//       neStore: ["bike", "gift card", "cake"],
//       northStore: ["candy", "bike", "tv"],
//       upTownStore: ["tv", "bike", "game console"],
//       westStore: [""],
//       swStore: ["gift card"],
//     };

//     // Loop through each store
//     for (let store in stores) {
//       if (stores[store].includes(item)) {
//         console.log(`The ${store} has a ${item}.`);
//       } else {
//         console.log(`The ${store} does NOT have a ${item}.`);
//       }
//     }
//   }

//   // Test the function
//   itemVerification("tv");

// the function definition is just telling the
// computer what our function does
function doMath(number) {
  console.log(number + 1000);
  console.log(number - 230);
}

// this is the computer actually doing our instructions
doMath(4000);

function verifyAge(age) {
  if (age >= 21 && age < 45) {
    console.log("You may have access to this site.");
  } else {
    console.log("You may NOT have access to this site.");
  }
}
verifyAge(50)
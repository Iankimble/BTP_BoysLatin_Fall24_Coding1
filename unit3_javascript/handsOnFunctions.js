// Anatomy of a function

// curly brackets = this is called a parameter. we pass data
// inside of the functions parameters

// parameter = placeholder for data
// data = just means data types

// Condtional Statements in JS

// Conditional statements are written using the 'IF' and 'ELSE'
// keywords. This allows use to make decisions based on data
// our function recieves.

// Activity

// 1. Create a function that will take a number that
// is passed into the functions parameters and convert
// the number into minutes. For example, a value of 2
// should return 120 minutes. a value of 3 should
// return 180 minutes, etc.

function hoursToMinutes(hour) {
  console.log(hour * 60 + " minutes");
}

//hoursToMinutes(15);

// Conditional Statements
// If/ Elese keywords used create specific
// outcomes based on the data the function recieves.

function timeManagementSystem(hoursWorked) {
  if (hoursWorked < 8) {
    console.log("Unfortunately you will not get full time pay.");
  } else if (hoursWorked > 8) {
    console.log("You will be paid overtime. ");
  } else if (hoursWorked > 16) {
    console.log("You are working way too hard! ");
  } else {
    console.log("You will get paid full time for the day.");
  }
}

timeManagementSystem(10);


// A function is a set of instructions
// that informs the computer on what to do
// with data.

// Conditional statements use the if/ else
// keywords to allow us to create multiple
// custom outcomes based on the data
// we recieve

function timeOfDay(time) {
  if (time == "am") {
    console.log("it is the morning. ");
  } else if (time == "pm") {
    console.log("it is the evening.");
  } else {
    console.log("sorry, cannot understand input");
  }
}

timeOfDay();

// Create a function that will give
// someone a letter grade based on their
// numerical grade score. For example,
// if someone has a 90, your program
// should print you have an A, if the
// data entered is an 80,
// the program should print you have a B,
// etc.

// nested conditions are functions inside
// of functions. this gives us more power
// to make unique outcomes.
function passwordRetrieval(email, password, sQuestion) {
  if (email == dbEmails.sort(email)) {
    console.log("correct");
    console.log("please provide a password?");
  }else{
    console.log('sorry, this email doesnt exist.')
  }
} 

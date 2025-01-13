// Create a function that will determine
// what level of education and title
// a college student, based on the number of years
// they've been in school.

// 2 sophmore
// 3 junior
// 5 ~ 6- master
// 7 or more - doctorate

var collegeTitles = ["Freshman", "Sophmore", "Junior", "Senior"];
console.log(collegeTitles[0]);

function collegeTitleByYear(year) {
  if (year == 1) {
    console.log("You are a " + collegeTitles[0]);
  } else if (year == 2) {
    console.log("You are a " + collegeTitle[1]);
  } else if (year == 3) {
    console.log("You are a junior.");
  } else if (year == 4) {
    console.log("You are a senior.");
  } else if (year == 5 || year == 6) {
    console.log("You are in a masters program.");
  } else {
    console.log("Error. data not accepted.");
  }
}

// collegeTitleByYear(1);

// A JS list is a data type that is used to group and
// organize other data types into one variable.

// we use the square brackets to designate something as
// a list.

var groceryList = ["water", "apple", "ground beef", "oranges"];

var RandomData = [
  "Ian",
  202020,
  202.323,
  "coding class",
  true,
  false,
  groceryList,
];

//console.log(RandomData)
// We can organize different items to differnt lists
coding1s = ["black cw", "green cw", "white cw"];
codings2s = ["red cw", "blue cw"];
codings3s = [];

//console.log("These are the coding sneakers we have in stock.")
//console.log(coding1s,codings2s,codings3s)

deliMeats = ["turkey", "ham", "roastbeef"];
cleaningSupplies = ["dish soap", "paper towels", "soap"];
snacks = ["chips", "candy", "soda", "juice"];

let numbers = [1, 230, 304, 233];

function multiply() {
  console.log(numbers * 2);
}

multiply()
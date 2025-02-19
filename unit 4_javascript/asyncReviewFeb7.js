// 1.
// For Loop - is a type of loop that iterates (counts over)
// a list or collection of data. For loops generally have
// a starting point and ending point.

// While Loop - is a type of loop that will repeat a
// set of instructtions so long as a condition is true.

// 2.
// A Timer program is an example of a program that can
// be built ussing a while loop.

function timer() {
  var interval = 60;
  while (interval > 0) {
    console.log("countdown: " + interval);
    interval -= 1;
  }
  console.log("Timer done");
}

//timer();

// You have been hired by temple university
// to work on a graduation checker program. your
// rogram should be able to find the highest grade
// in a list. Create a function that will loop
// through each number in the list and identify
// if it is the highest number. When your program
// finds the highest grade, it should return a
// message telling the user what the highest grade is.

("Create a loop that is checking for the highest grade.");

("loop, function, number/ integer, list");
("looking for highest grade");

("how many grades do we need to check -");
("how many items are in list");

("1. create a function.");
("2. I need a loop to check a list of number (For Loop).");
("3. I need to compare the grades to check.");
("for the highest value.");
("4. we need a list of numbers");
("I need to make a comparision between each number in the list");
(" the loop will compare each number to the previous number and only ");
(" only carry over the highest value. ");
grades = [70, 88, 75, 90, 100, 71];

function gradeChecker() {
  let i = 0;
  for (i; i < grades.length; i += 1) {
    console.log(grades[i]);
  }
}

gradeChecker();

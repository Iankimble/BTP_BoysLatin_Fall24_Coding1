// 1 .Create a function to store the instructions.

// 2 .Create a variable or input function to take in the numbers

// 3. We will need and if / else conditional statement to check the arithmetic operators.

// 4. Based on the symbol that will be the operation we will do with the two numbers.

function calculate(numberA, arithmeticOperator, numberB) {
  if (arithmeticOperator == "+") {
    console.log("we are doing addition");
    var result = numberA + numberB;
    console.log(result);
  } else if (arithmeticOperator == "-") {
    console.log("we are doing subtraction");
    var result = numberA - numberB;
    console.log(result);
  } else {
    console.log("somthing went wrong.");
  }
}

calculate(10, "+", 20);
maj the Geo
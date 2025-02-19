// data types
// the basic building blocks of JavScript.

// string
// are pieces of data bound together by quotation marks
"a person name";
"general text";
"symbols and even number !@42342@$3";
"these are all strings";
"we can use double quotes ";
"we can also use single quotes";

// integer
// integers are data types that represent nunmbers
// even decimal numbers
12;
12323;
12141;
940.0;
7657.876876;
567585875785875875875;

// boolean
// booleans represent data that has a true of false value
true;
1;
false;
0;
// variables
// variables are a construct that allows us to store
// data types
// vairables operate on a key/ value pair. meaning-
// we give a value a name to be associated with in
// the programs memory

// universial variable/ data container
var name = "Ian";

// a variable that is expected to change
let loginName = "ik123";
// a variable that will not change. stays constant
const password = "123abc";

// syntax - how we write and format our code.
// when we do not follow the format rules, just like in english
// it can be hard for the computer
// to understand what we want it to do
("hello goodbye ian name is today good weather. by is!");

// when we follow the syntax rules, just like in the real-
// world, we can be understood.
("hello, my name is Ian. today there is good weather. goodbye");

// warnings and errors
varnumber = 10;
console.log("this is the terminal");

// syntax rules for variables
// step 1- you first have to declare that it is a variable
// let
// var

// you can use either var, let, or const
// step 2- we need to give our variable a name
// let name =''
// var carType =''

// step 3 - we need to assign the variable some data
// let name = "chevy";
// var carType = "sport";

// JavaScript version
function mystery_function(x) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let i = 0;
  for (i; i < numbers; i++) {
    console.log(numbers[i] * x);
  }
}

mystery_function(2);

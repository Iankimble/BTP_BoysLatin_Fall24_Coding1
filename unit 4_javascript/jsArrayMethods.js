// Arrays - A special data type for 
// collecting and storing data inside 
// of a variable.  

// We declare an array by giving it a
// variable name, and then assigning it the 
// square brackets
var numbers = [1,2343,23,23435,234]
var randomData =[true, 'name',numbers, numbers]

// What is a method?
// a method is a special type of function
// the works on array/ lists (...and objects)

// push() - this special function pushes new
// data into a array.
// PUSH needs and argument to passed into the array.
// it will add the new data to the end of the array
var snowGear =['gloves','hats','mittens','coat']
snowGear.push('snowboard')
console.log(snowGear)

// pop()- this is a special function for removing 
// and item from an array.
// POP does not need an argument. It will always 
// remove the last item in the array
snowGear.pop()
console.log(snowGear)

// LIFO = Last in, First out

// length- counts the items in the array
// Length does NOT take any arguments
console.log(snowGear.length)

// Remove the hats string from this list
// use w3schools or google to find a method
// to remove the hats from the array
//var snowGear =['gloves','hats','mittens','coat']

snowGear.splice(1,1,' ')
console.log(snowGear)

// replace()
// pop()
// splice()
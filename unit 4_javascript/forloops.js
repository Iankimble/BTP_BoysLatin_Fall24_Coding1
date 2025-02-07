// For Loop = is a type of loop that iterates through
// a list.
// A list has a finite loop; it has a start point
// and an end point; these are typcially the first
// and last item in the list.

let groceryList = ["apple", "mango", "water", "cereal", "beef"];
let i = 0;
for (i; i < groceryList.length; i += 1) {
  console.log("this is a  " + groceryList[i]);
}

let gradeBookList = [80, 70, 74, 68, 93, 92, 100, 70];
let x = 0;
for (x; x < gradeBookList.length; x += 1) {
  if (gradeBookList[x] < 75) {
    gradeBookList[x] + 5;
    console.log(gradeBookList[x])
  }
  //console.log(gradeBookList[x]);
}

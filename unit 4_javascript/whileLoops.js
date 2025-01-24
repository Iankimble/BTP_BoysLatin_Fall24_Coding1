// Loops = A loop is a special
// construct that repeats a set
// of code instructions over and
// over under specific
// conditions.

// While Loops = This is a special type of
// loop where so long as a condition is TRUE
// it will repeat the code instructions over
// and over.

// this is an ex of an assignment
// operator - giving a variable a value

// = : assignment operator
// == : comparison operator (same as)
// != : comparison operator (not the same as)

function basicLoop() {
  var value = "";

  while (value == "") {
    // 0 is less than 10. This is a true statement
    console.log("This message will repeat");
    value += 1;
  }
}
// basicLoop();

function trafficLight() {
  var lightColors = ["red", "yellow", "green"];
  var timer = 0;
  while (timer < 60) {
    console.log("this light is " + lightColors[0]);
    timer += 1;
    if (timer % 6) {
      console.log("light is about to change...");
      console.log("this light is " + lightColors[1]);
    }
  }
}

// trafficLight();






function timer(){
  var interval = 60 
  while (interval > 0){
    console.log('countdown' + interval)
    interval -= 1
  }
  document.getElementById('count').innerHTML=interval
  alert('times up')
  console.log("Times up!")
}


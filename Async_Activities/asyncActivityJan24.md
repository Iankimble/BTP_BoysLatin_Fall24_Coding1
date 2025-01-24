# Async Activity January 17th, 2025

Please create a new file called <b>asyncActivityJan24.py or asyncActivityJan24.js</b> and complete the following questions.

This assignment is due at the end of class. If you are not present for class, this assignment will need to be completed as homework before 11pm tonight (Jan. 24, 2025).

## IMPORTANT

<b>Once you've completed the assignment, please do the following steps
to ensure your assignment is submitted properly. </b>

- Commit and sync your work to your github repository. - DO NOT PUT THE LINK TO YOU CODESPACES HERE- IT MOST BE YOUR REPOSITIORY.
- Drop the link to your repository in the following link below
- [Async Activity Jan.24, 2025 Submission Link](https://forms.gle/PNqjQpwwnsBcj4H57)

numberList = [1,23,56,3,56,3,20,200]

1. Create a function that uses a while loop to print/ console.log the list but in reverse order.

## FOR PYTHON STUDENTS

2. You have been hire as a software engineer for amazon to develop a new 2-factor login system. Users will need to provide 2 passwords to get access to their amazon account. Your new password function should run on a while loop. Your function will need to ask the user to enter their normal password, which should be a string. If the password is correct, they will then need to enter a second password which should be a float. If either of these passwords are incorrect, it should tell the user to try again. If the user is able to enter both passwords correctly, they should get a confirmation and congratulation message saying they can now access their account.

HINT: you will need to use a conditional (IF/ELSE) statement

## FOR JAVASCRIPT STUDENTS

2. Create a countdown timer that takes in an number passed in from a HTML document. Your HTML document should be called countdownLoop.html your countdown timer function should use a while loop that will start the count based on the number you provide and then stop at zero (for example; If I type in the number 5 my countdown timer should output 5,4,3,2,1,0 in the console.log). The numbers counting down should be displayed in the your browsers console (right-click to open the inspect tool and the hover over the icon that says console.)

Provided below is the html template you can use for your code.
The template already has the input field written and will output your entry in the console.
You need to finish this code by adding your countdown function.

you can write you function between the <script> tags OR you can use the src attribute and import your js file into your html file.

<!DOCTYPE html>
<html>
  <head>
    <title>Loops</title>
  </head>
  <body>
    <input type="text" id="userInput" />
    <button onclick="runLoop()">Submit</button>
<script>
      function runLoop() {
        var input = document.getElementById("userInput").value;
        console.log(input)
        
        // your loop function should go here. 
      }
</script>
  </body>
</html>

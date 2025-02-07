# # In a complete sentence, what is the problem asking you to do ?
# "This problem is asking me to develop a looping program that take in a" 
# "number and returns the average letter grade"

# #Where there any parts of the question that don't make sense, 
# # if so write them down in complete sentences. 
# "Calculation to average out the grades and"
# "show the new letter grade"
# grades = [100,50,70,70,80,90,100] 
# ScoreTotal = 508 # need to ADD all the scores
# numberOfScores= len(grades) # need to count all of the scores
# ScoreTotal/ numberOfScores # need to DIVIDE all the scores

# # Please write down the keywords and phrases that will
# # help you solve this problem ?

# " prompts says the word repeat = loop"
# " enter numerical grade = enter an integer or float data type"
# " each time new number is entered it needs to perform a" 
# " calculation = arithmatic operators"
# " I need to compare the number grade to the letter grade =" 
# " if/else, comparision operators"
# " return a letter grade = we need to give back a string data type"

# # Does the problem provide you with any input data? 
# # Does it tell you what type of data your program needs 
# # to take in ?

# "we need to pass in floats and/ or integers"


# # Does the problem provide you with desired output data? 
# # Does it tell you that your program needs to give somthing 
# # back to the user ?

# "we need to give the user back a letter grade, "
# "based on the average numbers"






# Psuedocode for RPS Game PoC

# I need to create a game that runs rps, where the user
# and program take turns, and the after the 3rd turn
# the program determines who the winner is.

# 1. I need to have variables for the values of rock, paper,
# and scissor.

# 2. I need to create a function that runs on a loop
# that runs 3x. these 3 loops represent the 3 turns the 
# user has.

# 3. I need a to create a way to pass in the user input

# 4. I need a way generate a random selection from the program

# 5. I need a way to compare the user selection to 
# the random selection

# 6. I need a way to count the score.

# 7. I need a way to show the user who won/loss


import random

def rpsGame():
    # rpsValues = ['rock', 'paper','scissors']
    userScore = 0
    programScore = 0
    turn = 0
    while turn < 3:
        userSelects = int(input("please select an option 0= rock, 1= paper, 2= scissors: "))
        print(userSelects)
        programSelect= random.randrange(0,2)
        print(programSelect)
        if userSelects== 0 and programSelect== 0:
           print('this is a draw, Rock and Rock cancel out')
        elif userSelects== 0 and programSelect== 1:
            print('program wins, paper beat rock')
            programScore += 1
        elif userSelects== 0 and programSelect== 2:
            print('user wins, rock beats scissors')
            userScore += 1
        else:
            print('something went wrong check your code.')
        turn +=1
        if userScore > programScore:
            print('user wins!')
        elif programScore> userScore:
            print('program wins')
        else:
            print("game is a draw")

rpsGame()

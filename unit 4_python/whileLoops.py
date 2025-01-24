import random

# Loops - A construct in programming 
# where instructions will repeat over and 
# over until a specific condition is met. 

# While loop- is special type of loop where 
# instructions will repat themselves 
# so long as a condition is true. 

def repeatMsg():
    x = 2
    while x == 2:
        print('this message will repeat forever. ') 

def passwordLoops():
    correctPw= '123abc'
    userPw=''
    while userPw != correctPw:
        print('incorrect pw. Try again') 
        userPw=input('please enter your password: ')
    # if userPw == correctPw:
    else:
        print('congrats')

# passwordLoops()
# 
def inventoryLoop():
    userInventory =[]
    pickupItem= input('what item are you picking up?: ')
    while len(userInventory) < 4:
      userInventory.append(pickupItem)
      print('these are the items in your bag: ')
      print(userInventory)
      pickupItem= input('what item are you picking up?: ')

# inventoryLoop()

# def replaceInventoryItem() save for another day
# def removeInvetoryItem() save for another day

# def rngGame():
#     randomNumber = random.randrange(1, 11)
#     print(randomNumber)
#     userAnswer =''
#     while randomNumber != userAnswer:
#         userInputGuess= int(input("Guess a number between 1 and 10: "))
#         userAnswer= userInputGuess
#         print('Incorrect guess. Try again')     
#     else:
#         print('This is the correct answer.')    

# rngGame()














def tripSavings(): 
    accountBalance = 0
    tripGoal = 8000
    while accountBalance < tripGoal:
    # So long as the statement above is true; it will repeat    
        depositAmount = int(input('How much do you want to deposit? :'))
        accountBalance += depositAmount
        print('Your new account balance is '+ str(accountBalance))

#tripSavings()

# decrease health
def damageCounter():
    player1 = 100
    while player1 > 0:
        damage = int(input("How much damage is this attack doing? :"))
        player1 -=damage            
        print('Player 1 health is now '+str(player1) +' healthpoints')

#damageCounter()




# Create a function that uses a loop to check a password.
# IF the password is correct, the loop will stop. IF the password
# is incorrect the loop will continue. 

# add in code that will provide a confirmation message to
# the user. For example; if the password is correct, it should 
# congratulate  the user. and if its inccorect it 
# should tell them to try again.
        
def passwordSystem():
    password = 'fastCar'
    userPassword = ''
    while password != userPassword:
        userAttempt = input('what is the password? ')
        userPassword = userAttempt
        print('Sorry, try again')
    else:
        print('Congrats, that is correct.')    





def TripSavingsLoop():
    accountBalance = 0
    depositAmount = 0
    goalAmount = 4000
    while accountBalance < goalAmount:
        depositAmount =input("How much money are you depositing? ")
        accountBalance += int(depositAmount) 
        print("new account balance = "+ str(accountBalance))

TripSavingsLoop()
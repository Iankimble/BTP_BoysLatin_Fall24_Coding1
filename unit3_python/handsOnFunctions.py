# Discuss the anatomy of a function 

# A function definition provides instructions
# to the computer on what to do with data.

# data = just data types

# () curly brackets are called parameters.
# This is where we pass in data in the function
# definition. 

# parameter = placeholder (for data).

def customizeMyName(name):
    print('Your new custom name is the cool guy '+ name)

# arguement is the data passed inside of the function
# call. 
# arguement = evidence or real facts and data.

# customizeMyName('Ian')

# Lesson on Conditional Statements

# Conditional statements are built using 
# the 'IF' and 'ELSE' keywords. They allow us
# to make decisions based on the data we receive. 

# a conditional function for if someone is old enough
# to buy GTA VI

def ageVerification(age):
    if age > 17:
        print('Congrats! you just purchased GTA 6!')
    else: 
        print('Sorry you must have an adult to get this game.')

#ageVerification(19)


def playerHealth(hp):
    if hp > 0 and hp < 99: 
        print('You are still alive!')
    elif hp > 100:
        print('Congrats! you have leveled up!') 
    else: 
        print('Game over your hp is zero')

# playerHealth(101)








# Activity 

# 1. Create a function that will take a number 
# that is passed into the functions parameters and 
# convert the number into minutes. For example, a 
# value of 2 should return 120 minutes, a value 
# of 3 should return 180 minutes, a value of 4 should
# return 240 minutes, etc.  

def hoursToMinutes(hour):
    # timeConversion = hour * 60
    # print('There are ' + str(timeConversion) + ' minutes in ' + str(hour) + ' hours')    
    print(hour * 60)
#hoursToMinutes(7.5)

# Conditional Statements 
# IF/ ELSE keywords are used to run different outcomes
# based on the data our function recieves.

def alarmClock(time):
    if time == 6:
        print('Ring alarm!! TIME TO GET UP!!')
    else:
        print('alarm is not active.')

#alarmClock(4)

def lightControl(room):
    if room == 1:
        print('room light is on')
    else:
        print('room is off')

# lightControl(1)

def elevator(floor):
    if floor == 'b':
        print('you are in the basement')
    elif floor == 1:
        print('you are on the first floor')
    elif floor == 2:
        print('you are on the second floor')
    elif floor == 3:
        print('you are on the third floor')
    else:
        print('please enter a floor number')

elevator(2)


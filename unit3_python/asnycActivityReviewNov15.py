# ## Async Activity November 15th, 2024 ##
# inside of your unit 3 folder create a new file called 
# asyncActivityNov15.py OR asyncActivityNov11.js, depending on which programming language you are learning. 

# Please follow the directions provided and answer the following questions.This will be do at the end of class. This will need to be submitted whether you are present or not. 

# The following async questions are program agnostic (meaning that
# the questions can be answered regardless of which programming language you are learning)

# Good luck.

# 1. A company is developing a security system that requires 2 factor 
# authorization. This means that the system needs to verify 
# that 2 pieces of data are correct for the
# person to enter the building. When someone 
# approached the building they need to have the correct 
# name and correct passcode to enter the building. 
# Which operator would be used here? Please provide a code 
# example of how you would write this and output the 
# result using the print() function for python or the console.log() function for javascript? 

# * Hint the value will need to return true
# keywords/ things we know
# - we know we need to use 1 o the 4 operators that we've learned
# - we need two pieces of a data that will both be true
# we need the value to be true

# we are using a logical operator
name = 'Bill'
password ='123'

securitySystemName ='Bill'
securritySystemPassword='123'

print(name == securitySystemName and password == securritySystemPassword)

# 2. A hospital needs to keep track of medical equipment. 
# they are getting a shipment of new ECG machines and Oxygen 
# tanks and need to verify. If they have more than whats needed 
# in their office, they need to send the overflow of e
# quipment back to the manufacturer, but if they have less, 
# they need to request more.
# In this scenario, they are supposed to have 
# 10 ECG machines, but only recieved 4, and 
# for the oxygen tanks they are supposed to have 6 in stock, 
# but recieved 9. 
# Which operator would be used here? 
# Please provide a code example of how you would 
# write this and output the result using the print() 
# function for python or the console.log() function for javascript? 
ecgRequest = 10
ecgShipment = 4
oxygenRequest= 6
oxygenShipment= 9

# Comparion operator 

# 3. A company is developing a messaging app that 
# allows people to send text message for free. They need 
# to allow users to capture the user data and then send it 
# to someone else. Which operator would be used here? Please 
# provide a code example of how you would write this and 
# output the result using the print() function for python 
#or the console.log() function for javascript? 
# assignment operator
senderMsg ='send this to my friends'
recieverMsg = senderMsg
print(recieverMsg)

# ## for student's learning Python
# 4. Use W3 schools to research the input function. then create 2 
# variable that will contain the values/ data from your inputs. 
# The data you pass in should be your name and your age. 
# Lastly, use string concatenation to combine the new 
# variable you created with the sentence below.

# for students learning Python
# print('my name is' + name '.  I am ' + age + 'years old.' )
print("Enter your name:")
x = input()
print("Hello, " + x)

# ## for student's learning JavaScript
# 4. Identify and explain what each of these symbols are
# - =
# - &&
# - ||
# - == 
# Loops - A loop is a special type of function
# that will repeat (loop through) a set of instructions
# under specific conditions. 

# There are 2 versions of loops; there are 
# for loops and whiles loops.

# While Loops - a while loop is a special type of function
# where so long as a condition is TRUE, it will continue
# to repeat set of instructions. 

number = 1
result = 4

while number + 2 == result:
    print('2 + 2  is always 4')

# so long as the health points (50) is greater than 0,
# this code will keep running and subtract 10 from the 
# health points. BUT once it gets to 0 the game will stop.

def gameHealthManager():
    healthPoints = 50
    while healthPoints > 0: 
        print('keep plyaying game.')
        healthPoints -= 10
        confirmPlay= input('do you want to continue? ')             
        print(healthPoints)

# gameHealthManager()

# For Loops - This is a function that will iterate over 
# a list and will run specific instruction on each of the 
# items  in that list

# numbers = [1,2,3,4]
# for x in numbers:
#     print('this is ' + str(x)) 

def attackLogic():
    attackScore =[30,10,60,25]

# a way think about this of code is
# FOR items (in this case attack) IN LIST (attackScore)

    for attack in attackScore:
        print(attack * 2)
#attackLogic()
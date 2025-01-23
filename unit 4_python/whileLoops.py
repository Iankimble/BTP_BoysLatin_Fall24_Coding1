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

inventoryLoop()
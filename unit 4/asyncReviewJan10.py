
# 1. Create 3 different lists data types that will include things found in grocery store. Make sure your items use the string data type.
# Create a list that includes 5 items that you can find in the frozen food isle.
# Create a list that includes 5 items that you can find in the international food isle.
# Creat a list that includes 5 items that you can find in the produce isle.

# A list is a data type for grouping together data. We can group together 
# different types of data into one variable. We use the [] square brackets
# to designate something as a list. 
# Lists can contain other lists and other variables.

name ='Ian'
grades=[12,70,90,90]
generalList =[name,grades, 19, 12332.324, True, 'Kimble']

produceFood = ['grapes','apples','bell pepper','bananas','oranges']
internationalFood =['soy sauce','oxtail sauce','sushi','chilli sauce','ramen']

# 2. With the list provided below; use the print (for python) or console.log (for javascript) functions to return the correct value for the index.
numbers = [1,30,39,50,293,100]

# Hint: If you get stuck, search for accessing JS list by index or accessing Python list by index depending on which language you are learning

# print/ console.log the number at index 0
1
# print/ console.log the number at index 3
50

# print/ console.log the number at index 4
293

# 3. Create a function that will multiply the number at index 4 in the list above.
def multiplyBy4(x):
    result = x * 293
    result = x * numbers[4]
    print(result)

multiplyBy4(1)
    


# create a new document called inputFunction.py

# the input function is a built-in function that allows
# us to enter data in the terminal and use it in our code.

# When we use the input function, the data we pass into it 
# is always transformed into a string. 

# built-in functions are functions we do not need to write instructions
# for. It is already built into the code. All we need to do is call it. 
 
def traveledPlace():
    place = input('What place have you been to recently? ')
    print(place)

traveledPlace()

def compareNumbers():
    userNumber = input('please type in a number? ')
    if userNumber > 10:
        print('this number is larger than 10')
    elif userNumber < 10:
        print('this number is smaller than 10.')
    else:
        print("error")
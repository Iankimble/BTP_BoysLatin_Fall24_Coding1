# FOR LOOP is a type of loop that iterates over
# a list. 

# A for loop does not repeat 
# itself infinitely (or atleast it shouldnt)
# it will loop through the length of the list.

# numbers = [1,2,3,4,5,6,7,8,9,10]
# for x in numbers:
#     print(x)
#     print('loop is repeating...')
#     if x ==10:
#         print('Loop has stopped.')


# groceryList = ['apple','orange','beef','bread','orange','water']

# for item in groceryList:
#     if item == 'orange':
#         continue
#     print(item)


gradeList = [100,50,70,80,80,95,70,50]

for grade in gradeList:
    if grade < 75:
        grade += 5
        print(grade)
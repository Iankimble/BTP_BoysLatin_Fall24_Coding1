# Create a function that will determine what 
# level of education a college student is in, 
# based on the number of years they've been in 
# school.

collegeTitles= ['no college experience yet...','freshman','sophmore','junior','senior']

# the len() function id used to count items in a list.
# the code below will return 5, because there are
# 5 items in the list.
print (len(collegeTitles))


def titleBySchoolYear():
    # the input function allows us to pass data directly into
    # our code.
    # BUT, it will transform the data that you give it
    # into a STRING

    # INT is a built-in function that allows us to transform
    # anything in its round brackets, into numbers.
    # the first three letters of Integer are INT.
    year = int(input('How many years of college do you have? '))
    if year == 0:
        print(collegeTitles[0])
    elif year== 1:
        print(collegeTitles[1])
    elif year== 2:
        print(collegeTitles[2])
    elif year== 3:
        print(collegeTitles[3])
    elif year== 4:
        print(collegeTitles[4])
    elif year== 5 or year== 6:
        print('Youre grad school attaining your masters degree.')
    elif year== 7 or year== 8:
        print('Youre in grad school attaining your doctorate.')
    else:
        print('error: didnt recognize input.')

titleBySchoolYear()


# A list is a data type for collecting and organizing 
# other data types. 

# In order to create a list we need to create variable
# and then use the square brackets to place data inside of. 
        
GroceryList = ['Water','Apples','Chicken','Window Cleaner']
tiktokProfile = [GroceryList, 'iankProfile','ewof4oi8hfrio43hf0943hfoi4i/eoiffewo/hionwoei/',30, 10, 100, 10, 10, True]

# print(tiktokProfile)


# Create a function that will allow a user add food items to their cart. 

def foodMenu():
    print('Welcome to my restuarant!')  
    print('1. burger')
    print('2 fries')
    print('3 soda')
    food = input('Which Item would you like to order? ')  
    if food == 1:
        print('you have ordered a burger')
    elif food == 2:
        print('you have order fries')
    elif food == 3:
        print('you have ordered a soda')
    else:
        print('please select one of the following menu items.')

# foodMenu(food)
#     print('Welcome to my restuarant!')  
#     print('1. burger')
#     print('2. fries')
#     print('3. soda')
#  if food == 1:
#         print('you have ordered a burger')
#     elif food == 2:
#         print('you have order fries')
#     elif food == 3:
#         print('you have ordered a soda')
#     else:
#         print('please select one of the following menu items.')
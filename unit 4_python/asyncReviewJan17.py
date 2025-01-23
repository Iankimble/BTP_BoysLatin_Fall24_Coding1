campingSupplies = ['tent',
                   'sleeping bag',
                   'flash light',
                   'camping knife'
                   ]

# 1. Reverse the order of the list.

campingSupplies.reverse()
#print(campingSupplies)

# 2. Add a camping item to the list
campingSupplies.append('water bottle') # will add the new item
# to the end of the list.

campingSupplies.insert(2,'portable fan') # will add the item
# to the list based on a list position.

#print(campingSupplies)

# 3. Combine the list above with the list below 
campingFood = ['marshmellows','gram crackers',
               'chocolate','chicken hot dogs',
               'water',]

# campingSupplies.append(campingFood)
# print(campingSupplies)

# numbers =[1,2,3,4,[5,6,7,8]]

campingSupplies.extend(campingFood)
#print(campingSupplies)

# numbers =[1,2,3,4,5,6,7,8]

# 4. Replace the 'flash light' string item with 'campfire kit' string
# item. 

campingSupplies.pop(1)
campingSupplies.insert(1,'campfire kit')
print(campingSupplies)

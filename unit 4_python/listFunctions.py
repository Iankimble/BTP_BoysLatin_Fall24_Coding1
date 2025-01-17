# List = A data type for collecting and organizing data
# in 1 varable. 
# - Lists can include all data types, including 
# other lists.
# - Lists can contain duplicates. 
# - we can search and select specific items from a list
# using the list index. 
# - Lists can be changable. We can add and remove items from a list.
# - We can also duplicate or delete entire lists. 

skii_Trip_Items = ['snow boots','hat','heavy coat']

# append() method - this is a special type of function
# that allow us to add items to a list. The new item
# will be attached to the end of the list. 

skii_Trip_Items.append('gloves')
print(skii_Trip_Items)

# insert() method - this is a special type of function
# that will allow us to add items to a list at specific 
# index position.
# this method will require 2 arguments to work; 
# the index position you want to place the data
# and the data you want to add. 

skii_Trip_Items.insert(2,'goggles')
print(skii_Trip_Items)

# pop method() - A special function that 
# allows us to remove the last item in the list.

skii_Trip_Items.pop()
print(skii_Trip_Items)

# remove() method. This is a special function
# that allows us to remove a list item specifically by its
# value.
# remove() require 1 argument, which is the value you 
# want to remove. 

skii_Trip_Items.remove('hat')
print(skii_Trip_Items)

# clear() method - this is a special function that
# allows us to delete all the items inside of a list.
skii_Trip_Items.clear()
print(skii_Trip_Items)

 
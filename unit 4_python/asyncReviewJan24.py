numberList = [1,23,56,3,56,3,20,200]

# Create a function that uses a 
# while loop to print/ console.log 
# the list but in reverse order.

# numberList.reverse()
# print(numberList)

def numberReverseLoop():
        listNumberCount= 7

        while listNumberCount >= 0:
                print(numberList[listNumberCount])
                listNumberCount -=1

numberReverseLoop()
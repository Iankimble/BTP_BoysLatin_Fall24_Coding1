var numberList = [1, 23, 56, 3, 56, 3, 20, 200]

// Create a function that uses a while loop to print/ console.log 
// the list but in reverse order.

 reverseNumberList = numberList.reverse()
 console.log(reverseNumberList)

function reverseNumbers(){
    var ListNumber = 7
    while( ListNumber >=0 ){
        console.log(numberList[ListNumber])
        ListNumber -=1
    }
}

reverseNumbers()
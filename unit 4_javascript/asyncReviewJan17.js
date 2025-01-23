// 1 . Reverse the order of the array 
campingSupplies = ['tent',
    'sleeping bag',
    'flash light',
    'camping knife']

reverseCampingList= campingSupplies.reverse();
//console.log(reverseCampingList);

// 2. add a new elemen to camping array
reverseCampingList.push('water bottle')
// console.log(reverseCampingList)

// 3 . combine the array above with the array below:
var campingFood = ['marshmellows',
    'gram crackers','chocolate',
    'chicken hot dogs','water',]

var allCampingGear = reverseCampingList.concat(campingFood)
console.log(allCampingGear)

// 3. You have been hired by target to assist
// them with their store member discount software.
//  The would like to make it so that shoppers who have
// a specific membership tier can save a certain amount of
// money on the products they buy. provided below are the
// memberships and the discount amount they should recieve:

// - superShopper should recieve a 10% discount on their items
// - megaShopper  should recieve a 15% discount on their items
// - ultraShopper should receive a 20% discount on their items

// You program should be able to take in the shoppers
// membership type, the name of the item they are purchasing,
// and the item price, and should return a message telling the
// user what the final price of the item is and how much they saved.

// For example: congratulations superShopper, you saved
// $10.00 on this TV. Your final

// item price is $90.00.

// KEY POINTS
// Create a function that will apply a discount to an item's price
// based on their membership tier.

// - superShopper = 10% discount on their item.
// - megaShopper  = 15% discount on their item.
// - ultraShopper = 20% discount on their item.

// Program needs to print out message congratulating them on savings.
// need item name, item price, membership tier.

function membershipDiscount() {
  console.log("function is working");
  
    if (member == "superShopper") {
    console.log("you are a super shopper. You get 10 percent off.");
  } 

  else if (member == "megaShopper") {
    console.log("you are a super shopper. You get 10 percent off.");
  } 

  else if (member == "ultraShopper") {
    console.log("you are a ultra shopper. You get 10 percent off.");
  }
}

membershipDiscount();

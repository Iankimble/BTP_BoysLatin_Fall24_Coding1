// data types - level 1: most basic building block of
// code (numbers, letters, true or false).

// operators - level 2: the ability to manipulate and
// do things with data types
// (math, comparisons, assignment, etc. ).

// functions - level 3: taking the first two concepts and
// organizing these operations and data types
// into instructions

// Billing System Function.
// You've been hired as an engineer at spotify to assist with
// developing
// a payment verification system. Your function s
// hould be able to check
// a users payment date and account balance and verify if
// they need to make
// payment today, and if yes, check if they have enough
//  money in their account
// to pay there bill. If they do have enough money, your
//  program should
// return a message confirm they're bill has been paid
// and show their remaining
// account balance. If they do NOT have enough money,
// your function should
// return that they do not have enough money.

// Payment function that checks to see if the payment is today for a
// user and then check to see if they have money in their account
// to pay their subscription

function checkSubscription(scheduledPayDate, accountBalance) {
  if (scheduledPayDate == 10) {
    if (accountBalance > 15.0) {
      console.log(
        "Your subscription has been renewed. Auto-pay was successful."
      );
    } else if (accountBalance < 15.0) {
      console.log(
        "Your subscription is on hold. Please check you payment method."
      );
    } else {
      console.log("There was an error in our system");
    }
  } else {
    console.log("Bill not due. It is not the payment date yet.");
  }
}
checkSubscription(10, 'sorry i aint got it');

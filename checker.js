// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

function validateCred(array) {
  //iterate backwards through array, starting at the second to last number
  for (let i = array.length - 2; i >= 0; i--) {
    /* if the number is an odd number of indexes away from last number and greater than or equal to five */
    if ((array.length - i) % 2 === 0 && array[i] >= 5) {
      //multiply the number by 2 and subtract 9
      array[i] = array[i] * 2 - 9;
    } else if ((array.length - i) % 2 === 0 && array[i] < 5) {
      /* if the number is an odd number of indexes away from the last number and less than five */
      //multiply the number by 2
      array[i] = array[i] * 2;
    }
  }

  /* if the sum of the previous array can be divided by 10 evenly, return true. If there is a remainder, return false */
  if (
    array.reduce((previous, current) => {
      return (previous + current) % 10;
    }) === 0
  ) {
    return true;
  } else {
    return false;
  }
}

//testing 'validateCred' function
console.log(validateCred(invalid2));

//create empty array for invalid card numbers
let invalidCards = [];

function findInvalidCards(nestedArray) {
  //iterate through the nested array
  for (let i = 0; i < nestedArray.length; i++) {
    /* if the 'validateCredit' function called on the element at index 'i' in the nested array returns false, add it to the 'invalidCards' array */
    if (validateCred(nestedArray[i]) === false) {
      invalidCards.push(nestedArray[i]);
    }
  }
  return invalidCards;
}

/* setting 'invalidCards' variable equal to result of calling 'findInvalidCards' on 'batch' array */
invalidCards = findInvalidCards(batch);

//logging to see result
console.log(invalidCards);

/* setting invalidCards variable equal to result of findInvalidCards function called on 'batch' array */
invalidCards = findInvalidCards(batch);

//logging to see result
console.log(invalidCards);

//creating empty array for companies issuing invalid numbers
let badComps = [];

function idInvalidCardCompanies(nestedArray) {
  //iterating through nested array
  for (let i = 0; i < nestedArray.length; i++) {
    //testing first element of each element in the nested array
    switch (nestedArray[i][0]) {
      case 3:
        badComps.push("Amex");
        break;
      case 4:
        badComps.push("Visa");
        break;
      case 5:
        badComps.push("Mastercard");
        break;
      case 6:
        badComps.push("Discover");
        break;
      default:
        badComps.push("Company not found");
    }
  }
  return badComps;
}

/*setting badComps variable equal to result of calling 'idInvalidCardCompanies' on invalidCards array */
badComps = idInvalidCardCompanies(invalidCards);

//logging to test results
console.log(badComps);

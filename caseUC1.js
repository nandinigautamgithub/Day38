function printValue(digit) {
  // Switch block to check for
  // each digit c
  switch (digit) {
    // For digit 0
    case "0":
      console.log("Zero ");
      break;

    // For digit 1
    case "1":
      console.log("One ");
      break;

    // For digit 2
    case "2":
      console.log("Two ");
      break;

    // For digit 3
    case "3":
      console.log("Three ");
      break;

    // For digit 4
    case "4":
      console.log("Four ");
      break;

    // For digit 5
    case "5":
      console.log("Five ");
      break;

    // For digit 6
    case "6":
      console.log("Six ");
      break;

    // For digit 7
    case "7":
      console.log("Seven ");
      break;

    // For digit 8
    case "8":
      console.log("Eight ");
      break;

    // For digit 9
    case "9":
      console.log("Nine ");
      break;
  }
}

// Function to iterate through every
// digit in the given number
function printWord(N) {
  var i,
    length = N.length;

  // Finding each digit of the number
  for (i = 0; i < length; i++) {
    // Print the digit in words
    printValue(N[i]);
  }
}

// Driver code
var N = "8";
printWord(N);
 
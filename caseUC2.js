//uc2 (weekdays)

function printValue(days) {
    // Switch block to check for
    // each input c
    switch (days) {
      case "0":
        console.log(" sunday ");
        break;

      case "1":
        console.log(" monday ");
        break;

      case "2":
        console.log(" tuesday ");
        break;

      case "3":
       console.log(" wednesday ");
        break;

      case "4":
        console.log(" thursday ");
        break;

      case "5":
        console.log(" friday ");
        break;

      case "6":
        console.log(" saturday ");
        break;

    }
  }

  // Function to iterate through every
  // digit in the given number
  function printWeek(WD) {
    var i,
      length = WD.length;

    // Finding each digit of the number
    for (i = 0; i < length; i++) {
      // Print the digit in words
      printValue(WD[i]);
    }
  }

  //Driver code
  var WD = "0";
  printWeek(WD);  




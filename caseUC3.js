//uc3 (unit,tens)

function printValue(word) {
    // Switch block to check for
    // each input c
    switch (word) {
      case "1":
        console.log(" unit ");
        break;

      case "10":
        console.log(" ten ");
        break;

      case "100":
        console.log(" hundred ");
        break;

      case "1000":
       console.log(" thousand ");
        break;

    }
  }

  // Function to iterate through every
  // digit in the given number
  function printWord(WD) {
    var i,
      length = WD.length;

    // Finding each digit of the number
    for (i = 0; i < length; i++) {
      // Print the digit in words
      printValue(WD[i]);
    }
  }

  //Driver code
  var WD = "1";
  printWord(WD);  




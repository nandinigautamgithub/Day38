//uc4 (conversion inch to feet)

function Conversion(meter) {
    var inch = 0.083333 * feet;
    var feet = 12 * inch;
    var feet = 0.3048 * meter;
    var meter = 3.28084 * feet;
     inch=inch.toFixed(3);
     feet=feet.toFixed(2);
     meter=meter.toFixed(2);
   console.log("Feet is: \n" + feet);
   console.log("Meter is: \n" + meter); 
   return 0;
}

// Driver Code
    meter = 10;
     
   Conversion(meter);
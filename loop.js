//uc1
const prompt = require("prompt-sync")();
const base = prompt('Enter a base number: ');
const power = prompt('Enter a power number: ');   
          var result = base**power;
          console.log(+ base + " power of " + power +" is:"  + result);
 /*   
//uc1
function highestPowerof2(n)
   {
     let res = 0;
     for (let i = n; i >= 1; i--)
        {
         // If i is a power of 2
          if ((i & (i - 1)) == 0)
             {
                  res = i;
                break;
             }
        }
     return res;
   }
   
 
// Driver code
      const prompt = require("prompt-sync")();
const n = prompt('Enter a  number: ');
      console.log(highestPowerof2(n));

 */      

//uc2(Harmonic)

function nthHarmonic(N)
{
    // H1 = 1
    let harmonic = 1.00;
 
    // loop to apply the formula
    // Hn = H1 + H2 + H3 ... +
    // Hn-1 + Hn-1 + 1/n
    for (let i = 2; i <= N; i++)
    {
        harmonic += parseFloat(1) / i;
    }
 
    return harmonic;
}
 
// Driver Code
 
let N = 89;
console.log( "Harmonic nth of " + N + " is " + nthHarmonic(N).toFixed(5));


//uc5
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
   
  // Driver Code
  let num = 5;
  console.log("Factorial of " + num + " is " + factorial(num));

  //uc6
  var integer = 13195;

var primeArray = [];

//find divisors starting with 2

for (i = 2; i < integer/2; i++) {
  if (integer % i == 0) {

    //check if divisor is prime
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log("Prime Factorial of " + integer + " is " + primeArray[k]);
}


//uc8 (number 1 to 100)

const number = Math.ceil(Math.random() * 100);
console.log(number);
 const gnumber = prompt('Guess the number between 1 and 100 inclusive:');
 if (gnumber == number)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnumber);
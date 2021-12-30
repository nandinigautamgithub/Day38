//uc1(deg F to deg C)
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

//uc2(plaindrome)

// program to check if the string is palindrome or not

function checkPalindrome(str) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string ='89098';
console.log('status :');
checkPalindrome(string);


//uc3(prime)

function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));

  //uc4(plaindrom prime)

  function oneDigit(num)
    {
       
        return (num >= 0 && num < 10);
    }
    // dupNum contains address of a copy of num.
    function isPalUtil(num , dupNum)
    {
// compares the first digit with the last digit
        if (oneDigit(num))
            return (num == (dupNum) % 10);
// We divide num while moving up the recursion tree
        if (!isPalUtil(parseInt(num/10), dupNum))
            return false;

        dupNum = parseInt(dupNum/10);
      
        // At this point, if num%10 contains ith
        // digit from beginning, then (dupNum)%10
        // contains ith digit from end
        return (num % 10 == (dupNum) % 10);
    }
      
    // PalUtil() to find out whether num is palindrome or not
    
    function isPal(num)
    {
        // If num is negative, make it positive
        if (num < 0)
           num = -num;
      
        // Create a separate copy of num, so that
        // modifications made to address dupNum don't
        // change the input number.
        var dupNum = num; // dupNum = num
      
        return isPalUtil(num, dupNum);
    }
      
    // Function to generate all primes and checking
    // whether number is palindromic or not
    function printPalPrimesLessThanN(n)
    {
        // Create a boolean array "prime[0..n]" and
        // initialize all entries it as true. A value
        // in prime[i] will finally be false if i is
        // Not a prime, else true.
        var prime = Array.from({length: n+1}, (_, i) => true);
         
        for (p = 2; p*p <= n; p++)
        {
            // If prime[p] is not changed, then it is
            // a prime
            if (prime[p])
            {
                // Update all multiples of p
                for (i = p*2; i <= n; i += p){
                    prime[i] = false;}
            }
        }
      
        // Print all palindromic prime numbers
        for (p = 2; p <= n; p++){
      
           // checking whether the given number is
           // prime palindromic or not
           if (prime[p] && isPal(p)){
              console.log(p + " ");
              }
           }
    }
     
    // Driver function
    var n = 100;
    console.log('Palindromic primes smaller than or equal to '+n+' are :');
    printPalPrimesLessThanN(n);
 
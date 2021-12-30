//uc3(prime check)
function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
const prompt = require("prompt-sync")();
const n = prompt('Enter a number: ');
const value = isPrime(n);
console.log(value);

//uc4
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
console.log(primeFactorsTo(100));
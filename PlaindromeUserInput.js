

function checkPalindrome(str) {

    const len = string.length;
    for (let i=0; i<len/2; i++) {
        if(string[i] !== string[len-1-i]) {
            return 'It is not a plaindrome';
        }
    }
    return 'It is a plaindrome';
}
const prompt = require("prompt-sync")();
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);



/*take input
const string ='89098';
console.log('status :');
checkPalindrome(string);   */
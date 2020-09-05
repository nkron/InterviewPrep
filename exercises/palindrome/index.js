// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    var result= "";
    
    var chars = str.split("");

    for(var i = chars.length-1;i>=0;i--){
        result+=chars[i];
    }

    return result===str ? true : false;

}

module.exports = palindrome;

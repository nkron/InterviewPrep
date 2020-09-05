// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let charMap = {};
        
    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }           
        else{
            charMap[char] = 1;
        }
    }

    let highKey='';
    let highVal=0;
    for(let char in charMap){
        if(charMap[char]>highVal)
            highKey=char;
            highVal=charMap[char];
    }
    return highKey;
}

module.exports = maxChar;

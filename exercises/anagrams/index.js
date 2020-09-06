// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
anagrams("hello","olleh");
function anagrams(string1, string2) {
    debugger;
    let charMap1 ={}, charMap2={};

    charMap1 = makeCharMap(string1);
    charMap2 = makeCharMap(string2);

    if(string1.length>string2.length){
        return compareCharMaps(charMap1,charMap2);
    }
    else{
        return compareCharMaps(charMap2,charMap1);
    }
}
function makeCharMap(str){

    str.replace(/[^\w]/g, "").toLowerCase();
    let arr=str.split("");

    let charMap={};
    for(let char of arr){
        if(charMap[char]){
            charMap[char]++
        }           
        else{
            charMap[char] = 1;
        }
    }
    return charMap;
}
function compareCharMaps(map1,map2){
    for(let char in map1){
        while(map1[char]>0){
            if(map2[char]==0){
                return false;
            }
            map1[char]--; map2[char]--;
        }
    }
    return true;
}


module.exports = anagrams;

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    var reversed="";

    //dont have to do this because parse int will get rid of the negative
    // if(Math.sign(n)==-1){
    //     n*-1;
    //     neg=true;
    // }

    var chars = n.toString().split("");

    for(var i = chars.length-1;i>=0;i--){
        reversed+=chars[i];
    }
    return parseInt(reversed)*Math.sign(n);
}

module.exports = reverseInt;

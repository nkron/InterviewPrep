// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    const words=[];

    for(let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');

    // let arr = str.split(" ");
    // let result = "";

    // let first;
    // let rest;
    // for(let word of arr){
    //     if(result!=""){
    //         result+=" ";
    //     }
    //     first=word.substring(0,1);
    //     first=first.toUpperCase();
    //     result+= first + word.substring(1);
    // }
    
    // return result;
}

module.exports = capitalize;

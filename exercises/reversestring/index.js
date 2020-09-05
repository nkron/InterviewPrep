// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    var result= "";
    
    var chars = str.split("");

    for(var i = chars.length-1;i>=0;i--){
        result+=chars[i];
    }

    return result

}
reverse('asdf');
module.exports = reverse;

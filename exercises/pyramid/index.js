// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    const maxLength = 2*n-1;
    const midpoint = Math.floor(maxlength/2); 
    if(row===n){
        return;
    }
    
    if(level.length===maxLength){       
        console.log(level);
        return pyramid(n,row+1)     
    }
    
    const add = midpoint - row<= level.length >= level.length ? '#' : ' ';
    pyramid(n,row,level+add);    
}
// const midpoint = Math.floor((2*n-1)/2);
    
    // for(let row = 1;row<=n;row++){    
    //     let str = '';
    //     for(let col=0;col<(2*n-1);col++){
    //     }     

    //     if(midpoint - row <=col && midpoint + row >= col){        
    //         str+='#';
    //     }      
    //     else
    //     {
    //         str+='';
    //     }
    //     console.log(str); 
module.exports = pyramid;

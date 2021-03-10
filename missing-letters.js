
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

function fearNotLetter(str) {
     
     let alphabet = "abcdefghijklmnopqrstuvwxyz";
     let startingPosition = alphabet.indexOf(str[0]);
     let focusedAlphabet = alphabet.slice(startingPosition);

     for(let i = 0; i < str.length; i += 1) {
     	if(str[i] i= focusedAlphabet[i]) {
     		return focusedAlphabet[i]
     	}
     }
  }

fearNotLetter("stvwx");
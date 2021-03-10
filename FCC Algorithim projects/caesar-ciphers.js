/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.   */

              
              
              
 function rot13(str) {
 var split  = str.split("")
 console.log(split)
 let final = ""
for (let i = 0; i < split.length; i++) {

final += transform(split[i])
 }
 
return final
 console.log(final)
 
}
rot13("SERR PBQR PNZC")

function transform(letter) {
  switch (letter) {
 case "A":
 return "N"
 break;
  case "B":
  return "O"
  break;
  case "C":
  return "P"
  break;
  case "D":
  return "Q"
  break;
  case "E":
  return "R"
  break;
  case "F":
  return "S"
  break;
  case "G":
  return "T"
  break;
  case "H":
  return "U"
  break;
  case "I":
  return "V"
  break;
  case "J":
  return "W"
  break;
  case "K":
  return "X"
  break;
  case "L":
  return "Y"
  break;
  case "M":
  return "Z"
  break;
  case "N":
  return "A"
  break;
  case "O":
  return "B"
  break;
  case "P":
  return "C"
  break;
  case "Q":
  return "D"
  break;
  case "R":
  return "E"
  break;
  case "S":
  return "F"
  break;
  case "T":
  return "G"
  break;
  case "U":
  return "H"
  break;
  case "V":
  return "I"
  break;
  case "W":
  return "J"
  break;
  case "X":
  return "K"
  break;
  case "Y":
  return "L"
  break;
  case "Z":
  return "M"
  case " ":
  return " "
  break;
  case "!":
  return "!"
  break;
  case "?":
  return "?"
  break;
  case ".":
  return "."
  break;
  case undefined:
  return ""
  break;
  
  }
}
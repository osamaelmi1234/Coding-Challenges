/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.  */


function convertToRoman(num) {
  
  let arrNum = num.toString()

if (arrNum.length === 1) {
 let finalResult = oneToNine(arrNum)
 console.log(finalResult)
 return finalResult
}

  else if (arrNum.length === 2) {
     let finalResult = tenToNinety(arrNum[0]) + oneToNine(arrNum[1])
     console.log(finalResult)
     return finalResult
  }
  
  else if (arrNum.length === 3) {
    if (arrNum[arrNum.length - 1] == 0 && arrNum[arrNum.length - 2] > 0) {
      let finalResult = hundredToNine(arrNum[0]) + tenToNinety(arrNum[1])
      console.log(finalResult)
      return finalResult
    }
     else if (arrNum[arrNum.length - 2] == 0 && arrNum[arrNum.length -1] > 1) {
       let finalResult = hundredToNine(arrNum[0]) + oneToNine(arrNum[2])
      console.log(hundredToNine(arrNum[0]))
         return finalResult
}
      else if (arrNum[arrNum.length - 2] == 0 && arrNum[arrNum.length - 1] == 0) {
      let finalResult = hundredToNine(arrNum[0])
      
    return finalResult  
} else {
    let finalResult = hundredToNine(arrNum[0]) + tenToNinety(arrNum[1]) + oneToNine(arrNum[2])
    console.log(finalResult)
    return finalResult
}
  }
  else if (arrNum.length === 4) {
let finalResult = thousandPlus(arrNum[0]) + hundredToNine(arrNum[1]) + tenToNinety(arrNum[2]) + oneToNine(arrNum[3])
console.log(finalResult)
return finalResult
  }
  
  
 return num;
}

 let result =  convertToRoman(83);
console.log(result)

function oneToNine(number) {
var answer = ""
  switch (number) {
case "1" :
   answer =  "I"
   return answer
  break;
  case "2":
  answer = "II"
  return answer
  break;
  case "3":
answer = "III"
return answer
   break;
  case "4":
  answer = "IV"
  return answer
  break;
  case "5":
  answer = "V"
  return answer
  break;
  case "6":
  answer = "VI"
  return answer
  break;
  case "7":
  answer = "VII"
  return answer
  break;
  case "8":
  answer = "VIII"
  return answer
  break;
  case "9":
    answer = "IX"
    return answer
    break;
  
  }
  return ""
}
function tenToNinety(number) {
  var answer = ""
switch (number) {
 case "1": 
 answer =  "X"
 return answer
 break;
 return answer
 case "2":
 answer = "XX"
 return answer
 break;
 case "3":
 answer = "XXX"
 return answer
  break;
 case "4":
 answer = "XL"
 return answer
 break;
 case "5":
 answer = "L"
 return answer
 break;
 case "6":
 answer = "LX"
 return answer
 break;
 case "7":
 answer = "LXX"
 return answer
 break;
 case "8":
 answer = "LXXX"
 return answer
 break;
 case "9":
  answer = "XC"
  return answer
 break;
}
return ""
}
function hundredToNine(number) {
  var answer = ""
switch (number) {

case "1":
answer = "C"
return answer
  break;
  case "2":
  answer = "CC"
  return answer
  break;
  case "3":
  answer ="CCC"
  return answer
  break;
  case "4":
  answer = "CD"
  return answer
  break;
  case "5":
  answer ="D"
  return answer
  break;
  case "6":
  answer ="DC"
  return answer
  break;
  case "7":
  answer = "DCC"
  return answer
  break;
  case "8":
  answer = "DCCC"
  return answer
  break;
  case "9":
  answer = "CM"
  return answer
  break;
}
return ""
}
function thousandPlus (number) {
  var answer = ""
  switch (number) {
    case "1":
    answer = "M"
    return answer
    break;
    case "2":
    answer = "MM"
    return answer
    break;
    case "3":
    answer = "MMM"
    return answer
    break;
  }
  return ""
}


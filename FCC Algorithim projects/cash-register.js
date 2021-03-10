/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. 

See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price
  let arrayHundred = ["ONE HUNDRED", 0]
  let arrayTwenty = ["TWENTY", 0]
  let arrayTen = ["TEN", 0]
  let arrayFive = ["FIVE", 0]
  let arrayOne = ["ONE", 0]
  let arrayQuarter = ["QUARTER", 0]
  let arrayDime = ["DIME", 0]
  let arrayNickel = ["NICKEL", 0]

  let arrayPenny = ["PENNY", 0]

  console.log("amin")
  let arrayFinal = [arrayPenny, arrayNickel, arrayDime, arrayQuarter, arrayOne, arrayFive, arrayTen, arrayTwenty, arrayHundred]
  let arrayFinalR = arrayFinal.reverse()
  console.log(arrayFinal)

  var arrayC = {
    status: "",
    change: []
  }
  let arrayTemp = ""
  while (change >= 100 && arrayHundred[1] <= cid[8][1] - 100) {
    change -= 100
    arrayHundred[1] += 100
  }
  while (change >= 20 && arrayTwenty[1] <= cid[7][1] - 20) {
    change -= 20
    arrayTwenty[1] += 20
  }
  while (change >= 10 && arrayTen[1] <= cid[6][1] - 10) {
    change -= 10
    arrayTen[1] += 10
  }
  while (change >= 5 && arrayFive[1] <= cid[5][1] - 5) {
    change -= 5
    arrayFive[1] += 5
  }
  while (change >= 1 && arrayOne[1] <= cid[4][1] - 1) {
    change -= 1
    arrayOne[1] += 1
  }
  while (change >= 0.25 && arrayQuarter[1] <= cid[3][1] - 0.25) {
    change -= 0.25
    arrayQuarter[1] += 0.25
  }
  while (change >= 0.1 && arrayDime[1] <= cid[2][1] - 0.1) {
    change -= 0.1
    arrayDime[1] += 0.1
  }
  while (change >= 0.05 && arrayNickel[1] <= cid[1][1] - 0.05) {
    change -= 0.05
    arrayNickel[1] += 0.05
  }
  while (change > 0 && arrayPenny[1] <= cid[0][1]) {
    change -= 0.01
    arrayPenny[1] += 0.01

  }
  arrayPenny[1] = Number(arrayPenny[1].toFixed(2))

  function whileT(arr) {
    while (arr[1] > 0) {
      arrayC.change.push(arr)
      return arrayC
    }
  }
  for (let z = 0; z < arrayFinalR.length; z += 1) {
    console.log(whileT(arrayFinal[z]))


  }

  let cidTotal = 0
  for (let i = 0; i < cid.length; i += 1) {
    cidTotal += (cid[i][1])

  }

  let changeTotal = 0
  for (let c = 0; c < arrayC.change.length; c++) {
    changeTotal += arrayC.change[c][1]
  }
  changeTotal = Number(changeTotal.toFixed(2))

  if (cidTotal === changeTotal) {
    return {
      status: "CLOSED",
      change: arrayFinal.reverse()
    }
  } else if ((cash - price) > changeTotal || changeTotal !== (cash - price)) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  } else if (changeTotal === (cash - price) && cidTotal > changeTotal) {
    return {
      status: "OPEN",
      change: arrayC.change
    }
  }


}
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

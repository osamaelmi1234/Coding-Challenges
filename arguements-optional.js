/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument is not a valid number, return undefined.
*/

function addTogether() {
	let firstArguement = arguments[0];


	if(arguments.length > 1 ) {
     let secondArguemnt = arguments[1];
     return checkArguementsAndAddIfValid(firstArguement, secondArguemnt)
	 } else if (arguments.length === 1) {
	 	if(argumentCheck(firstArguement) === undefined) {
	 		return undefined;
	 	} else {
	 		return function(secondArguemnt) {
	 			return checkArguementsAndAddIfValid(firstArguement, secondArguemnt)
	 		}
	 	}
	 }
}

function argumentCheck(argument) {
	if(typeof argument === "number") {
		return argument;
	} else {
		return undefined
	}
}

 function checkArguementsAndAddIfValid(firstArguement, secondArguemnt) {
 	if (argumentCheck(first) != undefined && argumentCheck(second) != undefined) {
 		return first + second;
 	} else {
 		return undefined
 	}
 }

addTogether(2,3);
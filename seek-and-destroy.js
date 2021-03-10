You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
	let survivingElements = [];
	let battleField = Object.values(arguments)[0];
	let elementsToDestroy = Object.values(arguments).splice(1);

	battleField.map(positionToRecon =>  {
		if(elementsToDestroy.indexOf(positionToRecon) === -1) {
			survivingElements.push(positionToRecon)
		}
	})
	return survivingElements
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
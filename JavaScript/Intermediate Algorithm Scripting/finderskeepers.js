
/*
	Create a function that looks through an array (first argument) and 
	returns the first element in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
	console.log(arr);

	//Goes through arr and filtered the values that pass the test argument
	var filter = arr.filter(func);

	//Returns the first agrument that passes the test
	if (filter.length > 1){
		console.log(filter);
		console.log('Function Filtered : ' + filter[0]);
		return filter[0];
	}
	//return undefined if no matches
	else{
		console.log('No Matches.')
		return undefined;
	}

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });

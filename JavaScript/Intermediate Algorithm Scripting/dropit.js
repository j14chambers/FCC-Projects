
/*
	Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
	The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
	
	Return the rest of the array, otherwise return an empty array.
*/


function dropElements(arr, func) {
  	console.log('ARR: ');
  	console.log(arr);
  	var elements = [];

  	var filter = arr.filter(func);
  	console.log('Filter arr:  ' + filter);

  	if (filter == arr){
  		return element = filter;
  	}
  	else{
	  	for(var i = 0; i < arr.length; i++){

	  		if (filter[0] == arr[i]){
		  		console.log('positon where filter[i] == arr[i]: ' + i);
		  		console.log('New Array: ' + arr.slice(i));
		  		elements = arr.slice(i);
		  		break;
	  		}

	  	}
  	}

  	console.log('Element: ' + elements);
  	return elements;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); //should return [3, 4]
dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); //should return [1, 0, 1]
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); //should return [3, 9, 2]
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); //should return [7, 4]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); //should return []


/*
	Flatten a nested array. You must account for varying levels of nesting.
*/



function steamrollArray(arr) {

  	var flatten = function flattenDeep(arr1){
   		return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
	}(arr);
	console.log(flatten);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);

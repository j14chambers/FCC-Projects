
/*
	Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
	Remember, you can access object properties through either dot notation or [] notation.
*/
function truthCheck(collection, pre) {
	console.log(collection);
	console.log(pre);
	var counter = 0;
		for( var c in collection){
			if(collection[c].hasOwnProperty(pre) == true && Boolean(collection[c][pre])){
				counter++;
			}
		}
	console.log(counter == collection.length)
  	return counter == collection.length;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
truthCheck([{"single": "double"}, {"single": undefined}], "single")
truthCheck([{"single": "double"}, {"single": NaN}], "single")
/*truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy", "sex": "male"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
	{"user": "Dipsy"}, 
	{"user": "Laa-Laa", "sex": "female"}, 
	{"user": "Po", "sex": "female"}], "sex")

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")

*/
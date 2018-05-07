/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/


function smallestCommons(arr) {
console.log('WHAT IS THE THE LCM OF ' + arr);

	var range = [];

	for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
		console.log(i);
		range.push(i);
	}

	range.sort(function(a, b){
		return b - a;
	});

	console.log('RANGE ' + range);
	var lcm = range[0];
	var c = 1;
	while (c < range.length){
		lcm = (lcm * range[c]) / largestCommon(lcm,range[c]);
		console.log('the LCM IS ' + lcm);
		c++;

	}
	console.log('the LCM IS ' + lcm);
	return lcm;

}

function largestCommon(num1,num2){
	if (num2 == 0){
		return num1;
	}
	else{
		return largestCommon(num2, num1 % num2);
	}
}

smallestCommons([1,5]);
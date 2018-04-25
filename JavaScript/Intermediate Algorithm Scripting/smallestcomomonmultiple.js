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
	var num1 = range[0];
	var num2 = range[1];


	lcm = (num1 * num2) / largestCommon(num1,num2);
	console.log('the LCM IS ' + lcm);

	checkLCM(lcm, range);


}

function largestCommon(num1,num2){
	if (num2 == num1){
		return num1;
	}
	if(num1 > num2){
		return largestCommon(num1 - num2, num2);
	}
	return largestCommon(num1, num2 - num1);
}

function checkLCM(checkValue, range){
	console.log('range in checkLCM ' + range);
	if(checkValue % range[3] == 0){
		
	}
}

smallestCommons([8,44]);
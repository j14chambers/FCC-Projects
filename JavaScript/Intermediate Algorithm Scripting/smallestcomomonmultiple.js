/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/


function smallestCommons(arr) {
	console.log(arr);

	var num1 = arr[0];
	var num2 = arr[1];


	lcm = (num1 * num2)/ largestCommon(num1,num2);
	console.log(lcm);
}

function largestCommon(num1,num2){
	if (num2 == num1){
		return num1;
	}
	if(num1 > num2){
		return largestCommon(num1 - num2, num2)
	}
	return largestCommon(num1, num2 - num1)
}


smallestCommons([8,44]);
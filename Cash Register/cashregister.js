function cashregister(){
	cid = [
		['penny', 2.00], 
		['nickel', 1.50], 
		['dime', 10.00], 
		['quarter', 25.00], 
		['one', 10.00], 
		['five', 20], 
		['ten', 40], 
		['twenty', 150], 
		['fifty', 200], 
		['onehundred',300]
	];
	cidAmount =[];

	for (var i = cid.length - 1; i >= 0; i--) {
		cidName = cid[i];
		console.log(cidName);

		cidAmount.push(cidName[1]);
		console.log(cidAmount);
		
		// for (var j = cidName.length - 1; j >= 0; j--) {
		// 	cidName[j];
		// 	console.log(cidName[j]);
			
		// }

	}
	total = (acc, curr) => acc + curr;
	totalCID = cidAmount.reduce(total);
	console.log(totalCID);
	checkcashregister(43.73, 50.00,totalCID);
}

function checkcashregister(price, cash, cid){
	console.log('Cash in register: ' + cid);
	console.log('Price: ' + price);
	console.log('Cash: ' + cash);

	changeReturned = Math.ceil((cash - price) * 100) / 100;
	
	console.log('Change = ' + changeReturned);
}
cashregister();
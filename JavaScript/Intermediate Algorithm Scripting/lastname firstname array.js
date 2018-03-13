for (var i = collection.length - 1; i >= 0; i--) {
				console.log(collection[i]); //Array for collection
				//console.log(collection[i].first); // First Name in collection
				console.log(collection[i].last); // Last Name in collection

				var arr = [];
				if (source.last === null) {
					if (collection[i].last === null) {
						console.log('NO LAST NAME.');
					}
					else if (source.last === collection[i].last) {
						console.log(collection[i]);
						arr.push(collection[i]);
						console.log(arr);
					}
					else if (source.last !== collection[i].last){
						console.log('NOT A MATCH.');
					}
				}

				if (source.first === null) {
					if (collection[i].first === null) {
						console.log('NO LAST NAME.');
					}
					else if (source.first === collection[i].first) {
						console.log(collection[i]);
						arr.push(collection[i]);
						console.log(arr);
					}
					else if (source.first !== collection[i].first){
						console.log('NOT A MATCH.');
					}
				}


			}
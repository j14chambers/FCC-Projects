
$(function(){


//do not delete above this line
    
    $('#search-click').click(function(){ 
    	$('#wikipedia-title').html('');
    	var searchItem = document.getElementById('input-search').value;
    	//console.log(searchItem);
    	//console.log('clicked');

    	wikiInfo(searchItem);

    });

    $("#input-search").keypress(function(enter){
    	$('#wikipedia-title').html('');
	    if (enter.which === 13){
	    	var searchItem = document.getElementById('input-search').value;
	    	//console.log(searchItem);
	    	//console.log('keypress');

	    	wikiInfo(searchItem);
	    }
	});


    function wikiInfo(wikiSearchItem){
		var url = "https://en.wikipedia.org/w/api.php?&action=opensearch&search=" + wikiSearchItem +"&format=json&callback=?";

    	$.ajax({
    		type:"GET",
    		url: url,
    		async: false,
    		dataType: "jsonp",
    		success: function(data){
    			//console.log(data);

    			var j = 0;

    			while (j !== 10){

		    	/*for(var i = 1; i < data.length; i++){
					var dataJ = data[i];
		    		//console.log(i);
		    		console.log(dataJ[j]);
		    		
		    	}*/
		    	$('#wikipedia-title').append("<li><a href="+data[3][j]+" target=" + "blank" + "><h2>" +data[1][j]+"</h2></a><p>"+data[2][j]+"</p></li>");
	    		j++;
	    		//console.log(j);
	    	}

    		},
    		error: function(error){
    			console.log('Error. Cannot Load Data.');
    		}

    	});
	}
//do not delete below this line
});

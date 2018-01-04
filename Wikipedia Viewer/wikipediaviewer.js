
$(function(){


//do not delete above this line
    
    $('#search-click').click(function(){ 
    	var searchItem = document.getElementById('input-search').value;
    	console.log(searchItem);
    	console.log('clicked');
    	//wikiInfo(searchItem);

    	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + searchItem, 
    		function(data){
                    $('#wiki-searched').append('<h2>Top 15 Wiki Search Results for "' + searchItem + '"</h2>');
                    $.each(data.query.pages, function (i) {
                        $('#wikipedia-links').append("<p><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid + 
                            "' target='_blank'>" + data.query.pages[i].title + "</a></p>");
                    });
                    
                });

    });

    $("#input-search").keypress(function(enter){
	    if (enter.which === 13){
	    	var searchItem = document.getElementById('input-search').value;
	    	console.log(searchItem);
	    	console.log('keypress')
	    	//wikiInfo(searchItem);
	    	}
	});


    /*function wikiInfo(wikiSearchItem){
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + wikiSearchItem ,
			function(results){
				$('#wikipedia-links').html(results.query);
				console.log(results);
				console.log('finished searching');
				console.log('I search for ' + wikiSearchItem);
			}

		);
	}*/





//do not delete below this line
});

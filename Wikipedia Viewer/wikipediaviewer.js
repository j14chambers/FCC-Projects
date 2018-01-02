
$(function(){

	var searchItem = $('#input-search').val();

//do not delete above this line
    
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchItem ,
		dataType: "json",
		success: function(results){
			$('#wikipedia-links').html(results.query.search[0].title);
			console.log(results.query.search.title);
		}

	});






//do not delete below this line
});

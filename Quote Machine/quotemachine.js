
function quoteMachine(){
	$.ajax({url: "http://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
	    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
	    success: function(response){
	  		$("#randomQuote").html("<h2>" + response.quoteText + "</h2><h4>" + response.quoteAuthor + "</h4>");

    		linkElement = document.getElementById("tweet-this-post");

			$(linkElement).click(function(event){
  				event.preventDefault();
  				var tweetedLink = window.location.href;
  				window.open("http://twitter.com/intent/tweet?text=" + response.quoteText);

			});
        }
    });
}

$(function() {
  	quoteMachine();
});

$("button").click(function(){
  	quoteMachine();
 });

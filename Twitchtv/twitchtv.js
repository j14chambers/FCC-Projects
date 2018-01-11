$(function(){

var userName1 = 'esl_sc';
var userName2 = 'freecodecamp'

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ userName2 + '?callback=?', 
	function(data) {
  		console.log(data);

  		var url = data._links.self;
  		console.log(url);

  		var channel = data._links.channel;
  		console.log(channel);

  		var streamStatus = data.stream;
  		console.log(streamStatus);
  		status(streamStatus);


});

//Status Function
function status(streamReturn){
	console.log(streamReturn);
	
	if(streamReturn === null){
		console.log('Offline');
	}
	else
		console.log('Online');
	
}

});
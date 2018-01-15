$(function(){

freecodecamp();
//liveChannel();*/

function url(userName){
	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ userName + '?callback=?', 
	function(data) {
  		//console.log(data);

  		var url = data._links.self;
  		console.log(url);

  		var channel = data._links.channel;
  		console.log(channel);

  		var streamStatus = data.stream;
  		console.log(streamStatus);

  		status(streamStatus);

  	});

}


//Status Function
function status(streamReturn){
	console.log(streamReturn);
	//$('.status').html('');

	if(streamReturn === null){
		console.log('Offline');
		$('.status').html('<h3> Offline</h3>');

		$('.nostream').html('<p>No Live Stream</p>');
	}
	else{
		//console.log('Online');
		var userNameReturn = streamReturn.channel.display_name;
		var statusReturn = streamReturn.channel.status;
		console.log(userNameReturn);
		console.log(statusReturn);

		$('.nostream').addClass('online');
		$('.status').html('<h3> Online</h3>');
		$('.online').append('<p>' + statusReturn + '</p>');
	}
}


function freecodecamp(){
	url('freecodecamp');
}

$('#live-channel').click(function liveChannel(){

	$.ajax({url: 'https://api.twitch.tv/kraken/streams',
	type: 'GET', 
	success: function(data) {
  		console.log(data);

  		/*var url = data._links.self;
  		console.log(url);

  		var channel = data._links.channel;
  		console.log(channel);

  		var streamStatus = data.stream;
  		console.log(streamStatus);

  		status(streamStatus);*/

  	}
  });
});

});
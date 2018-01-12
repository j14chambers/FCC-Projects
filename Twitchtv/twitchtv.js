$(function(){

/*var userName1 = 'esl_sc';
var userName2 = 'freecodecamp';
var userName3 = 'RobotCalab';*/

neebsgaming();
//esl_sc();
//freecodecamp();
//RobotCalab();

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

  		//var description = data.stream.channel.status;
  		//console.log(description);

  		//console.log(streamReturn);

  	});

}

//Status Function
function status(streamReturn){
	console.log(streamReturn);

	if(streamReturn === null){
		console.log('Offline');
		$('.status').html('<h3> Offline</h3>');

		$('.nostream').html('<p>No Live Stream</p>');
	}
	else{
		console.log('Online');
		var userNameReturn = streamReturn.channel.display_name;
		var statusReturn = streamReturn.channel.status;
		console.log(userNameReturn);
		$('.status').html('<h3> Online</h3>');
		$('#'+ userNameReturn).append('<p>' + statusReturn + '</p>');
	}
}

function freecodecamp(){
	url('freecodecamp');
}
function esl_sc(){
	url('esl_sc');
}
function RobotCalab(){
	url('RobotCalab');
}
function neebsgaming(){
	url('neebsgaming');
}

});
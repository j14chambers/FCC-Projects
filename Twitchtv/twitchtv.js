$(function(){

	display();

	function display() {
		var userName = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
		for(var i = 0; i < userName.length; i++){
			//console.log(i);
			//console.log(channelName);
	    	getChannelInfo(userName[i]);
		}
	}

	function getChannelInfo(channelName){
		var url = "https://wind-bow.gomix.me/twitch-api/streams/" + channelName + "?callback=?";
	    $.getJSON(url, function(channelInfo) {
	    	console.log(url);
	    	console.log(channelInfo);
	    	console.log('channel: ' + channelName);

	      	if (channelInfo.stream !== null) {
	      		console.log('online');

			    $('#channels').append("<a class='online' href='" + 
			    channelInfo.stream.channel.url + "' target='_blank')'><h2>" + 
			    channelInfo.stream.channel.display_name + "</h2><p>" + 
			    channelInfo.stream.channel.game + ". " + 
			    channelInfo.stream.channel.status + "</p></a><p class= 'status'>Online</p>");
	        } 
	        else if (channelInfo.stream === null) {

				console.log('offline');

	        	$('#channels').append("<h2><a href='" + channelInfo._links.channel + "' target='_blank')'>" + 
	        		channelName + "</h2>");
	        		$('#channels').append("<p class='status'>Offline</p>");
			}
			else{
			    console.log('error finding channel');
			}
		})


	}

});
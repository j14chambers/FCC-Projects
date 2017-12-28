
$(function(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "";
				$.ajax({
					url: "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,
					dataType: "jsonp",
					success: function(data){
						$('#tempature').html(data.main.temp + ' C');
						$('#icon').html(data.weather[0].main);
						$("#city").text(data.name + ", " + data.sys.country);
						getIcon(data.weather[0].main);
						getTemp(data.main.temp);
					}

				});
		});
	}
	function getTemp(temp){
		var tempF = ((temp * 9) / 5) + 32;
		$("#tempF").html(tempF + ' F');
		$('#tempF').hide();

}
		$('#temp-unit').click(function(){
			$('#tempF').toggle(1000, function(){

			});
			
			$('#tempature').toggle(1000, function(){
			});

		});
	

	function getIcon(iconImg){
		var iconImg = iconImg.toLowerCase();

	 	switch (iconImg) {
    		case 'drizzle':
      			addIcon(iconImg)
      			break;
		    case 'clouds':
		      	addIcon(iconImg)
		      	break;
		    case 'rain':
		      	addIcon(iconImg)
		      	break;
		    case 'snow':
		      	addIcon(iconImg)
		      	break;
		    case 'clear':
		      	addIcon(iconImg)
		      	break;
		    case 'thunderstom':
		      	addIcon(iconImg)
		      	break;
		    default:
		      	$('div.clouds').removeClass('hide');
		 }
	}

function addIcon(iconImg){
	 $('div.' + iconImg).removeClass('hide');
}


});

$( "#target" ).toggle(function() {
  alert( "First handler for .toggle() called." );
}, function() {
  alert( "Second handler for .toggle() called." );
});
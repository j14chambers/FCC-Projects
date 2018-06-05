// Timer variable
var CountDownTime = new Date('June 5,2018 1:00').getTime();

$('#startTimer').click(function(){
    var minutesInput = document.getElementById('minutes-input').value;
    var hoursInput = document.getElementById('hours-input').value;
    
    var x = setInterval(function(){
        SetTimer();
    },1000);
});

function SetTimer(){
    
    //Current time
    var now = new Date().getTime();
    
    var distance = CountDownTime- now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";


} 



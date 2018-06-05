// Timer variable
var CountDownTime = new Date('June 5,2018 1:00').getTime();

$('#startTimer').click(function(){
    var timerMinutes = document.getElementById('minutes-input').value;
    var timerHours = document.getElementById('hours-input').value;
    var timerSeconds = 60;
    var s = setInterval(function(){
        SetTimer();
        if(timerSeconds >= 0){
            timerSeconds = timerSeconds - 1;
            console.log(timerSeconds + ' Sec ');
        }
    },1000);

    var m = setInterval(function(){
        SetTimer();
        if(timerMinutes >= 0){
            timerMinutes = timerMinutes - 1;
            console.log(timerMinutes + ' Min ');
        }
    },1000*60);

    var h = setInterval(function(){
        if(timerHours >= 0){
            timerHours = timerHours - 1;
            console.log(timerHours + ' h ');
        }

    },1000*60*60);
    document.getElementById("timer").innerHTML = timerHours + "h " + timerMinutes + "m " + timerSeconds + "s ";
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
  
  document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";


}
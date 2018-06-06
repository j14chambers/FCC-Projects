// Timer variable
var CountDownTime = new Date('June 5,2018 20:00').getTime();
var timerMinutes = 0,timerSeconds = 0;
timerSeconds = 10;
$('#startTimer').click(function(){
    timerMinutes = document.getElementById('minutes-input').value;
    timerHours = document.getElementById('hours-input').value;

   $('#minutes').html(timerMinutes);
   $('#seconds').html(timerSeconds);
    startTimer(timerMinutes,timerSeconds);
            
    // var h = setInterval(function(){
    //     if(timerHours >= 0){
    //         timerHours = timerHours - 1;
    //         console.log(timerHours + ' h ');
    //     }

    // },1000*60*60);
   // $("#timer").html(timerMinutes + "m " + timerSeconds + "s ");
});

function startTimer(timerMinutes,timerSeconds){
    var m = setInterval(function(){
        
        if(timerMinutes !== 0){
            timerMinutes = timerMinutes - 1;
            console.log(timerMinutes + ' Min ');
            $('#minutes').html(timerMinutes);
            timerSeconds = 10;
            var s = setInterval(function(){
                SetTimer(); 
                if(timerSeconds !== 0 && timerMinutes !== 0){
                        
                    timerSeconds = timerSeconds - 1;
                    console.log(timerSeconds + ' Sec ');
                    $('#seconds').html(timerSeconds);
                }
            },1000);
            
        }
        
    },1000*10);
}

function SetTimer(){
    
    //Current time
    var now = new Date().getTime();
    
    var distance = CountDownTime- now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//   document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";


}

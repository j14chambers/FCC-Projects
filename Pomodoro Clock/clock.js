// Timer variable
var timerMinutes = 0,timerHours = 0, timerSeconds = 60;
var h, m, s;
//Start Timer button
$('#startTimer').click(function(){
    //timerHours = document.getElementById('hours-input').value;
    timerMinutes = document.getElementById('minutes-input').value;
    
    //$('#hours').html(timerHours);
    $('#seconds').html(timerSeconds);
    $('#minutes').html(timerMinutes - 1);
    startTimer(timerHours, timerMinutes - 1, timerSeconds);
});

//Stop timer button
$('#stop-timer').click(function(){
    clearInterval(m);
    clearInterval(s);
    //clearInterval(h);
    console.log('STOP');
});

//Intiate the countdown
function startTimer(timerMinutes,timerSeconds){
    //hoursCountDown(timerHours);
    mintuesCountDown(timerMinutes);
}

//Countdown for hours
// function hoursCountDown(timerHours){

//     h = setInterval(function(){
//         if(timerHours !== 0){
//             timerHours = timerHours - 1;
//             console.log(timerHours + ' Hrs ');
//             $('#hours').html(timerHours); 
//         }

        
//     },1000*60*60);
// }

//Coutdown for minutes
function mintuesCountDown(timerMinutes){
    secondCountDown(timerSeconds);
    m = setInterval(function(){
        
        if(timerMinutes !== 0){
            timerMinutes = timerMinutes - 1;
            console.log(timerMinutes + ' Min ');
            $('#minutes').html(timerMinutes);
            secondCountDown(timerSeconds);       
        }
        
    },1000*60);
}

//coutdown for seconds
function secondCountDown(timerSeconds){
    s = setInterval(function(){
        if(timerSeconds !== 0 ){
                
            timerSeconds = timerSeconds - 1;
            console.log(timerSeconds + ' Sec ');
            $('#seconds').html(timerSeconds);
        }
    },1000);
    
}


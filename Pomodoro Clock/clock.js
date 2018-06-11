// Timer variable
var CountDownTime = new Date('June 5,2018 20:00').getTime();
var timerMinutes = 0,timerHours = 0, timerSeconds = 10;
timerSeconds = 10;
var h, m, s;

$('#startTimer').click(function(){
    timerHours = document.getElementById('hours-input').value;
    timerMinutes = document.getElementById('minutes-input').value;
    timerHours = document.getElementById('hours-input').value;
    
    $('#hours').html(timerHours);
    $('#minutes').html(timerMinutes - 1);
    $('#seconds').html(timerSeconds);
    startTimer(timerHours, timerMinutes - 1, timerSeconds);
});

$('#stop-timer').click(function(){
    clearInterval(m);
    clearInterval(s);
    clearInterval(h);

    $('#hours').html(00);
    $('#minutes').html(00);
    $('#seconds').html(00);

});

function startTimer(timerHours, timerMinutes,timerSeconds){
    hoursCountDown(timerHours);
    mintuesCountDown(timerMinutes);
}
function hoursCountDown(timerHours){
    h = setInterval(function(){
        
        if(timerHours !== 0){
            timerHours = timerHours - 1;
            console.log(timerHours + ' Hrs ');
            $('#hours').html(timerHours);    
        }
        
    },1000*20);
}

function mintuesCountDown(timerMinutes){
    m = setInterval(function(){
        
        if(timerMinutes !== 0){
            timerMinutes = timerMinutes - 1;
            console.log(timerMinutes + ' Min ');
            $('#minutes').html(timerMinutes);
            secondCountDown(timerSeconds);       
        }
        
    },1000*10);
}

function secondCountDown(timerSeconds){
    s = setInterval(function(){
        if(timerSeconds !== 0 ){
                
            timerSeconds = timerSeconds - 1;
            console.log(timerSeconds + ' Sec ');
            $('#seconds').html(timerSeconds);
        }
    },1000);
    
}


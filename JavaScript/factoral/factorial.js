

$('#button').click(function(e){
        $('#work-out').html('');

        var $inputNumber = document.getElementById('input-number').value;
        factorilize($inputNumber);

        return false;

});


function factorilize(num) {
    var factorial = num;
    var n = num;
    console.log('factorial  of ' + factorial + '!: ');
    $('#factorial-input').html('<p>The Factorial  of ' + factorial + '! is: </p>');


    while(n != 1){

        $('#work-out').append(n + ' * ');
        //console.log('n = ' + n + '- 1');
         n = n - 1;

        //console.log('n = ' + n);
        //$('#work-out').append(n + ' * ');
                
        num = num * n;
        //console.log('num = ' + num + ' * ' + n);
        //console.log('num = ' + num);

    }
    $('#work-out').append(n);

    console.log(factorial + '! =' + num);
    $('#factorial-answer').html('<p>' + factorial + '! = ' + num + '</p>');

}


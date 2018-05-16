
$('.btn').click(function(){ 
    btnPressed = $(this).text();
    //console.log('clicked');
    //console.log(btnPressed);

    inputField(btnPressed);
    
});

//array of btn that were clicked
var storedClicked = [];

function inputField(btnPressed){
    //console.log('input field: ' + btnPressed);

    //puts the btn clicked into the class input-field; see html file
    $('.input-field').append(btnPressed);

    //pushes the btn pressed into array ' storedclicked'
    storedClicked.push(btnPressed);
    console.log(storedClicked);

    endOfExpression(btnPressed);
}

//if 'C' or '=' are pressed this function is ran
function endOfExpression(){
    if(btnPressed == 'C'){

        //this clears the storedclicked when pressed
        storedClicked = [];
        $('.input-field').html('');

    }
    else if(btnPressed == '='){

        //if equals is pressed evaluate expression is ran
        evaluateExpression(storedClicked);
    }
}

function evaluateExpression (expression){
    console.log(expression);
    var num1 = '';
    var num2 = '';
    var expressionSymbol = ['-', '+','x', '/'];
    var equals = '=';

    for (var i in expression) {
        var currentValue = expression[i];

        for(var e in expressionSymbol){
            if(currentValue == expressionSymbol[e]){
                var evaluate = currentValue;
                //console.log(evaluate);

                //console.log(i);
                
                num1 = expression.splice(0,i).join('');
                //console.log(expression.length);
            }
        }
        if(currentValue == equals){
            num2 = expression.splice(1,i-1).join('');
            calculate(num1, evaluate, num2);
            $('.input-field').append(answer);
        }
        
    }
    //console.log(expression);
    console.log('num1 = ' + num1);
    console.log('num2 = ' + num2);
    

}

function calculate(num1,operator,num2) {
    switch(operator){
        case '+':
        answer = num1 + num2;
        console.log('Answer = ' + answer);
        return answer;
        break;
        case '-':
        answer = num1 - num2;
        console.log('Answer = ' + answer);
        return answer;
        break;
        case 'x':
        answer = num1 * num2;
        console.log('Answer = ' + answer);
        return answer;
        break;
        case '/':
        answer = num1 / num2;
        console.log('Answer = ' + answer);        
        return answer;
        break;
        default:
        console.log('No operation perfrom');
    }
   
}


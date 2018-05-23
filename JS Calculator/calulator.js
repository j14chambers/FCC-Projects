//array of btn that were clicked
var storedClicked = [];
var numbers = [];
var operator =[];
var finalNumArr = '';
var array = [];
var n = 0;


$('.btn').click(function(){ 
    btnPressed = $(this).text();
    //console.log('clicked');
    //console.log(btnPressed);

    inputField(btnPressed);
    
});

function inputField(btnPressed){
    //console.log('input field: ' + btnPressed);

    //puts the btn clicked into the class input-field; see html file
    $('.input-field').append(btnPressed);

    //pushes the btn pressed into array ' storedclicked'
    storedClicked.push(btnPressed);
    //console.log(storedClicked);

    endOfExpression(btnPressed);
}
//if 'C' or '=' are pressed this function is ran
function endOfExpression(){
    if(btnPressed == 'C'){

        //this clears the storedclicked when pressed
        storedClicked = [];
        numbers = [];
        operator = [];
        array = [];
        n = 0;
        $('.input-field').html('');
        clear();

    }
    else if(btnPressed == '='){

        //if equals is pressed evaluate expression is ran
        //evaluateExpression(storedClicked);
        checkForOperator(storedClicked);
    }
}

//Check for operator position and splice expression 
//Finding the first number
function checkForOperator(expression){
    console.log(expression);
    var expressionSymbol = ['-', '+','x', '/'];
    var integer = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var decimal = '.';
    var equals = '=';
    
        for(var e in expression){
            console.log(expression[e]);

            console.log('Integer indexof: ' + integer.indexOf(expression[e]));

            if(integer.indexOf(expression[e]) !== -1){
                numbers.push(Number(expression[e])); 
            }
            if(decimal.indexOf(expression[e]) !== -1){
                numbers.push(expression[e]);
            }
            console.log('exprssionsymbol indexof: ' + expressionSymbol.indexOf(expression[e]));
            if(expressionSymbol.indexOf(expression[e]) !== -1){
                break;
                
            }
            numbers.join('');
            console.log('numbers ');
            console.log(numbers.join(''));
            finalNum = numbers.join('');
        }
        numbers = [];
        console.log(finalNum);

        expression.splice(0,e);
        operator.push(expression[0]);
        console.log(operator);
        expression.splice(0,1);
        console.log(expression);

       storeNumbers(finalNum, n);
       n++;
        while(expression.length > 0){
            checkForOperator(expression);
        }

    }
    function storeNumbers(num, length){

        console.log('Stored Numbers in Array ' + length);

        console.log(num);

        array[length] = (Number(num));
        console.log(array[length]);
            
        //var array = [];
        //array.push(Number(num));
        console.log(array);
        console.log(operator);
        var r = 0;
        var equal = '=';

        finalAnswer = calculate(array[r], operator[r], array[r+1]);
        console.log(finalAnswer);
        for(r = 1; r < array.length; r++){
            console.log('r ' + r);
            console.log('operator ' + operator[r]);
            console.log('array ' + array[r]);
            
            finalAnswer = calculate(finalAnswer, operator[r], array[r+1]);
            console.log(finalAnswer);
            if(equal.indexOf(operator[r]) !== -1){
                break;
            }
        }
        console.log('final answer');
        console.log(finalAnswer);
        $('.input-field').html(finalAnswer);
        return finalAnswer;     
    }
    function calculate(num1,operation,num2) {
        switch(operation){
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
            answer = num1;
            return answer;
        }
    }
function clear(){
    console.log('clear');

    console.log(storedClicked);
    console.log(numbers);
    console.log(array);
}
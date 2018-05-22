//array of btn that were clicked
var storedClicked = [];
var numbers = [];
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
                operator = expression[e];
                console.log('operator: ' + operator);
                
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
    }
   


function evaluateExpression(expression){
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
                console.log(expression);

                num3 = expression.splice(1,i).join('');
                console.log(num3);
                console.log(expression);
            }
        }
        // if(currentValue == equals){
        //     num2 = expression.splice(1,i-1).join('');
        //     //calculate(num1, evaluate, num2);
        //     //$('.input-field').append(answer);
        // }
        
    }
    //console.log(expression);
    console.log('num1 = ' + num1);
    console.log('num2 = ' + num3);
}

function add(){

}
// var clearData = document.getElementsByClassName("clear");
// clearData.addEventListener("click",clear());

function clear(){
    console.log('clear');

    console.log(storedClicked);
    console.log(numbers);
    console.log(array);
}
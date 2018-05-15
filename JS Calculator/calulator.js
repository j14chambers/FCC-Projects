
$('.btn').click(function(){ 
    btnPressed = $(this).text();
    console.log('clicked');
    console.log(btnPressed);

    inputField(btnPressed);
});
//array of btn that were clicked
var storedClicked = [];

function inputField(btnPressed){
    console.log('input field: ' + btnPressed);

    //puts the btn clicked into the class input-field; see html file
    $('.input-field').html(btnPressed);
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
    }
    else if(btnPressed == '='){

        //if equals is pressed evaluate expression is ran
        evaluateExpression(storedClicked);
    }
}

function evaluateExpression (){

}

/* function calculator(expression){
    console.log(expression);
    for(var i in expression){
        //console.log(expression[i]);
        if(expression[i] == operation(expression[i])){
            operationToPerform = operation(expression[i]);
            console.log(operationToPerform);
            var answer = expression[i-1] + expresssion[i + 1];
            console.log(expression[i-1] +'    ' + expresssion[i + 1]);
        }
        else{

        }
    }
    console.log(answer);

    function operation(operator) {
        switch(operator){
            case '+':
            console.log('add');
            return ;
            break;
            case '-':
            console.log('subtract');
            break;
            case 'x':
            console.log('multiply');
            break;
            case '/':
            console.log('divide');
            break;
            case '=':
            console.log('equal');
            break;
            default:
            console.log('No operation perfrom');
        }
    }
}

calculator('12-85+51=');
//calculator('-1/8x58-65='); */


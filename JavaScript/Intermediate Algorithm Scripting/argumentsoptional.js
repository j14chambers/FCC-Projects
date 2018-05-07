
function addTogether() {
    console.log(arguments[0] + ' is a ' + typeof arguments[0]);
    console.log(arguments[1] + ' is a ' + typeof arguments[1]);

    var checkNum = function(num){
        if(typeof num != 'number'){
            return undefined;
        }
        else{
            return num;
        }
    }
    
    if(arguments.length > 1){
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        
       if(arguments[0] == undefined ||arguments[1] == undefined){
           return undefined;
       }
       else{
           console.log( arguments[0] + arguments[1]);
        }
    }
    else{
        var c = checkNum(arguments[0]);
        if(checkNum(c)){
            return function(arg2){
                if(c == undefined ||checkNum(arg2) == undefined){
                    return undefined;
                }
                else{
                console.log(c + arguments[0]);
                return c + arguments[0];
                }
            }
        }
    }
}


addTogether(2,3);
addTogether(2);
addTogether(2, "3");
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2)([3]);


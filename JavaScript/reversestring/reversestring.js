//This code reverses the letters in a string.
//Submit function for when the button is pressed.
function submit(){
    var $inputText = document.getElementById('input-text').value;
    console.log($inputText);
    reverseString($inputText);
}

$("#input-text").keypress(function(enter){
    if (enter.which === 13){
        var $inputText = document.getElementById('input-text').value;
        reverseString($inputText);
    }
    
});

// Takes the inputText and put it in the html
function reverseHtml(reverseStr){
    console.log('Reverse string apears in Window.');
    $('#word-reverse').html('<h2>Revsersed Letters:<br> ' + reverseStr + '</h2>');
    //$('#word-reverse').html(reverseStr);
    console.log(reverseStr);
}
//Reverse the inputText
function reverseString(str) {
    console.log(str);
    $('#word').html('<h2>Your Word:<br> ' + str + '</h2>');
    
    var newStr = str.split('');
    console.log('This is the word split: ' + newStr);
    
    newStr.reverse();
    console.log('This is the letters reversed: ' +newStr);
    
    strjoin = newStr.join(" ");
    console.log('the word ' + str + ' became ' + strjoin);
    $('#word-reverse').html('<h2>Revsersed Letters:<br> ' + strjoin + '</h2>');

    reverseHtml(strjoin);
    //return str;   

}




"use strict";

function telephoneCheck(str) {
  //console.log(str);
  var number = str;
  letterCheck(number); //check 0-9
  //  console.log('From 0 - 9: ' + /[0-9]/g.test(str));
  //  let numberCheck = /[0-9]/g;
  //  console.log(number.match(numberCheck));
  //  console.log('Length ' + /\d{3}/g.test(str));
  //  let lengthCheck = /\d{3}/g;
  //  console.log(number.match(lengthCheck));
} //Check for letters


function letterCheck(letter) {
  console.log(letter);
  var checkerLetter = letter.match(/[a-z]/g);
  console.log(checkerLetter);

  if (checkerLetter === null) {
    checker(letter);
  } else {
    console.log('not a phone number');
  }
}

function checker(nSpace) {
  console.log('Space Check: ' + /\s/g.test(nSpace));
  var spaceCheck = nSpace.match(/\s/g);
  console.log(nSpace.match(spaceCheck));

  if (spaceCheck === true) {} else {}
} //Test Values
//telephoneCheck("8oo-six427676;laskdjf");
//telephoneCheck("5555555555");
// telephoneCheck("(555)555-5555");
// telephoneCheck("555-555-5555");


telephoneCheck("555 555 5555"); // telephoneCheck("1 555 555 5555");
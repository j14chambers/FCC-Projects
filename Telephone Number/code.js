function telephoneCheck(str) {
  //console.log(str);
  let number = str;

  letterCheck(number);

  //check 0-9
  //  console.log('From 0 - 9: ' + /[0-9]/g.test(str));

  //  let numberCheck = /[0-9]/g;
  //  console.log(number.match(numberCheck));

  //  console.log('Length ' + /\d{3}/g.test(str));
  //  let lengthCheck = /\d{3}/g;
  //  console.log(number.match(lengthCheck));
}
//Check for letters
function letterCheck(letter) {
  console.log(letter);
  let checkerLetter = letter.match(/[a-z]/g);
  console.log(checkerLetter);

  if (checkerLetter === null) {
    checker(letter);
  } else {
    console.log("not a phone number");
  }
}
function checker(nSpace) {
  //Space Check
  console.log("Space Check: " + /\s/g.test(nSpace));
  let spaceCheck = /\s/g.test(nSpace);

  //Has dash
  console.log("Dash Check: " + /-/g.test(nSpace));
  let dashCheck = /-/g.test(nSpace);

  //has ()
  console.log("Parentheses Check: " + /\([^()]+\)/g.test(nSpace));
  let parenthesesCheck = /\([^()]+\)/g.test(nSpace);

  if (
    (spaceCheck === true) |
    (dashCheck === true) |
    (parenthesesCheck === true)
  ) {
    console.log("Valid");

    //check length
    console.log("Length " + /\d{10-12}/g.test(nSpace));
    let lengthCheck = /\d{10-12}/g.test(nSpace);
    console.log(lengthCheck);


  } else {
    console.log("check other");
  }
}
//Test Values

telephoneCheck("8oo-six427676;laskdjf");
telephoneCheck("5555555555");

telephoneCheck("(555)555-5555");

telephoneCheck("555-555-5555");
telephoneCheck("555 555 5555");

telephoneCheck("1 555 555 5555");

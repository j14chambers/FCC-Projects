/*
  Code check for a valid US number. Return true of valid or return false if not.

  */

function telephoneCheck(str) {
  console.log(str);
  let checkerLetter = str.match(/[a-z]/g);
  //console.log(checkerLetter);

  let lastChar = str.slice(-1);

  if (lastChar === ')' ) {
    console.log("not a phone number");
    return false;
    
  }

  if (checkerLetter === null) {
    //console.log("valid");
    checkFormat(str);
  } 
  
  else {
    console.log("not a phone number");
    return false;
  }
}

function checkFormat(str) {
  let codedash = /\d{3}-?\d{3}-?\d{4}/gm.test(str);
  let codeParenthese = /\(\d{3}\)?\d{3}-?\d{4}/gm.test(str);
  let codeSpace = /\d{3}\s?\d{3}\s?\d{4}/gm.test(str);
  let codeUS = /^(1\s?)\d{3}-?\d{3}-?\d{4}/gm.test(str);
  let lengthCheck = /[^0-9]/gi;
  console.log(str.replace(lengthCheck, "").length);

  if (codeUS === true && str.replace(lengthCheck, "").length === 11) {
    console.log(codeUS);
    console.log("Real Number " + str);
    console.log('US Code Check');
    return true;
  } 
  if (codedash === true && str.replace(lengthCheck, "").length === 10) {
    console.log(codedash);
    console.log("Real Number " + str);
    console.log('Code Dash');
    return codedash;
  }
  if (codeParenthese === true && str.replace(lengthCheck, "").length === 10) {
    console.log(codeParenthese);
    console.log("Real Number " + str);
    console.log('Parenthese check');
    return true;
  }
  if (codeSpace === true && str.replace(lengthCheck, "").length === 10) {
    console.log(codeSpace);
    console.log("Real Number " + str);
    console.log('SpaceChecker');
    return true;
  }
  
  else {
    console.log("NOPE");
    return false;
  }
}

telephoneCheck("8oo-six427676;laskdjf");
telephoneCheck("5555555555");

telephoneCheck("(555)555-5555");

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("555-5555");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("10 (757) 622-7382");

telephoneCheck("1 555 555 5555");
telephoneCheck("1 555)555-5555")
telephoneCheck("(6054756961)")
telephoneCheck("-1 (757) 622-7382")

function checkList(str) {

  let o = /(?:(\1)[ -])?\(?(?<areacode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/g.test(
    str
  );

  console.log(o);
  return o;
}

// checkList("1 555 555 5555");
// checkList("555-5555")

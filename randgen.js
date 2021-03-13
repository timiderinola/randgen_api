import async from 'async';

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
const numerals = "1234567890";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function getRandomChars(basis) {
  var randNum = getRandomInt(basis.length);
  return basis.substring(randNum, randNum + 1);
};

function getRandString(basis, strLength) {
  var str = "";
  for (var i = strLength; i--;) {
    str += getRandomChars(basis);
  }
  return str;
}


export function RandGen(category = undefined) {
  var randString = "";
  /* Decide what category to generate if not set.
   * 0 for alphabets
   * 1 for numerals
   * 2 for alphanumerics
   * 3 for real numbers
   *  */
  if (category === undefined) {
    category = getRandomInt(4);
  }

  // random string can be a maximum length of 20
  var strLength = getRandomInt(20) + 1;
  if (category == 0) {
    randString = getRandString(alphabets, strLength);
    return [randString, category];
  } else if (category == 1) {
    randString = getRandString(numerals, strLength);
    return [randString, category];
  } else if (category == 2) {
    randString = getRandString(numerals + alphabets, strLength);
    return [randString, category];
  } else {
    let myInt = parseInt(numerals.slice(0, strLength));
    return [myInt / (getRandomInt(100) + 1), category];
  }
}
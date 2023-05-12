export {
  rectangle,
  secretText,
  splitText,
  columsAndRowLength,
  normalizedText,
  chunkToString,
};

//*function to normalize a text
/**
 *
 * @param {string} chaine
 * @returns a normalized string
 */
const normalizedText = (chaine) => {
  let newArray = [];
  chaine = chaine.split("");
  // Array for the differents punctuation mark that exist in english both US/UK
  let listOfPunctuationMark = [
    ".",
    "?",
    "!",
    "-",
    ",",
    "{",
    "}",
    "[",
    "]",
    "...",
    "&",
    "@",
    "/",
    "*",
    "(",
    ")",
    ":",
    ";",
    '"',
    "_",
    " ",
    "'",
    "’",
    "$",
    "%",
    "#",
    "^",
  ];
  for (let elem of chaine) {
    if (listOfPunctuationMark.includes(elem) == 0) {
      newArray.push(elem);
    }
  }
  return newArray.join("").toLowerCase();
};

//* function to get the number of columns and rows from a string length
/**
 *
 * @param {string} chaine to get the number of columns and rows for the rectangle
 * @returns Array of numbers (rows and columns)
 */

function columsAndRowLength(chaine) {
  /* from the fact that chaine.length = C*R and C>=R;
 we can take C = R+K and (K as natural number)
   we'll have this equation r²+kr-N=0 with N=chaine.length,  to solve.
   now we take the case where K=1; as 1 is smallest integer after 0; to avoid N=C² and to be close to N as much as possible. The value of K chosen, just help us to get the appropriate value of C that we will use because there are many of them. since C = R + K.*/
  let N = chaine.length;
  let delta = 1 + 4 * N;
  //we need just the positive r from the two solution of equation r²+kr-N=0.
  let r = Math.round((-1 + Math.sqrt(delta)) / 2);
  let nearMultipleOfr = Math.ceil(N / r) * r;
  let c = nearMultipleOfr / r;

  return [r, c];
}

// *function to split a normalized text into a array of strings
/**
 *
 * @param {string} string a chaine to split
 * @param {number} colums
 * @returns Array of strings
 */
const splitText = (string, colums) => {
  if (string.length > colums) {
    let newArray = [],
      usedStrings = [];
    // to create new array with chunks
    for (let i = 0; i < string.length; i += colums) {
      newArray.push(string.slice(i, i + colums));
    }
    // try to fill the gap of the last substring in case the rectangle is not perfect
    usedStrings = newArray;
    let long2 = newArray.length;
    // to get the before last element of newArray
    let L2 = usedStrings[long2 - 2].length;
    // to get the last element of newArray
    let L1 = usedStrings[long2 - 1].length;
    // check if the last substring is to short.
    if (L2 > L1) {
      usedStrings[long2 - 1] = usedStrings[long2 - 1].padEnd(L2, "$");
      return usedStrings;
    }
    return newArray;
  } else return "string to short";
};

//* function to convert split text into chunks strings
function chunkToString(splitText) {
  return splitText.join("\t");
}

//* function to read each characters on the row left to right. takes array of normalized text and the length of the text

/**
 *
 * @param {Array} Array of strings
 * @returns a ciphered message string
 */

function secretText(newArray) {
  let usedArray = [];
  usedArray = newArray;
  let temp = [];
  let i = 0,
    j = 0;
  while (j < usedArray[0].length) {
    while (i < usedArray.length) {
      temp.push(usedArray[i][j]);
      i++;
    }
    // for the sake of termination, we need to go forward (next column) in the array
    j++;
    // need to restart at the beginning (top line) of the array
    i = 0;
  }
  //to show the secret text
  return temp.join("");
}

//* function to create rectangular text
/**
 *
 * @param {string} splitedText to display into rectangle
 * @param {*} width the width of the rectangle
 * @returns an Array of strings
 */

function rectangle(splitedText) {
  let newArray = [];
  for (let i = 0; i < splitedText.length; i++) {
    newArray.push(splitedText[i] + "<br>");
  }
  return newArray.join("");
}

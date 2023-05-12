//*function to normalize a text

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
    "”",
    "“",
    "–",
    " ",
    "‘",
    "’",
    "$",
    "%",
    "#",
    "^",
  ];
  // just a to test if one can a regEx
  listOfPunctuationMark = `/${listOfPunctuationMark.join("")}/g`;
  console.log(listOfPunctuationMark);
  for (let elem of chaine) {
    if (listOfPunctuationMark.includes(elem) == 0) {
      newArray.push(elem);
    }
  }
  return newArray.join("").toLowerCase();
};

//* function to get the number of columns and rows from a string length
function columsAndRowLength(chaine) {
  // from the fact that chaine.length = C*R and C>=R;
  // we can take C = R+K and (K as natural number)
  // we'll have this equation r²+kr-N=0 with N=chaine.length,  to solve.
  // now we take the case where K=1; as 1 is smallest integer after 0; to avoid N=C² and to be close to N as much as possible. The value of K chosen, just help us to get the appropriate value of C that we will use because there are many of them. since C = R + K,
  let N = chaine.length;
  let delta = 1 + 4 * N;
  //we need just the positive r from the two solution of equation r²+kr-N=0.
  let r = Math.round((-1 + Math.sqrt(delta)) / 2);
  let nearMultipleOfr = Math.ceil(N / r) * r;
  let c = nearMultipleOfr / r;

  return [r, c];
}

// *function to split a normalized text into a array of strings

const splitText = (string, colums) => {
  if (string.length > colums) {
    let newArray = [],
      usedStrings = [];
      
    for (let i = 0; i < string.length; i += colums) {
      newArray.push(string.slice(i, i + colums));
    }
    console.table(newArray);
    // try to fill the gap in the last substring
    usedStrings = newArray;
    long2 = newArray.length;
    // to get the before last element of newArray
    let L2 = usedStrings[long2 - 2].length;
    // to get the last element of newArray
    let L1 = usedStrings[long2 - 1].length;
    // check if the rectangle is percfect or not.
    if (L2 > L1) {
      usedStrings[long2 - 1] = usedStrings[long2 - 1].padEnd(L2, "$");
      console.log(usedStrings);
      return usedStrings;
    }
    return newArray;
  } else return "string to short";
};

//* function to read each characters on the row left to right. takes array of normalized text and the length of the text

/**
 *
 * @param {Array} Array
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
    // for the sake of termination, we need to and to go forward (next column) in the array
    j++;
    // need to restart at the beginning (top line) of the array
    i = 0;
  }
  //to show the secret text
  // console.table(temp);
  return temp.join("");
}

// to show the input text
console.log("text : ----->");
console.log();
console.log(
  "Adding words to a quote - “He [Mr. Jones] was the last person seen at the house,” reported the detective."
);
console.log();

//to show the normalize text
console.log("normalize text : ----->");
// a text for the test
let resultat = normalizedText(
  "console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)// Expected output: -5 -5 -6"
);
console.log(Math.ceil(54 / 8) * 8);
console.log(54 / 8);
console.log(resultat);
console.log("the length of normalised text is: ", resultat.length);

let rAndC = columsAndRowLength(resultat);


    console.log("r=", rAndC[0], "c=", rAndC[1]);
// to show the normalized splitted text into rectangle
console.log("splitted text into rectangle1  : ----->");
let splitText1 = splitText(resultat, rAndC[1]);
console.table(splitText1);
console.log();
console.log("the length of splitText1 text is: ", splitText1.length);

// to show the secret text
console.log("the secret text : ----->");
let newSecretText = secretText(splitText1);
// let splitText2 = splitText(newSecretText, 8);
console.log();
console.log(newSecretText);

//to show the splitted secret text
console.log();
console.log("the splitted secret text : ----->");
let splitText2 = splitText(newSecretText, rAndC[0]);
console.table(splitText2);



//function to normalize a text

const normalizedText = (chaine) => {
  let count = 0;
  let newArray = [];

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
  ];
  for (let elem of chaine) {
    if (listOfPunctuationMark.includes(elem) !== true) {
      newArray.push(elem);
    }
  }
  return newArray.join("").toLowerCase();
};

// function to split a normalized text into a array of strings

const splitText = (string, N) => {
  if (string.length > 0) {
    let newArray = [];
    for (let i = 0; i < string.length; i += N) {
      let j = i;
      newArray.push(string.slice(j, j + N));
    }
    return newArray;
  } else return "empty string";
};

/* function to read each characters on the row left to right. takes array
of normalized text and the length of the text */

function secretText(newArray) {
  let usedArray = [];
  usedArray = newArray;
  let temp = [];
  // console.log(newArray);
  let i = 0,
    j = 0,
    k = 0;
  while (k < usedArray[0].length) {
    while (i < usedArray.length) {
      temp.push(usedArray[i][j]);
      i++;
    }
    // for the sake of termination, we need to
    k++;
    // to go forward (next column) in the array
    j++;
    // need to restart at the beginning (top line) of the array
    i = 0;
  }
  //to show the secret text
  // console.table(temp);
  return temp.join("");
}

// a text for the test
let resultat = normalizedText(
  "Adding words to a quote - “He [Mr. Jones] was the last person seen at the house,” reported the detective."
);

// to show the text typed import 
console.log("text : ----->");
console.log();
console.log(
  "Adding words to a quote - “He [Mr. Jones] was the last person seen at the house,” reported the detective."
);
console.log();

//to show the normalize text
console.log("normalize text : ----->");
console.log();
console.log(resultat);
console.log();

// to show the normalized splitted text into rectangle
console.log("splitted text into rectangle  : ----->");
let splitText1 = splitText(resultat, 9);
console.table(splitText1);
console.log();

// to show the secret text
console.log("the secret text : ----->");
let newSecretText = secretText(splitText1);
// let splitText2 = splitText(newSecretText, 8);
console.log();
console.log(newSecretText);

//to show the splitted secret text
 console.log();
console.log("the splitted secret text : ----->");
let splitText2 = splitText(newSecretText, 8);
console.table(splitText2);

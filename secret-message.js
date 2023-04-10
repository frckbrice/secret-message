//function to normalize a text

const normalizedText = (chaine) => {
  let count = 0;
  let newArray = [];
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
  // console.log(newArray); console.log();
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
    /* let N = string.length; //////////t check for the padding: 
     if the length of the last string in result in less than the 
    one of the preceding string, add padding with o, at the end */
    /*if (newArray[N - 1].length < newArray[N - 2].length) {
      newArray[N - 1].padEnd(newArray[N - 2].length, "0");
    } */
    return newArray;
  } else return "empty string";
};

//function to read each characters on the row left to right. takes array
// of normalized text and the length of the text
function secretText(newArray) {
  let usedArray = [];
  usedArray = newArray;
  let temp = [];
  console.log(newArray);
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
  console.table(temp);
  return temp.join("");
}

// let resultat = normalizedText(
//   "Adding words to a quote - “He [Mr. Jones] was the last person seen at the house,” reported the detective."
// );

// let resultat = normalizedText("function myFunc(a) {if (a !== undefined) {console.log(a.length);}} var  myVar; myFunc(myVar);")
let splitText1 = splitText(resultat, 10);
let newSecretText = secretText(splitText1);
let splitText2 = splitText(newSecretText, 8);

// console.log(res[0][5]);
// console.log(res[7].length);
// console.log(resultat.split('', 10));
console.log();
// console.log(res);
console.log(newSecretText);
console.log();
console.table(splitText2);

import {
  normalizedText,
  columsAndRowLength,
  splitText,
  secretText,
  rectangle,
  chunkToString,
} from "./myFunction.js";

//* to bind html elements

const firstRect = document.querySelector(".rectange");
const encodeText = document.querySelector(".chunks");
const secondRect = document.querySelector(".second");
const action = document.querySelector(".action");

//* event
action.addEventListener("click", fireFn);

function fireFn(event) {
  event.preventDefault();

  const inpuTxt = document.querySelector(".input-text").value;
  console.log(inpuTxt);
  //*to  normalize text
  let normalizeT = normalizedText(inpuTxt);
  console.log("normalize text", normalizeT);

  //* to get the value of row (r) and columns (c)
  let rAndC = columsAndRowLength(normalizeT);
  //test
  console.log("the length is", normalizeT.length);
  console.log("r=", rAndC[0], "c=", rAndC[1]);

  //* to show the first rectangle of normalized text
  let splitText1 = splitText(normalizeT, rAndC[1]);
  console.log(splitText1);
  firstRect.innerHTML = rectangle(splitText1);
  console.log("first rectangle", firstRect.innerHTML);

  //* to show the encoded message in chunks
  let newSecretText = secretText(splitText1);
  let newSplitText = splitText(newSecretText, rAndC[0]);
  encodeText.innerHTML = chunkToString(newSplitText);
  console.log("encoded message", encodeText.innerHTML);

  //* to show the second rectangle from the encoded message
  let splitText2 = splitText(newSecretText, rAndC[0]);
  secondRect.innerHTML = rectangle(splitText2);
  console.log("second rectangle", secondRect.innerHTML);
}

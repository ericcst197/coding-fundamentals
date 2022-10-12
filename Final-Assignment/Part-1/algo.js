// 1.  Reverse A String Using Loops.

function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const test1A = reverse("abcde") == "edcba";
const test1B = reverse("hello") == "olleh";
const test1C =
  reverse("Greetings from The Hacker Collective") ==
  "evitcelloC rekcaH ehT morf sgniteerG";

console.log("Ques 1: ", test1A, test1B, test1C);

// 2. Same Back And Forth - Is a string the same backwards and forwards?
//  Return true if it is, false if it is not.

function sameBackAndForth(str) {
  return str === str.split("").reverse().join("");
}

const test2A = sameBackAndForth("abba") === true;
const test2B = sameBackAndForth("abcdefg") === false;

console.log("Ques 2: ", test2A, test2B);

// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

const test3A = reverseInt(15) === 51;
const test3B = reverseInt(981) === 189;
const test3C = reverseInt(500) === 5;
const test3D = reverseInt(-15) === -51;
const test3E = reverseInt(-90) === -9;

console.log("Ques 3: ", test3A, test3B, test3C, test3D, test3E);

// 4. SumArr - Find the sum of all items in an array, using loops.

function sumArr(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

const test4A = sumArr([1, 2, 3, 4, 5]) == 15;
const test4B = sumArr([1000, 2000, 44, 55, 22]) == 3121;
const test4C = sumArr([123, 456, 789]) == 1368;

console.log("Ques 4: ", test4A, test4B, test4C);

// 5. Angry Grandma - You will write a function that takes in a String.
// The function should return a new sentence where every word is yelled.
// A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)

function deafGrandma(str) {
  return str
    .split(" ")
    .map((word) => word.toUpperCase() + "!!")
    .join(" ");
}

const test5A =
  deafGrandma("I have a bad feeling about this") ==
  "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!";

console.log("Ques 5: ", test5A);

// 6. What Is Missing - Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function whatIsMissing(str) {
  let curIndex = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (curIndex !== str.charCodeAt(i)) return String.fromCharCode(curIndex);
    curIndex++;
  }
  return undefined;
}

const test6A = whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined;
const test6B = whatIsMissing("bcdf") == "e";
const test6C = whatIsMissing("abcdefghjklmno") == "i";

console.log("Ques 6: ", test6A, test6B, test6C);

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function swap(sentence, before, after) {
  let words = sentence.split(" ");
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  const targetIndex = words.indexOf(before);
  words.splice(targetIndex, 1, after);
  return words.join(" ");
}

const test7A = swap("His name is Tom", "Tom", "john") == "His name is John";
const test7B =
  swap("Let us get back to more Coding", "Coding", "algorithms") ==
  "Let us get back to more Algorithms";
const test7C =
  swap("This has a spellngi error", "spellngi", "spelling") ==
  "This has a spelling error";

console.log("Ques 7: ", test7A, test7B, test7C);

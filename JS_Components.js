const crypto = require("crypto");

const myText = `
this
is
a
multi-line
string
!
`;

function splitLineBreaks(_txt) {
  return _txt.split("\n");
}

console.log(splitLineBreaks(myText)); //[ '', 'this', 'is', 'a', 'multi-line', 'string', '!', '' ]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RNGs a pure number, THE BEST
const numberRangeVar = 4;
const randomNumber = Math.floor(Math.random() * numberRangeVar) + 1;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const currentHours = Math.floor(new Date().getTime() / 3600000);

const currentMinutes = Math.floor(new Date().getTime() / 60000);

////Remove Duplicates from Arrays or Objects only
const removeDuplicates = (arr) => {
  const seen = new Set();
  return arr.filter((item) => {
    const stringified = JSON.stringify(item);
    if (seen.has(stringified)) {
      return false;
    }
    seen.add(stringified);
    return true;
  });
};

function stringToInt(input, numDigits) {
  const hash = crypto.createHash("sha512").update(input).digest("hex");
  letresult = "";
  for (
    let i = Math.floor(hash.length / 2);
    result.length < numDigits;
    i = (i + 1) % hash.length
  ) {
    if (!isNaN(hash[i])) result += hash[i];
  }
  return result;
}
console.log(stringToInt("a", 30));

function stringToBinary(_string) {
  let binary = "";
  for (let i = 0; i < _string.length; i++) {
    let bin = _string.charCodeAt(i).toString(2);
    binary += bin.padStart(8, "0");
  }
  return binary;
}

function chunkString(_string, _chucnkSize) {
  let chunks = [];
  for (let i = 0; i < _string.length; i += _chucnkSize) {
    if (
      _string.length - i <= _chucnkSize * 2 &&
      _string.length - i > _chucnkSize
    ) {
      chunks.push(_string.slice(i));
      break;
    } else {
      chunks.push(_string.slice(i, i + _chucnkSize));
    }
  }
  return chunks;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////READ AND WRITE OBJECTS/ARRAYS FROM & TO HD////
const fs = require("fs");

//WRITE ARRAY TO HD
const arrayToWrite = ["a", "b", "c", 1, 2, 3];
fs.writeFileSync(
  "./Array_To_String.txt",
  JSON.stringify(arrayToWrite),
  null,
  2
); //", null, 2" makes it pretty in the text file.

//READ ARRAY FROM HD
const arrayToRead = JSON.parse(
  fs.readFileSync("./Array_To_String.txt", "utf-8")
);
console.log(arrayToRead);
console.log(arrayToRead[0]);

//WRITE OBJECT TO HD
const objectToWrite = { Key1: "Value1", Key2: "Value2" };
fs.writeFileSync(
  "./Object_To_String.txt",
  JSON.stringify(objectToWrite),
  null,
  2
); //", null, 2" makes it pretty in the text file.

//READ OBJECT FROM HD
const objectToRead = JSON.parse(
  fs.readFileSync("./Object_To_String.txt", "utf-8")
);
console.log(objectToRead);
console.log(objectToRead["Key1"]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////Discard all characters except keep explicitly desired character(s)////
const str = "a1b2c3d4e5f6g7h8i9j0";
const charsToKeep = ["0", "g", "5", "7", "9"];
const result = str
  .split("")
  .filter((char) => charsToKeep.includes(char))
  .join("");
console.log(result); // "5g790"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PASTE BY TAPPING
const pasteByTap = function () {
  let clickCount = 0;
  document.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 3) {
      pasteFromClipboard();
      clickCount = 0;
    }
  });
  function pasteFromClipboard() {
    navigator.clipboard.readText().then((clipText) => {
      const activeElement = document.activeElement;
      if (activeElement && activeElement.tagName === "INPUT") {
        activeElement.value = clipText;
      }
    });
  }
};
//Paste By Tap Short:
const pasteByTapShort = function () {
  let clickCount = 0;
  document.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 3) {
      navigator.clipboard.readText().then((clipText) => {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.tagName === "INPUT") {
          activeElement.value = clipText;
        }
      });
      clickCount = 0;
    }
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Generates a random number between 0 and 25 (inclusive) using Math.random(), ~~, and 26. It then maps that number to a character code between 'a' (97 in ASCII) and 'z' (122 in ASCII) using String.fromCharCode. This process is repeated for the specified _letterLength, and the resulting characters are joined together to form a random string of lowercase letters. The code essentially creates a random string composed of lowercase letters, and each character is generated by mapping a random number to its corresponding character code.*/
const rng_A_Z = (_letterLength) =>
  [...Array(_letterLength)]
    .map(() => String.fromCharCode(97 + ~~(Math.random() * 26)))
    .join("");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function evenOrOdd(_number) {
  if (_number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const evenOrOdd2 = _number % 2 === 0 ? "Even" : "Odd";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function expandNumbers(input) {
  const [start, end] = input.split("-").map(Number);
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers.join("-");
}
console.log(expandNumbers("1-4")); // Output: "1-2-3-4"
console.log(expandNumbers("66-67")); // Output: "66-67"
console.log(expandNumbers("3-5")); // Output: "3-4-5"

//
//
//
//
//
//
//
//
//
//
//
function old_stringToInt(input, numDigits) {
  // Hash the input using SHA-512
  const hash = crypto.createHash("sha512").update(input).digest("hex");

  // Find the middle index of the hash
  const middle = Math.floor(hash.length / 2);

  // Extract the numeric digits from the middle of the hash up to the desired number
  let result = "";
  for (let i = middle; i < hash.length && result.length < numDigits; i++) {
    if (!isNaN(hash[i])) {
      result += hash[i];
    }
  }

  // If we didn't get enough digits from the middle to the end, start from the beginning
  for (let i = 0; i < middle && result.length < numDigits; i++) {
    if (!isNaN(hash[i])) {
      result += hash[i];
    }
  }

  return result;
}

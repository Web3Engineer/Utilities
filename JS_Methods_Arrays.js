////Spread Operator, combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); //~$ [1, 2, 3, 4, 5, 6]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////Minimum & Maximum
const numbers_array = [7, 15, 3];

let min;
let max;

for (let element of numbers_array) {
  if (element == Math.max(...numbers_array)) {
    max = element;
  }
  if (element == Math.min(...numbers_array)) {
    min = element;
  }
}
console.log(`Minimum: "${min}"! Maximum: "${max}"!`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using .some() & .every()
const names = ["Alice", "Bob", "Charlie", "David"];

// Using .some() to check if at least one name has more than 6 characters
const hasLongName = names.some((name) => name.length > 6);
console.log("At least one name has more than 6 characters:", hasLongName);
// The result is 'false' because none of the names have more than 6 characters.

// Using .every() to check if all names start with the letter "A"
const allStartWithA = names.every((name) => name.charAt(0) === "A");
console.log("All names start with the letter 'A':", allStartWithA);
// The result is 'false' because not all names start with the letter "A" (Alice does, but the others don't).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The flat() method is used to "flatten" a nested array, which means it takes an array that contains other arrays (or nested arrays) and returns a single-level array containing all the elements from the nested arrays.
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

//When you apply the flat() method to this array, it will combine all the nested arrays into one single array, like this:
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// The flat() method does this by "flattening" the nested arrays and returning a new array with all the elements combined into a single level.

// Keep in mind that by default, the flat() method only flattens one level of nesting. If you have arrays with multiple levels of nesting, you can provide a depth parameter to specify how many levels you want to flatten. For example:
const deeplyNestedArray = [[1, [2, [3, 4]], 5]];

const partiallyFlattenedArray = deeplyNestedArray.flat(); // Defaults to one level
console.log(partiallyFlattenedArray); // Output: [1, [2, [3, 4]], 5]

const fullyFlattenedArray = deeplyNestedArray.flat(Infinity); // Flattens all levels
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////Remove Duplicate Elements In Array////
const arrRaw = [1, 1, 2, 2, "a", "a", "b"];

function removeDuplicates(_someArr) {
  return [...new Set(_someArr)];
} //Removes Duplicates

const arrTrimmed = removeDuplicates(arrRaw);
console.log(arrTrimmed); //~$ [ 1, 2, 'a', 'b' ]
//OR//
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Check if array includes a value
const myNumbers = [1, 2, 3, 4, 5];

if (myNumbers.includes(3)) {
  console.log(`The array contains ${searchValue}`);
} else {
  console.log(`The array does not contain ${searchValue}`);
}

const profileNames = [
  "Mastercard",
  "Visa",
  "Amazon",
  "Walmart",
  "Ace",
  "Tractor Supply",
];

console.log(new RegExp(`^(${profileNames.join("|")})$`).test("Amazon"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

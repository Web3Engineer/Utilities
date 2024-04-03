var MainObj = {

prop1: "prop1MainObj",
Obj1:{
      prop1: "prop1Obj1",
      prop2: "prop2Obj1",    
      Obj2: {
            prop1: "prop1Obj2",
            prop2: "prop2Obj2"
            }
  },
      
  Obj3:{
      prop1: "prop1Obj3",
      prop2: "prop2Obj3"
      },
    
  Obj4:{
      prop1: "prop1Obj4",
      prop2: "prop2Obj4"
      }  

};

  console.log( MainObj.Obj1.Obj2.prop1 ); //"prop1Obj2"

const obj1={
obj1_Key1:"obj1 value1",
obj1_Key2:"obj1 value2"
};
const obj2={
obj2_Key1: obj1
};
const obj3={
obj3_Key1: obj2
};
const nestedObj={
nestedObj_Key1: obj3
};

var string1="ab.c1.23";
var int_zeroTrailing=1230;
var int_dec_zeroTrailing=12.30;


//////////////////////////--->>>Object Type Methods
// Searches for an Objects Key or Value via index number>>>Object.keys(OBJECT_HERE)[INDEX_NUMBER_HERE]
console.log(     Object.keys(obj1)[0]        ); // obj1_Key1
console.log(     Object.values(obj1)[0]      ); // "obj1 value1"

//Searches an Objects Keys via matching String argument, then returns its relative Value>>>OBJECT_NAME_HERE["STRING_VALUE_HERE"]
console.log(       obj1["obj1_Key1"]        ); // "obj1 value1"
console.log(       nestedObj["nestedObj_Key1"]["obj3_Key1"]["obj2_Key1"]["obj1_Key1"]       ); // "obj1 value1"


////////////////////////////--->>>Array Type Methods
const numbersArray=["1","2","3","4"];
numbersArray.splice(2);
console.log(     numbersArray    );// ['1', '2']

const lettersArray=["A", "B", "C", "D"];
lettersArray.splice(2, 1, "x", "y");
console.log(     lettersArray     );// ['A', 'B', 'x', 'y', 'D']

// DATA_HERE.toString() converts to string
/////////////////--->>>Primitive Type Methods (Strings, Integers etc.)
//💢no Integer types!💢
console.log(     string1.slice(2)      );// "c1.23"  "ab.c1.23"
console.log(     string1.slice(-1)      );// "3"  "ab.c1.23"
console.log(     string1.slice(1,-1)      );// "b.c1.2"  "ab.c1.23"

//💢no Integer types!💢
console.log(     string1.charAt(2)     );// "." //💢

//Picks out the character of a Primitive data Type via Index Number
console.log(  string1.toString()[3]               );// "c"   //"ab.c1.23"
console.log(  int_zeroTrailing.toString()[3]      );// "0"   //1230
console.log(  int_dec_zeroTrailing.toString()[3]  );// "3"   //12.30

//Splits a String into an Array
var str_A = "Hello";
var arr_A = str_A.split("");
console.log(arr_A); // Output: ["H", "e", "l", "l", "o"]

var str_B = "Hello,+World!";
var arr_B = str_B.split(",+");
console.log(arr_B); // Output: ["Hello", "World!"]


/////////////////////////--->>>Loop Conditionals
//while(){}
fishTank=0;
while(fishTank<3)
{fishTank++;console.log('Fish Tank Has '+fishTank+' Small Fish.');}

//do{}while()
fishPond=0;
do{fishPond++;console.log('Fish Pond Has '+fishPond+' Big Fish.');}
while(fishPond<3)

//for(){}
for(let i=0; i<5; i++){
  console.log(obj1);
  console.log(numbersArray);
}
for(let i=0; i<numbersArray.length; i++){
  console.log(obj1);
  console.log(numbersArray);
}
for(let i=0; i<Object.keys(obj1).length; i++){
  console.log(obj1);
  console.log(numbersArray);
}
//for(key in OBJECT){}
for(let key in obj1){console.log(key);}

//for(element of ARRAY){}
for(let element of numbersArray){console.log(element);}

//Runs a function EVERY 7 seconds
setInterval(function(){ console.log("interval"); }, 7e3);

//Runs a function ONCE AFTER 9 seconds
setTimeout(function(){ console.log("timeout"); }, 9e3); 

//Exits a running terminal process (the '0' parameter just means exit w/ out an error code), Process killed where method is invoked!!!
//// process.exit(0) ////$$$$
 







////Search inside a String////
let stringSearch = "Hello World!";
let position = stringSearch.search("World");
console.log(position); // Output: 6






////Adding Properties to an empty Object////
const animalData = {};
// Add properties to the object:
animalData['🐶'] = 'Dog';
animalData['🐱'] = 'Cat';
animalData['🐰'] = 'Rabbit';

console.log(animalData);
//~$ {
//~$ '🐶': 'Dog',
//~$ '🐱': 'Cat',
//~$ '🐰': 'Rabbit'
//~$ }











//////////---OPERATORS---/////////////////////////
//                                  
//                               ASSIGN  =
//                                  NOT  !
//                                   OR  ||
//                                  AND  &&
//                             EQUAL TO  ==
//                         NOT EQUAL TO  !=
//                       INCREMENT by 1  VAR++
//                  INCREMENT by NUMBER  VAR+=NUMBER
//                       DECREMENT by 1  VAR--
//                  DECREMENT by NUMBER  VAR-=NUMBER  
//        CHECK IF EQUAL AND EQUAL TYPE  ===
//CHECK IF NOT EQUAL AND NOT EQUAL TYPE  !==
//  
///////////////////////////////////////////////////





































// // JavaScript Methods Cheat Sheet

// // String Methods
// console.log('JavaScript String Methods:');
// console.log('--------------------------');

// // String.length
// const strLength = "Hello World!".length;
// console.log('const strLength = "Hello World!".length;');
// console.log('console.log(strLength); // Output: 12\n');

// // String.charAt(index)
// const charAt = "Hello".charAt(1);
// console.log('const charAt = "Hello".charAt(1);');
// console.log('console.log(charAt); // Output: "e"\n');

// // String.slice(startIndex, endIndex)
// const slice = "Hello".slice(1, 3);
// console.log('const slice = "Hello".slice(1, 3);');
// console.log('console.log(slice); // Output: "el"\n');

// // String.split(separator)
// const split = "Hello,World!".split(",");
// console.log('const split = "Hello,World!".split(",");');
// console.log('console.log(split); // Output: ["Hello", "World!"]\n');

// // String.toLowerCase()
// const lowercase = "Hello".toLowerCase();
// console.log('const lowercase = "Hello".toLowerCase();');
// console.log('console.log(lowercase); // Output: "hello"\n');

// // String.toUpperCase()
// const uppercase = "Hello".toUpperCase();
// console.log('const uppercase = "Hello".toUpperCase();');
// console.log('console.log(uppercase); // Output: "HELLO"\n');

// // String.includes(substring)
// const includes = "Hello World!".includes("World");
// console.log('const includes = "Hello World!".includes("World");');
// console.log('console.log(includes); // Output: true\n');

// // String.replace(searchValue, replaceValue)
// const replace = "Hello World!".replace("World", "Universe");
// console.log('const replace = "Hello World!".replace("World", "Universe");');
// console.log('console.log(replace); // Output: "Hello Universe!"\n');

// // String.trim()
// const trim = "   Hello   ".trim();
// console.log('const trim = "   Hello   ".trim();');
// console.log('console.log(trim); // Output: "Hello"\n');

// // String.concat(str1, str2, ...)
// const concat = "Hello".concat(" ", "World");
// console.log('const concat = "Hello".concat(" ", "World");');
// console.log('console.log(concat); // Output: "Hello World"\n');


// // Number Methods
// console.log('JavaScript Number Methods:');
// console.log('--------------------------');

// // Number.toString()
// const numToString = (10).toString();
// console.log('const numToString = (10).toString();');
// console.log('console.log(numToString); // Output: "10"\n');

// // Number.toFixed(digits)
// const numToFixed = (3.14159).toFixed(2);
// console.log('const numToFixed = (3.14159).toFixed(2);');
// console.log('console.log(numToFixed); // Output: "3.14"\n');

// // Number.toPrecision(precision)
// const numToPrecision = (3.14159).toPrecision(3);
// console.log('const numToPrecision = (3.14159).toPrecision(3);');
// console.log('console.log(numToPrecision); // Output: "3.14"\n');

// // Math.abs(num)
// const abs = Math.abs(-10);
// console.log('const abs = Math.abs(-10);');
// console.log('console.log(abs); // Output: 10\n');

// // Math.ceil(num)
// const ceil = Math.ceil(3.14);
// console.log('const ceil = Math.ceil(


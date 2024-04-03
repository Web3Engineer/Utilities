const l = console.log;

/* CONDITIONALS */
//if("x" in obj) -->returns bool
const myObj1 = {key1:"value1", key2:"value2"};
if ("key1" in myObj1) 
{l(`Object has the desired key`)} 
else {l(`Object does not have the desired key`)}

//.hasOwnProperty() method **does not consider properties inherited from the object's prototype chain. -->returns bool
const myObj9 = {key1:"value1", key2:"value2"};
if (myObj9.hasOwnProperty("key1")) 
{l(`Object has the desired key`)} 
else {l(`Object does not have the desired key`)}


/* METHODS */
//Get an array of all keys from an object
const myObj2 = {key1:"value1", key2:"value2"};
l(Object.keys(myObj2))//-->["key1", "key2"]

//Get an array of all values from an object
const myObj3 = {key1:"value1", key2:"value2"};
l(Object.values(myObj3))//-->["value1", "value2"]

//Get an array of all key-value pairs (entries) from an object
const myObj4 = { key1: "value1", key2: "value2" };
l(Object.entries(myObj4));//--> [["key1", "value1"], ["key2", "value2"]]


/* ITERATORS */
//Iterate through all key:value pairs of an object
const myObj5 = { key1: "value1", key2: "value2" };
for (const [key, value] of Object.entries(myObj5)) 
{l(key, value);}

//Iterate through all entries of an object
const myObj8 = { key1: "value1", key2: "value2" };
for (const entry of Object.entries(myObj8)) 
{l(entry);}

//Iterate through all keys of an object
const myObj6 = { key1: "value1", key2: "value2" };
for (const key of Object.keys(myObj6)) 
{l(key);}

//Iterate through all values of an object
const myObj7 = { key1: "value1", key2: "value2" };
for (const value of Object.entries(myObj7)) 
{l(value);}


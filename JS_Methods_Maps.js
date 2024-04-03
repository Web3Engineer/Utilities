const l = console.log;

/* ITERATORS */
//Iterate through all key:value pairs of a map
const mapKeyValues = new Map();
mapKeyValues.set('nestObj', {nestKey:"nestValue"});
mapKeyValues.set('key1', 'value1');
for (const [key, value] of mapKeyValues) 
{l(key, value);}

//Iterate through all entries of a map
const mapEntries = new Map();
mapEntries.set('nestObj', {nestKey:"nestValue"});
mapEntries.set('key1', 'value1');
for (const entry of mapEntries) 
{l(entry);}

/*METHODS*/
//Write & Read Maps to/from HD 
//Write a Map to HD
fs.writeFileSync("./PorkMap.txt", JSON.stringify([...porkMap],null,2));
//Read a Map from HD
const porkMapOpen = new Map(JSON.parse(fs.readFileSync("./PorkMap.txt","ascii")));






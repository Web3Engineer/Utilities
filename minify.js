const fs = require("fs");
var jsonminify = require("jsonminify");

//var jsonData = { "key": "value", "array": [1, 2, 3] };
var jsonData = JSON.parse(fs.readFileSync("./Psalms.json", "utf-8"));
var minifiedData = jsonminify(JSON.stringify(jsonData));
fs.writeFileSync("./MichaMin.json", minifiedData);
console.log(minifiedData);

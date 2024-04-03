const fs = require("fs"); //Core Module

const authTokenGen = function ({
  indicesNumber: _indicesNumber,
  indicesSymbols: _indicesSymbols,
  tokenChest: _tokenChest,
}) {
  const keySymbols = _indicesSymbols;
  const tokenChest = _tokenChest;
  const numbers = Array.from({ length: `${_indicesNumber}` }, (_, i) => i);
  let myObject = {};
  keySymbols.split("").forEach((letter) => {
    numbers.forEach((num) => {
      const key = letter + num;
      const randomTokenFromChest =
        tokenChest[Math.floor(Math.random() * tokenChest.length)];
      myObject[key] = randomTokenFromChest;
    });
  });
  return fs.writeFileSync("./AuthTokens.txt", JSON.stringify(myObject));
};

authTokenGen({
  indicesNumber: 15,
  indicesSymbols: "ABCDEFGHIJ",
  tokenChest: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
});

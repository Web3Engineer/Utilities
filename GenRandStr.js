const genRandStr$$ = ({ TokenChest: _tokenChest, TokenLength: _tokenLength }) =>
  Array.from(
    { length: _tokenLength },
    () => _tokenChest[Math.floor(Math.random() * _tokenChest.length)]
  ).join("");

console.log(
  genRandStr$$({
    TokenChest:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=~!@#$%^&*()_+[]{}|;:,.<>?",
    TokenLength: 20,
  })
);

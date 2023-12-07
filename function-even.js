const enter = [7, 15, 5, 14, 29, 34, 56, 73];
let i = 0;

function gets() {
  const value = enter[i];
  i++;
  return value;
}

function print(text) {
  console.log(text);
}

module.exports = { gets, print };

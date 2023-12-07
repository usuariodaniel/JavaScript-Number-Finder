const { gets, print } = require("./function-even");

const n = gets();
let biggerEvenNumber = null;
let smallOddNumber = null;

for (let i = 0; i < n; i++) {
  const number = gets();

  if (number % 2 === 0) {
    if (biggerEvenNumber === null || number > biggerEvenNumber) {
      biggerEvenNumber = number;
    }
  } else {
    if (smallOddNumber === null || number < smallOddNumber) {
      smallOddNumber = number;
    }
  }
}

print("The biggest even number is: " + biggerEvenNumber);
print("The smallest odd number is: " + smallOddNumber);

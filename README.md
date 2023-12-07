# JavaScript Number Finder

This project is a simple JavaScript program that finds the largest even number and the smallest odd number from a series of input numbers.

## Installation

To run this project, you need to have Node.js installed on your computer. You can download Node.js from the official website. Once you have Node.js installed, you can clone this repository and run the program using the command `node main.js`.

## Usage

To run the program, navigate to the project directory in your terminal and run the command `node main.js`. The program will prompt you to enter a series of numbers. After you've entered all the numbers, the program will print the largest even number and the smallest odd number.

## How it works

1. The code first imports two functions, `gets` and `print`, from a module named `function-even`. The `gets` function is used to get user input, and the `print` function is used to print output to the console.

```javascript
const { gets, print } = require("./function-even");
```

2. The `gets` function is then called to get the number of inputs that will be processed. This value is stored in the variable `n`.

```javascript
const n = gets();
```

3. Two variables, `biggerEvenNumber` and `smallOddNumber`, are initialized with `null`. These will hold the largest even number and the smallest odd number found in the input series, respectively.

```javascript
let biggerEvenNumber = null;
let smallOddNumber = null;
```

4. A `for` loop is used to iterate over the input series. The gets function is called in each iteration to get the current number.

```javascript
for (let i = 0; i < n; i++) {
 const number = gets();
```

5. Inside the loop, an `if` statement checks if the current number is even. This is done by using the modulus operator (`%`) with the number and 2. If the remainder is 0, the number is even.

```javascript
if (number % 2 === 0) {
```

6. If the current number is even, another `if` statement checks if `biggerEvenNumber` is `null` (which means this is the first even number encountered) or if the current number is greater than `biggerEvenNumber`. If either condition is true, `biggerEvenNumber` is updated with the current number.

```javascript
if (biggerEvenNumber === null || number > biggerEvenNumber) {
  biggerEvenNumber = number;
}
```

7. If the current number is not even (it's odd), the same process is repeated, but this time for the smallest odd number. The `if` statement checks if `smallOddNumber` is `null` or if the current number is less than `smallOddNumber`. If either condition is true, `smallOddNumber` is updated with the current number.

```javascript
} else {
 if (smallOddNumber === null || number < smallOddNumber) {
   smallOddNumber = number;
 }
}
```

8. After all the numbers have been processed, the `print` function is used to print the largest even number and the smallest odd number to the console.

```javascript
print("The biggest even number is: " + biggerEvenNumber);
print("The smallest odd number is: " + smallOddNumber);
```

In summary, this code is a simple program that takes a series of numbers as input and finds the largest even number and the smallest odd number among them

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge

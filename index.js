//////////////////////////////////////////////////
// Rank8
//////////////////////////////////////////////////
// Ex.1
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// function maskify(cc) {
//   let reverseArr = cc.toString().split("").reverse();
//   let newArr = [];
//   for (i = 0; i < reverseArr.length; i++) {
//     if (i < 4) {
//       newArr.push(reverseArr[i]);
//     } else {
//       newArr.push("#");
//     }
//   }
//   return console.log(newArr.reverse().join(""));
// }
// maskify(12345);
// maskify("4556364607935616");

//////////////////////////////////////////////////

// Ex.2
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//   let newString = num.toString();
//   let newArr = [];
//   for (i = 0; i < newString.length; i++) {
//     newArr.push(newString[i] * newString[i]);
//   }
//   return +newArr.join("");
// }
// squareDigits(91);

//////////////////////////////////////////////////

// Ex.3

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = (arr) => {
//   let newString = "";
//   for (i = 0; i < arr.length; i++) {
//     newString = newString + arr[i];
//   }
//   return parseInt(newString, 2);
// };

//////////////////////////////////////////////////

// Ex.4

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// function alphabetPosition(text) {
//   let newString = text.toLowerCase();
//   let numbers = "";
//   for (i = 0; i < newString.length; i++) {
//     if (
//       newString[i].charCodeAt() >= "a".charCodeAt() &&
//       newString[i].charCodeAt() <= "z".charCodeAt()
//     ) {
//       numbers =
//         numbers + (newString[i].charCodeAt() - "a".charCodeAt() + 1) + " ";
//     }
//   }
//   return numbers.trim();
// }
// alphabetPosition("The narwhal bacons at midnight.");

//////////////////////////////////////////////////

// Ex.5

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// function duplicateCount(text) {
//   newString = text.toLowerCase();
//   let howMany = 0;
//   let newArr = [];
//   for (i = 0; i < newString.length; i++) {
//     if (
//       -1 !== newString.indexOf(newString[i], [i + 1]) &&
//       -1 === newArr.indexOf(newString[i])
//     ) {
//       howMany++;
//       newArr.push(newString[i]);
//     }
//   }
//   return console.log(howMany);
// }
// duplicateCount("aabBcde");

//////////////////////////////////////////////////

// Ex.6

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// function digPow(n, p) {
//   let number = 0;
//   let string = n.toString();
//   for (i = 0; i < string.length; i++) {
//     number = number + Math.pow(+string[i], p);
//     p++;
//   }
//   if (number % n === 0) {
//     return number / n;
//   } else {
//     return -1;
//   }
// }

// digPow(46288, 3);
// digPow(92, 1);

//////////////////////////////////////////////////
// Rank7
//////////////////////////////////////////////////

// Ex.7
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// function rgb(r, g, b) {
//   const myArr = [r, g, b];
//   let newString = "";
//   for (i = 0; i < myArr.length; i++) {
//     if (myArr[i] <= 0) {
//       newString += (0).toString(16) + "0";
//     } else if (myArr[i] > 255) {
//       newString += (255).toString(16);
//     } else if (myArr[i] > 0 && myArr[i] < 16) {
//       newString += "0" + myArr[i].toString(16);
//     } else {
//       newString += myArr[i].toString(16);
//     }
//   }

//   return console.log(newString.toUpperCase());
// }
// rgb(60, 40, 30);

//////////////////////////////////////////////////

// Ex.8

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// const moveZeros = function (arr) {
//   const newArr = [];
//   let n = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       newArr.push(arr[i]);
//     } else {
//       n++;
//     }
//   }
//   let j = 0;
//   while (j < n) {
//     newArr.push(0);
//     j++;
//   }

//   return console.log(newArr);
// };
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

//////////////////////////////////////////////////
// Rank6
//////////////////////////////////////////////////

// Ex.9
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const arr = str.split(" ");
  console.log(arr);
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!/[a-z,A-Z]/.test(arr[i])) {
      newArr.push(arr[i]);
    } else {
      newArr.push(`${arr[i].replace(/^./, "") + arr[i][0] + "ay"}`);
    }
  }
  return newArr.join(" ").trim();
}
console.log(pigIt("Pig latin is cool"));

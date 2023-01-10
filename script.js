/*
Exercise 1: Random Number
Instructions
Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number.
 */

const Number = () => {
    let Number = Math.floor(Math.random() * 100);
    let evenNumber = [];
    let j = 0;
    for (let i = 0; i < Number; i++) {
      if (i % 2 == 0) {
        evenNumber[j] = i;
        j++;
      }
    }
    console.log(evenNumber);
  }
  
  Number();
  
  /*Exercise 2: Capitalized Letters
  Instructions
  Create a function that takes a string as an argument.
  Have the function return:
  The string but all letters in even indexes should be capitalized.
  The string but all letters in odd indexes should be capitalized.
  Note:
  Index 0 will be considered even.
  The argument of the function should be a lowercase string with no spaces. */
  
  const capitalize = (word) => {
    let tab = word.split("");
    let  = [];
    let tabWorld = [];
    for (let i = 0; i < tab.length; i++) {
      if (i % 2 == 0 || i == 0) {
        [i] = tab[i].toUpperCase();
      } else {
        [i] = tab[i].toLowerCase();
      }
      if (i % 2 == 0 || i == 0) {
        tabWorld[i] = tab[i].toLowerCase();
      } else {
        tabWorld[i] = tab[i].toUpperCase();
      }
    }
    tab = [tabWorld.join(""), .join("")];
    return tab;
  }
  
  console.log(capitalize("hello"));
  
  /*Exercise 3 : Is Palindrome?
  Instructions
  Write a JavaScript function that checks whether a string is a palindrome or not.
  Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.*/
  
  const isPalindrome = (word) => {
    let reverseWo = word.split("").reverse().join("");
    if (word == reverseWo) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("madam"));
  
  /*Exercise 4 : Biggest Number
  Instructions
  Create a function called NumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
  Note : This function should work with any array; */
  
  const NumberInArray = (arrayNumber) => {
    let Number = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (isNaN(arrayNumber[i])) {
        continue;
      }
      if (arrayNumber[i] > Number) {
        Number = arrayNumber[i];
      }
    }
    return Number;
  }
  
  console.log(NumberInArray(["a", 3, "n", 4, 2, "c", 10]));
  
  /*Exercise 5: Unique Elements
  Instructions
  Write a JS function that takes an array and returns a new array with only unique elements. */
  
  const Elements = (array) => {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != array[i + 1]) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  console.log(Elements([1, 2, 3, 3, 3, 3, 4, 5]));
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

// Question: You are given a list of numbers. Write an algorithm to remove all the duplicate numbers
// of the lists so that the list contains only distinct numberin the same order as they
// appears in the input list.
// The first line of input consists of an integer-size, representing the number of elements in the list(N),
// the second line consists of N-space separated integers- arr[0],arr[1]
//----------
//8 
// 1 1 2 3 5 4 5 6

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin')

input =  "8\n1 1 2 3 5 4 5 6";

//Processing the input *****
// Read the input as a string with two lines
// Split the input into two parts: size and numbers
// Convert the second line (space-separated numbers) into an array of integers


var lines = input.toString().split('\n');
var sizeLine = lines[0];
var numbersLine = lines[1];

var parts = numbersLine.split(' ');
var numbers = [];

for (var i = 0; i < parts.length; i++) {
  numbers.push(parseInt(parts[i]));
}

//actual algo for the solution****
// Create an empty array for final answer (to store unique numbers)
// Loop through each number in the input array
// For each number, check if it's already in the result array
// If not found, add it to the result array
// Print the result array

function removeDuplicates(numbers) {
    var result = [];
    
    for (var i = 0; i < numbers.length; i++) {
      var current = numbers[i];
      var alreadyExists = false;
    
      for (var j = 0; j < result.length; j++) {
        if (result[j] === current) {
          alreadyExists = true;
          break;
        }
      }
      
      //if(result.includes(current)) {
         // alreadyExists = true;
         // break;
       // }
      
      if (!alreadyExists) {
        result.push(current);
      }
    }
    return result
}

console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 5, 4, 6]







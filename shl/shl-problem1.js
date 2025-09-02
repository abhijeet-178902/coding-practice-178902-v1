//You are given a list of numbers. Write an algorithm to remove all the //duplicate numbers of the lists so that the list contains only distinct // numberin the same order as they appears in the input list.

// Input : 11
// 1 1 2 3 4 5 6 7 8 9 10
// 10
// 11 12 13 14 15 16 17 18 19 20

var input = "11\n1 1 2 3 4 5 6 7 8 9 10\n10\n11 12 13 14 15 16 17 18 19 20";



// Input : 11
// 1 1 2 3 4 5 6 7 8 9 10      
// 10
// 3 4 1 44 4 7 9 10 2 5

//6, 8
//44

// var input = "11\n1 1 2 3 4 5 6 7 8 9 10\n10\n3 4 1 44 4 7 9 10 2 5";
 
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin')

//input processing **************
var lines = input.split('\n');


var size1 = parseInt(lines[0]);
var size2 = parseInt(lines[2]);

// Extract and convert both lists to arrays of numbers
var list1Parts = lines[1].split(' ');
var list2Parts = lines[3].split(' ');

var list1 = [];
var list2 = [];

for (var i = 0; i < list1Parts.length; i++) { // or use .map()
  list1.push(parseInt(list1Parts[i]));
}

for (var i = 0; i < list2Parts.length; i++) {
  list2.push(parseInt(list2Parts[i]));
}


// actual solution logic************

function countNonCommonElements1(arr1, arr2) {
  var count = 0;

  // Count elements in arr1 not in arr2
  for (var i = 0; i < arr1.length; i++) {
    var found = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      count++;
    }
  }

  // Count elements in arr2 not in arr1
  for (var i = 0; i < arr2.length; i++) {
    var found = false;
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      count++;
    }
  }

  return count;
}

var result = countNonCommonElements1(list1, list2);
console.log(result); 




function countNonCommonElements2(arr1, arr2) {
  var unique1 = [];
  var unique2 = [];

  // Remove duplicates from arr1
  for (var i = 0; i < arr1.length; i++) {
    if (unique1.indexOf(arr1[i]) === -1) {
      unique1.push(arr1[i]);
    }
  }

  // Remove duplicates from arr2
  for (var i = 0; i < arr2.length; i++) {
    if (unique2.indexOf(arr2[i]) === -1) {
      unique2.push(arr2[i]);
    }
  }

  var count = 0;

  // Count elements in unique1 not in unique2
  for (var i = 0; i < unique1.length; i++) {
    if (unique2.indexOf(unique1[i]) === -1) {
      count++;
    }
  }

  // Count elements in unique2 not in unique1
  for (var i = 0; i < unique2.length; i++) {
    if (unique1.indexOf(unique2[i]) === -1) {
      count++;
    }
  }

  return count;
}


var result2 = countNonCommonElements2(list1, list2);
console.log(result2); 

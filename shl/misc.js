/////////

var num1 = 7;
var num2 = 10;

var num1BinStr = num1.toString(2);
var num2BinStr = num2.toString(2);

const len = Math.max(num1BinStr.length, num2BinStr.length); // **********

console.log(len);

num1BinStr = num1BinStr.padStart(len, '0'); //************
num2BinStr = num2BinStr.padStart(len, '0'); // ************

console.log(num1BinStr);
console.log(num2BinStr);

//////////////

const inputStr = `
3 4
10 20 15 8
5 25 -2 18
-3 7 30 12
`
const inputArr = inputStr.trim().split('\n');
 
  console.log(inputArr); // output: [ '3 4', '10 20 15 8', '5 25 -2 18', '-3 7 30 12' ]
 const [days, items] = inputArr[0].split(' '); //***********
 console.log(days, items); //output 3 4
 
 const resultArr = [];
 for(i=1;i<inputArr.length;i++){
     inputArr[i] = inputArr[i].split(' ').map((e)=>parseInt(e));
     resultArr.push(Math.max(...inputArr[i]));
 }
 console.log(resultArr.join('\n')); 

// output below seperated by lines
//20
//25
//30


/////////// SET
const input1 = [1, 2, 3, 3, 4];
const input2 = [3, 4,4 , 5, 6];

const set1 = new Set(input1); // ******** SET of unique values
const set2 = new Set(input2); 

console.log(set1, set2); //output {1, 2, 3, 4}   {3, 4, 5, 6}
//set.add(ele) // if add some value more than one time. it will ignore
//set.delete(ele)
//set.has(ele)
//set.clear()
//set.size

//to get value in nth position in Set
const mySet = new Set(['apple', 'banana', 'orange', 'grape']);
const n = 2; // To get the item at the 3rd position (index 2) //*******

const myArray = [...mySet]; // Convert Set to an Array //******
const item = myArray[n]; //*********

console.log(item); // Output: orange //********


 







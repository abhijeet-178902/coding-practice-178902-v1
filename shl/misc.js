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




 







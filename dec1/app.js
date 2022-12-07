//  elves want to eat rations with the highest calorie first
// we need to parse inputs from line breaks
// count the line breaks = elf number
// add the number of calories within the line break
// one elf can carry multiple items

//! part 1 — find elf carrying the highest number of items

const regex = /\r\n/;
const fs = require('fs');
const { stripVTControlCharacters } = require('util');
const input = fs.readFileSync('data.txt', 'utf-8');
const array = input.split(regex);

const numArr = array.map((item) => {
  if (item === '') {
    item = 0;
  }
  return parseInt(item);
});

function findLargestSum(data) {
  let highestCycle = 0;
  const arr = [];
  // loop through the data
  for (let i = 0; i < data.length; i++) {
    // add to the highest total if data is bigger than 0
    if (data[i] > 0) {
      highestCycle += data[i];
    }
    // when data is zero push into the array and rest highestCyle to 0
    if (data[i] === 0) {
      arr.push(highestCycle);
      highestCycle = 0;
    }
  }
  // find the max value of the array
  
  console.log(Math.max(...arr));
  return arr
}

// use a sort method to sort from top to bottom
const sortedArr = findLargestSum(numArr).sort(function(a,b){return b - a})

// use a splice to only get the three values and use a reduce to add those numbers together
const topThreeValues = sortedArr.splice(0,3).reduce((number, currVal) => {
  return number + currVal
})

console.log(topThreeValues)





// findLargestSum(numArr);


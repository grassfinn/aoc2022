//  elves want to eat rations with the highest calorie first
// we need to parse inputs from line breaks
// count the line breaks = elf number
// add the number of calories within the line break
// one elf can carry multiple items

//! part 1 — find elf carrying the highest number of items

const regex = /\n\n/;

// import data from './data.json' assert {type: "json"}

// get Data
export const getData = async (inputFile) => {
    let rawInputs = await fetch(inputFile)
    const response = await rawInputs.text()
        // .then(response => response.text());
        const dividedList = response.split("\r\n")
        console.log(dividedList)        
        return response
};

// go through the array and look for the 

getData('data.txt')


// write the code that processes data

// 

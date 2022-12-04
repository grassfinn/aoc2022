const minutesEl = document.querySelector("input[value='15']");
const secondsEl = document.querySelector("input[value='00']");

let seconds = 0;
// let totalSeconds = minutes * 60;
// let totalMinutes = totalSeconds / 60;
let start = false


function stopTimer(){
  clearInterval(myInterval)
}

function toggleTimer(){
  
  start = !start
  if (start) {
    document.querySelector('.start').textContent = 'Stop'
    startBtn.style.color = '#900A0A';
    return
  }
  document.querySelector('.start').textContent = 'Start'
  startBtn.style.color = '#09A65A'
}

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', toggleTimer)

document.querySelector('.settings').addEventListener('click', customTime)

function customTime(){
  start = false
  let userInput = prompt("How many minutes would you like to add?")
  // checks if userinput is not empty or is a string. if it is 
  if (!userInput){
    alert('Please insert a number')
    return
  }
  console.log(parseInt(userInput))
  minutesEl.value = parseInt(userInput)
  secondsEl.value = `00`
  
}
// get total amount of secs
// convert into mins
// have the remainder into secs

function timer() {
  let minutes = parseInt(minutesEl.value);
  if (minutes === 0 && seconds === 0) {
    return;
  }

  if (minutes > 0 && seconds === 0) {
    minutesEl.value = minutes;
    minutes--;
  }

  if (seconds > 0) {
    secondsEl.value = seconds;
    seconds--;
  }

  if (seconds < 10) {
    secondsEl.value = `0${seconds}`;
  }

  if (seconds === 0) {
    secondsEl.value = `0${seconds}`;
    seconds = 59;
  }
  // totalSeconds--;
  // seconds--;
  console.log(seconds);
  console.log(`${minutes}:${seconds}`);
}

const myInterval = setInterval(() => {
    if (!start) return
    // let numberAfterDecimal = (totalMinutes % 1) * 100
    // let decimalToSeconds = Math.ceil((numberAfterDecimal * 60) / 100)
    timer()
    
  // console.log('decimal', numberAfterDecimal)
  // console.log('dec2Sec', decimalToSeconds)
  // console.log(totalMinutes)
  // console.log(totalSeconds)
}, 1000);

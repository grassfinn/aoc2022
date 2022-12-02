
const minutes = document.querySelector("input[value='15']")


let totalSeconds = (parseInt(minutes.value)) * 60




setInterval(() => {
    let totalMinutes = (totalSeconds / 60);
    let numberAfterDecimal = (totalMinutes % 1) * 100
    let decimalToSeconds = (numberAfterDecimal * 60) / 100
    
    totalSeconds--
    console.log('decimal', numberAfterDecimal)
    console.log('seconds', decimalToSeconds)
    console.log(totalMinutes)
    console.log(totalSeconds)
},1000)
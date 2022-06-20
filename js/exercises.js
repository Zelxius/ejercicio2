
// Problem 1: Variables
const date = new Date();

let day = date.toLocaleString('en-us', {weekday: 'long'});
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hour = date.getHours();

// Problem 2: Variables
const myText = "I enjoy spending time with my friends."
const word = "enjoy"


// Problem 1: Functions

function getTime() {
    let currentHour = convertHourInto12HourClock(hour);
    let meridiem = isAMorPM(hour);

    return (`Today is: ${day}. \nCurrent time is: ${currentHour} ${meridiem} : ${minutes} : ${seconds}`)
}

function convertHourInto12HourClock(hour){
    if (hour >= 13) {
        return (hour - 12);
    }
}

function isAMorPM(hour) {
    if (hour >= 13) {
        return "PM";
    } else {
        return "AM";
    }
}

// Executing getTime function
console.log(getTime())
//getTime()

// Problem 2: Function

function searchWordIn(word, text) {
    if (text.includes(word)) {
        return true;
    } else {
        return false;
    }
}

// Executing searchWordIn function
console.log(searchWordIn(word, myText));

// Problem 3: Function

function addNumbers(number1, number2) {
    let result;

    if (number1 == number2) {
        result = ((number1+number2)*4)
    } else {
        result = (number1 + number2)
    }

    return result;
}

// Executing addNumbers function
console.log(addNumbers(10,5));

// Problem 4: Function

function convertText(originalText) {
    if (originalText.includes("Volcancode")) {
        return originalText;
    } else {
        return "Volcancode " + originalText;
    }
}

// Executing convertText function
console.log(convertText(myText));

// Problem 5: Function

function findMaxNumber(number1, number2, number3) {
    let maxNumber;

    if ((number1 > number2) && (number1 != number2)) {
        maxNumber = number1;
    } else if ((number2 > number3) && (number2 != number3)) {
        maxNumber = number2;
    } else {
        maxNumber = number3;
    }

    return maxNumber;
}

// Executing findMaxNumber function
console.log(findMaxNumber(-15,8,7));
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// function analyzeColor(colorName){
//     if(colorName === 'red'){
//         return 'Bell peppers can be red.';
//     } else if(colorName === 'orange'){
//         return 'Whataburger is orange.';
//     } else if(colorName === 'yellow'){
//         return 'Lemons are yellow';
//     } else if(colorName === 'green') {
//         return 'Brussels sprouts are green.';
//     } else if(colorName === 'blue') {
//         return 'Jolly Ranchers can be blue.';
//     } else if(colorName === 'purple'){
//         return 'Plums are purple.';
//     } else{
//         return 'I don\'t know anything about ' + colorName;
//     }
// }
//
// console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// const analyzeColor = (colorName) => {
// switch(colorName) {
//     case "red":
//         return 'Bell peppers can be red.';
//     case "orange":
//         return 'Carrots are orange.';
//     case "yellow":
//         return 'Lemons are yellow.';
//     case "green":
//         return 'Brussels sprouts are green.';
//     case "blue":
//         return 'Jolly Ranchers can be blue.';
//     case "purple":
//         return 'Plums are purple.';
//     default:
//         return 'I don\'t know anything about ' + analyzeColor;
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
const analyzeColor = prompt('What is the first color that comes to mind?');
switch(analyzeColor) {
    case "red":
        alert('Bell peppers can be red.');
        break;
    case "orange":
        alert('Carrots are orange.');
        break;
    case "yellow":
        alert('Lemons are yellow.');
        break;
    case "green":
        alert('Brussels sprouts are green.');
        break;
    case "blue":
        alert('Jolly Ranchers can be blue.');
        break;
    case "purple":
        alert('Plums are purple.');
        break;
    default:
        alert('I don\'t know anything about ' + analyzeColor);
        break;
}
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount){
//     if(luckyNumber === 1){
//         return totalAmount - (totalAmount * 0.1);
//     } else if(luckyNumber === 2){
//         return totalAmount - (totalAmount * 0.25);
//     } else if(luckyNumber === 3){
//         return totalAmount - (totalAmount * 0.35);
//     } else if(luckyNumber === 4){
//         return totalAmount - (totalAmount * 0.50);
//     } else if(luckyNumber === 5){
//         return "It's on us!";
//     } else{
//         return totalAmount;
//     }
// }
// const totalAfterDiscount = calculateTotal(1, 98);
// console.log("This is you're total after the discount: $" + totalAfterDiscount);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
const totalAmount = parseFloat(prompt("What was your total bill?"));

function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber === 1){
        return totalAmount - (totalAmount * 0.1);
    } else if(luckyNumber === 2){
        return totalAmount - (totalAmount * 0.25);
    } else if(luckyNumber === 3){
        return totalAmount - (totalAmount * 0.35);
    } else if(luckyNumber === 4){
        return totalAmount - (totalAmount * 0.50);
    } else if(luckyNumber === 5){
        return "It's on us!";
    } else{
        return totalAmount;
    }
}

const totalAfterDiscount = calculateTotal(luckyNumber, totalAmount);
alert(`Your lucky number was: ${luckyNumber}`);
alert(`Your bill before the discount: $${totalAmount.toFixed(2)}`);

if(typeof totalAfterDiscount === 'number') {
    alert(`Your bill after the discount: $${totalAfterDiscount.toFixed(2)}`);
} else{
    alert("It's on us!");
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// create a function that takes in a number and alerts whether it is odd or even
const enterNumber = confirm("Would you like to enter a number?");
if(enterNumber === true) {
    function evenOrOdd(number) {
        if (number % 2 === 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
    }

    const number = prompt("What is your number?");
    evenOrOdd(number);

    function positiveOrNegative(number) {
        if (number > 0) {
            alert("Your number is positive :)");
        } else if(number < 0 ) {
            alert("Your number is negative :(");
        } else{
            alert("Your number is 0, which is neither negative nor positive.");
        }
    }

    positiveOrNegative(number);

    function plusOneHundred(number) {
        return parseInt(number) + 100;
    }

    const result = plusOneHundred(number);
    alert("This is your number + 100: " + result);
} else{
    alert("I wasn't expecting that");
}
// const enterNumber = confirm("Would you like to enter a number?");
// if(enterNumber === true){
//     const number = prompt("What is your number?");
//     if(number % 2 === 0){
//     alert("Your number is even.");
//     } else{
//     alert("Your number is odd.");
//     }
//
//     if(number >= 0){
//         alert("Your number is positive:)");
//     } else{
//         alert("Your number is negative:(");
//     }
//
//     const plusOneHundred = parseInt(number) +  100;
//     alert("Your number + 100 is: " + plusOneHundred);
// } else{
//     alert("I wasn't expecting that.");
// }

"use strict";

console.log('Hello from external JavaScript.');

alert('Welcome to my Website!');

const userResponse = prompt('What is your favorite color?');
alert('Great, ' + userResponse+ ' is my favorite color too!');

// Word problem #1
let dailyRentalRateDollars = prompt('What is the price for a movie per day?');

let littleMermaidDaysRented = prompt('How many days did you rent The Little Mermaid?');
let brotherBearDaysRented = prompt('How many days did you rent Brother Bear?');
let herculesDaysRented = prompt('How many days did you rent Hercules?');

let totalRentalCost;

totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert('This is how much you would have to pay: ' + totalRentalCost);

// Word problem #2
let googleHourlyRateDollars = prompt('What is Google\'s hourly rate?');
let amazonHourlyRateDollars = prompt('What is Amazon\'s hourly rate?');
let facebookHourlyRateDollars = prompt('What is Facebook\'s hourly rate?');

let googleHours = prompt('How many hours did you work at Google this week?');
let amazonHours = prompt('How many hours did you work at Amazon this week?');
let facebookHours = prompt('How many hours did you work at Facebook this week?');

let totalPayment;

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
alert('This is how much you got paid this week: $' + totalPayment);

// Word Problem #3
let classIsNotFull = confirm('If this class is not full select "ok", if it is full select "cancel"');
let classScheduleDoesNotConflict = confirm('If you have no schedule conflicts select "ok", if you have conflicts select "cancel"');

let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
alert('Student is Enrolled: ' + studentEnrolled);

//Word problem #4
let numberOfItems = prompt('How many items are you purchasing?');
let offerIsValid = confirm('If the offer is not expired select "ok", if it is expired select "cancel"');
let isPremiumMember = confirm('If you are a premium member select "ok", if you are not select "cancel"');

let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
alert('Offer is applied: ' + productDiscountApplied);


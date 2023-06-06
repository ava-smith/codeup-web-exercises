"use strict";

// let x = 2;
//
// while(x <= 65536){
//     console.log(x);
//     x *= 2;
// }

// function doubleInput(num){
//     while(true) {
//         console.log(num);
//         num *= 2;
//         if(num > 66000) break;
//     }
// }
//
// doubleInput(2);

function sellMyCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log(`I have ${allCones} at the start of my day`);
    do{
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if(allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue;
        } else if(allCones - customerCones === 0) {
            console.log(`Yay! I sold them all!`);
            break;
        } else{
            console.log(`${customerCones} cones sold.`);
            allCones -= customerCones;
        }
        console.log(`I now have ${allCones} cones left`);
    } while(true);
}

sellMyCones();
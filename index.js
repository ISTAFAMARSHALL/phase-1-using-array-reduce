const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function counter(array) {

//     let count = 0

//     for (item of array) {

//         count = + item;

//     }

//     return count;

// }

// const totalBatteries = batteryBatches.reduce(counter, 0)

const totalBatteries = batteryBatches.reduce(function(batteries, element){ return batteries += element}, 0);

'use strict'

function filterArray(numbers, value) {
    let resultArr = [];

    for (const i of numbers) {
        if (i > value) {
            resultArr.push(i);
        }
    }
    return resultArr;
}

console.log("Task 3");
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log("\n");
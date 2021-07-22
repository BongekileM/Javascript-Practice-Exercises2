// Function returns the sum of all numbers from 1 to user defined max number.

function sumNums(max) {
    let sum = 0;
    for(let i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumNums(13));
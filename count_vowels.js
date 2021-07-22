// Function returns the number of vowels in a word.

let str = "";
function countE(str) {
    if (str.match(/[aeiou]/gi) === null) {
        return 0;
    } else {
        return str.match(/[aeiou]/gi).length;
    }
}
console.log(countE("Mary had A little lamb"));
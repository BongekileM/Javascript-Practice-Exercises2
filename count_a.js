// Function returns the number of both lowercase, and uppercase 'a's in a word.

let str = "";
function countE(str) {
    if (str.match(/a/gi) === null) {
        return 0;
    } else {
        return str.match(/a/gi).length;
    }
}
console.log(countE("Anny and Ben"));
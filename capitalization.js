const str = "ANDREA";

const firstLetter = str.substring(0, 1).toUpperCase();
const restOfName = str.substring(1).toLowerCase();

const name = firstLetter + restOfName;

console.log(name);

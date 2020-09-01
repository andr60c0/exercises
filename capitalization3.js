const str = "Andrea";

const startOfName = str.substring(0, 2).toLowerCase();
const thirdLetter = str.substring(2, 3).toUpperCase();
const restOfName = str.substring(3).toLowerCase();

const name = startOfName + thirdLetter + restOfName;

console.log(name);

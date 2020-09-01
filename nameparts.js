"usestrict";

const fullName = "Andrea Baldur Valgeirsdottir";

const firstSpace = fullName.indexOf(" ");
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

const firstName = fullName.substring(0, firstSpace);
const secondName = fullName.substring(firstSpace + 1, secondSpace);
const lastName = fullName.substring(secondSpace + 1);

console.log(firstName);
console.log(secondName);
console.log(lastName);

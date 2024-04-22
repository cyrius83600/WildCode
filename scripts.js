// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function refactor(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function refactorArray(people, callback) {
  const arrayFactor = [];
  for (let i = 0; i < people.length; i++) {
    arrayFactor.push(callback(people[i]));
  }
  return arrayFactor;
}
console.log(refactorArray(people, refactor));

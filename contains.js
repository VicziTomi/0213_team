let randomArr = require('./generateArray');

const contains = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      return true;
    }
  }
  return false;
};
let kiscica = randomArr.generateArray()
console.log(kiscica);
console.log(contains(kiscica));

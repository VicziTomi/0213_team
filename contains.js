let randomArr = require('./generateArray');

const contains = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      return true;
    }
  }
  return false;
};
console.log(randomArr.generateArray());
console.log(contains(randomArr.generateArray()));

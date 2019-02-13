let randomArr = require("./generateArray.js");

const contains = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 90) {
      return true;
    }    
  }
  return false;
};
console.log(randomArr.arrfill());
console.log(contains(randomArr.arrfill()));
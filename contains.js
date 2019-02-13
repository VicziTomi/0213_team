let fullArr = require("./generateArray.js");

const contains = (arr) => {
  for (let i = 0; i < 10; i++) {
    if (arr[i] === 90) {
      return true;
    }    
  }
  return false;
};
console.log(fullArr.arrfill());
console.log(contains(fullArr.arrfill()));
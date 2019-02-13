function generateArray (randomNumber) {
  const tomb = [];
  for (let i = 0; i < 10; i++) {
    randomNumber = Math.floor((Math.random() * 1000) + 1);
    tomb.push(randomNumber);
  }
  return tomb;
}
console.log(generateArray());
module.exports = { generateArray };

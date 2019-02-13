function generateArray (randomNumber) {
  const tomb = [];
  for (let i = 0; i < 10; i++) {
    randomNumber = Math.floor((Math.random() * 5) + 1);
    tomb.push(randomNumber);
  }
  return tomb;
}

module.exports = { generateArray };

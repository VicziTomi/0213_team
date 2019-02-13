const paratlan = (arr) => {
  let paratlanArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      paratlanArr.push(arr[i]);
    }
  }
let result=1;
for (let j = 0; j < paratlanArr.length; j++) {

result*=paratlanArr[j]
}
return result;
};

module.exports = {paratlan};
cat =[1,2,3,4,5,7]
console.log(paratlan(cat))
const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i<arry.length; i++){
    newArry.push(arry[i]*2)
}

const newArry2 = arry.map(val=> val*2).filter(val => val > 50)

const newArray3 = newArry2

console.log(newArry2)
// console.log(newArray3)
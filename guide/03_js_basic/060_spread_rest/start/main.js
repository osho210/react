// const nums = [3, 1, 4, 1, 5, 10, 2, 6, 12];

// const result = Math.max(...nums);
// console.log(result);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1];
// // コンマ区切りで接続すると
// let newArr2 = [...arr1 ,10, ...arr2]
// console.log(newArr2);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'jons'
console.log(obj, newObj);

// 残余引数で配列が作成される
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(n, argB);
restB(1, 3, 4)

import {useState} from 'react'
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray)
  const shffle = () =>{
    const newNums = [...nums]
    const popedValue = newNums.pop()
    newNums.unshift(popedValue)
    setNums(newNums)
  }
  console.log(nums)
  return (
    <>
    <h1>{nums}</h1>
    <button onClick={shffle}>shuffle</button>
    </>
  );
};

export default Example;

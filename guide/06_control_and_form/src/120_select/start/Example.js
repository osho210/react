import {useState} from 'react'
const array = ["apple","banana","cherry"]
const putsArray = array.map((array)=>{
  return(
    <option key={array} value={array}>
    {array}
  </option>
  )
}
)

const Example = () => {
  const [val,setVal] =useState("banana")
  return (
    <>
      <select
      value={val}
      onChange={(e)=>{
        return(
          setVal(e.target.value)
        )
      }}>
        {putsArray}
      </select>
      <p>選択された果物は: {val}</p>
    </>
  );
};

export default Example;

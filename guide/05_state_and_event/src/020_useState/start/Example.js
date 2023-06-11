import {useState} from 'react'
const Example = () => {
  let [val, setVal] = useState("helo")
  console.log(val)
  return (
    <>
      <input type="text"
      onChange={(e)=>{
        // displayVal = e.target.value
        // const setFn = valArray[1]
        setVal(e.target.value)
      }}/> = {val}
    </>
  );
};

export default Example;

// useStateの右側で初期値を設定、左側で変更する値を定義
// 左側で関数が実行されて値が変更されたタイミングで右側の値も変更される
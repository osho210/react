import {useState} from 'react'
const Example = () => {
  const [val,setVal] = useState(0)
  const countUp = () => {
      setVal(val + 1)
  }
  const countDown = () => setVal(val - 1)
   return (
    <>
      {/* <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: ここにcountを表示してください。</p> */}
      <p>現在のカウント数:{val}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

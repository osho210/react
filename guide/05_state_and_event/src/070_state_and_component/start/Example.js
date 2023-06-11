import { useState } from "react";

const Example = () =>{
  const [toggle, setToggle] = useState(true)
  const toggleClick = () => setToggle(!toggle)
  return(
    <>
    <button onClick={toggleClick}>toggle</button>
    {toggle? <Count key="A" title="A"/>: <Count key="B" title="B"/>}


    </>
  )
}
const Count = ({title}) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3> {title}:{count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

// keyを利用すると同じものかを確認する
// 同じ階層だと、同じコンポーネントとみなされ値は引き継がれる
// keyをしていると異なるものと認識されるので削除される
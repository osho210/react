import { useState } from "react";

const Example = () => {
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;

// 外部スコープで定義した値を利用して表示をしてしまうと、値の一貫性が取れなくなってしまう可能性が出てくる

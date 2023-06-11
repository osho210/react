import { useState } from "react";

const Example = () => {
  const [val , setVal] = useState(0)
  return (
    <>
      {/* <h3>練習問題</h3>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
      このコメントアウトを外して利用！ */}
        <CountResult title="カウント" val={val} />
        <CountUpdate val={val} setVal={setVal}/>

    </>
  );
};
const CountResult = ({val,title}) => <h3>{title}:{val}</h3>

const CountUpdate = ({val , setVal}) => {
  const countUp = () => {
    /* countに1追加 */
    setVal(val + 1)
  };
  const countDown = () => {
    /* countから1マイナス */
    setVal(val - 1)
    console.log(val)
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

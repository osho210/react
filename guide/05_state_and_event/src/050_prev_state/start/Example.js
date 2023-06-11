import { useState } from "react";

const Example = () => {
    const [val, setVal] = useState(0)
    const countUp = ()=>{
        // 次回のレンダリングの際の値にするという設定を行うだけ
        setVal(val + 1)
        setVal(pre => pre +1)
    }
    const countDown = () =>{
        setVal(val - 1)
    }
    return(
    <>
        <p>現在のカウント数:{val}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
    </>
    )
};

export default Example;

// stateの値は予約される、つまり非同期で実行される

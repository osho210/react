import {useState} from "react"

const Example = () => {
    const [val1, setBtn1] = useState(0)
    const [val2, setBtn2] = useState(10)
    const [val3, setBtn3] = useState(100)
    return(
    <>
        {/* // setVal() */}
        <p>ボタンAを{val1}回押しました</p>
        <button onClick={()=>{
            return(
                setBtn1(val1 + 1)
            )
        }}>ボタンA</button>
        <p>ボタンBを{val2}回押しました</p>
        <button onClick={()=>{
            return(
                setBtn2(val2 + 1)
            )
        }}>ボタンB</button>
        <p>ボタンCを{val3}回押しました</p>
        <button onClick={()=>{
            return(
                setBtn3(val3 + 1)
            )
        }}>ボタンC</button>
    </>
    )
};

export default Example;


// 関数が再実行されることでスコープから外すことができて際レンダリングを防止することができる
// useStateと紐づいた値を変更させるので、紐づいていない場合は値の反映がされないため処理が起きない
// useStateはトップかカスタムフックスの中でしか読み込めない
// react内部の処理を上から行う必要があるたね、if文などで読み込まれないものがある場合はリアクトの挙動が
// おかしくなってしまうのでエラーが発生する
// stateは上からrealizestateのような部分で管理している
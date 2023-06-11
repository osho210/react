import { useState } from "react";

const Example = () => {
  let displayVal;
  let [ val, setVal ] = useState();
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;


// 値の変更自体はされていたが、レンダリングが起きておらず値の変更を画面に反映させることができていなかった
// 読み込むタイミングが異なっていたため反映させることができていない
// ＝で表示させている部分は初期状態で読み込まれているスクリプト
// onchangeイベントで読み込まれているのは関数イベントが発生している段階。なので異なる

// 値の変更を格納するための変数が必要？
// 変更した値を表示させるための処理が必要

// stateはcomponentごとに保存されている
import { useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./components/Toast";

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  // この部分でDOMツリーを連動させる処理を記述する
  const CreateToast = ({children})=>{
    const element = document.querySelector('.container.start');
    return createPortal(children,element);
  }

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。</p>

      <div className="container start"></div>

      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        // createToastというのはあくまで関数コンポーネントとして定義してあるので
        // componentは以下にあるToast要素がchild要素として渡されて値の処理が実行っれる
        <CreateToast>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}/>
        </CreateToast>
      )}
      {/* <CreateToast /> */}
    </div>
  );
};

export default Example;

// 子要素で定義したイベントプロパティが親要素へ伝播して処理が実装されることをバブリングと言う
// ツリー上に存在しないコンポーネントはバブリングは実装されない
// あくまでReact上で処理を実装しているのみなので
// ポータルを利用することでDOMツリーではマウントされているが
// Reactツリーではマウントされていないためこのような状態になる
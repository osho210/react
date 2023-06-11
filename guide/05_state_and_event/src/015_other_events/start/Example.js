import "./Example.css";
const onChange = () => {
  console.log("onChange検知")
}
const Example = () => {
  return (

    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // テキストボック巣の変更を検知
          onChange={onChange}
          // フォーカスから外れた場合を検知
          onBlur={() => console.log("onBlur検知")}
          // テキストボックスのフォーカスを検知
          onFocus={() => console.log("onFocus検知")}
        />
      </label>
      {/* <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div> */}
      <div
        className="hover-event"
        // マウスに入ってきた時
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        // マウスが離れた時
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;

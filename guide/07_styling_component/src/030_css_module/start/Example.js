import { useState } from "react";

import SubButton from "./components/SubButton";
import style from "./Example.module.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* ボタンがクリックされたタイミングでbooleanの値が入れ替わる */}
      {/* btnのクラスはすでについている状態で、クリックされた場合selectedクラスが月変わるおいう意味 */}
      <button className={`${style.btn} ${isSelected ? `${style.selected}` : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

// cssをcomponentごとに用意する場合は同じ名前のcssを作成する

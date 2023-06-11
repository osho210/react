import { useState } from "react";
import styled from 'styled-components'

const StyleButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    /* 表示されている内容は全て文字列になっているんでjsを実行するときは{}で囲む必要ばある*/
    background: ${({isSelected}) => isSelected ? 'pink': ""};
`

const BackgroundOrange = styled(StyleButton)`
background: orange;

span{
  font-size: 20px;
}
`

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyleButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyleButton>
      <BackgroundOrange isSelected={isSelected} onClick={clickHandler}><span>ボタン</span></BackgroundOrange>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

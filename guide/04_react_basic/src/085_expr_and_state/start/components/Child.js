/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h3>式と文</h3>
    </div>
  );
};

export default Child;


// 変数に体入できないものは分で、代入できるものは式となる
// 1;のように式にも文にもなりうるものはあるこれを”式文”という
// JSXの場合は式しか利用することができない

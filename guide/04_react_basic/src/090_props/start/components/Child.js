/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({color : c = 'green' , num , fn, bool,obj}) => {
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn('test')}</h3>
      <h3>{bool ? 'true':'false'}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;

// propsの仕組みは親要素でpropsを定義、今回の場合だとcolor="red"
// propsの分割代入で{color}とすることでcolorを取得 classNameでcolorと定義することで
// 新たなredというクラス名が追加される。cssで指定しているので異なる値が設定できる
// color : c のようにcolorというプロパティ名を利用したくない場合は右のような記述を行うことでcという値を利用できるようになる
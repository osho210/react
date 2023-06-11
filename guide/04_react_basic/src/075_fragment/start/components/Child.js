import "./Child.css";
import React from 'react'

const Child = () => {
  return (
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
    </>
  );
};

export default Child;


// componentは一つのルートとして呼び出す必要があるため、上位の要素にh1,div,pなどがあってはならない
// つまり上位要素にはdiv要素でwrappeerされている必要があるということ
// 通常の場合はdivタグなどで囲むが不要なdiv要素を削除するためにはReact.Fragmentというものを利用するとよき
// Reeactで呼び出すか名前付きエクスポートでも利用することができる
// fragmentに属性を利用することができない
// key属性のみ利用できるがfragmentを記述する必要がある
import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

console.log(Example());

export default Example;

// componentで呼び出すと, childrenのtypeで定義したものが呼び出される。
// 呼び出されたものはreact.createElementで作成され再起的に作成される
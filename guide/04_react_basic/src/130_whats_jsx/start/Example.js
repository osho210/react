import React from "react";

const Example = () => {
  // const sample1 = <h1 className="greeting">Hello World</h1>;
  // console.log(sample1)

  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;


// Reactの処理が早いのは文字をゼロベースで生成しているのではなく、関数として
// 仮想ドムの中身を生成しているから早いのではないだろうか？
// React要素はオブジェクト化されたものの最も階層が高いもののことを呼ぶ
// React要素の俳諧にあるReact要素はReact要素のツリーと呼ぶ
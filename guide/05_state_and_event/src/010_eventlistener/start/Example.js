const Example = () => {
  const cliCkHandler = ()=>{
    alert("クリック成功")
  }
  return (
    <>
    <button onClick={(cliCkHandler)}>クリックしてね</button>
    <button onClick>クリックしてね</button>
    </>
  );
};

export default Example;

// () は関数を実行するという意味になるので、jsxで記述を作成するタイミングで実行されてしまう。
// onclickは実行するためのもの

const Bye = (props) => {
  const desc = Reflect.getOwnPropertyDescriptor(props, 'name')
  console.log(desc)
  return (
    <div>
      <h3>Bye {props.name}</h3>
    </div>
  );
};

export default Bye;

// propsで取得した内容は読み取り専用のため書き換えることはできないが、
// 仮の変数として新たに定義してしまうと変更することはできる
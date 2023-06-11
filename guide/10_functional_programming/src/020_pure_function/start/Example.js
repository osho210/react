const Example = () => {
  const add =(val1,val2)=>{
    return val1+val2
  }
  return (
    <>
      <p>純粋関数:{add(3,9)}</p>
    </>
  );
};

export default Example;

// 入力した値が決まった法則で加工されて返却されるのは純粋関数
// 逆に外部スコープで定義した値を関数内で使用してしまうと純粋関数ではなくなる
// console.log()で確認する動作も外部に影響を与えているので純粋関数ではない
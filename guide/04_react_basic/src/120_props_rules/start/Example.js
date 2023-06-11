// POINT propsは読み取り専用

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const name = "Tome"
const Example = () => {
  return (
    <>
      <Hello name = {name}/>
      <Bye name = {name}/>
    </>
  );
};

export default Example;


// 親から子への値を渡すことはできるが子から親へ渡すことはできない(原則)
// redoxやuseStateなどライブラリを利用することでできる場合もある
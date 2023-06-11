import { useState } from "react";

const Child = (props) => {
  // props.state ={val:1}
  return (
    <>
      <span>{props.state.value}</span>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });
  return (
    <>
      <div>
        <Child state={state}/>
      </div>
    </>
  );
};

export default Example;

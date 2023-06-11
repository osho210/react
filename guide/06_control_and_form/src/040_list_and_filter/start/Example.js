import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal,setFilterVal] = useState('')
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e)=>{
        return(
          setFilterVal(e.target.value)
        )
      }}/>
      <ul>
        {animals
        // 入力文字の中で入れtの中に含まれないものがあればフィルターで取り除く
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;

import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)
  const changeName = (e) => setPerson({...person, name: e.target.value })
  const changeNum = (e) => setPerson({...person, age: e.target.value })
  const resetBtn = ()=> setPerson({name:'' , age: ''})
  return(
    <>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input value={person.name} type="name" onChange={changeName}/>
    <input value={person.age} type="number" onChange={changeNum}/>
    <button onClick={resetBtn}>リセット</button>
    </>
  )
};

export default Example;

// オブジェクトで取得しているので同じ構造で送ってあげる
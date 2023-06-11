import {useState} from 'react'
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [value,setValue] = useState('');
  return (
    <>
      {/* <h3>練習問題</h3>
      <p>入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。</p> */}
      <input type="text" value={value} onChange={(e)=>{
        setValue(e.target.value)
      }}/>
      <ul>
        {persons
        // 指定の文字列をfor文で回して回した文字列の中に異なる文字列が格納されている場合は-1を返すので変客される
        .filter(person => person.name.indexOf(value) !== -1)
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;

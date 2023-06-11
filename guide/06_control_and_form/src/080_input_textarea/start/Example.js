import {useState} from 'react'

const Example = () => {
  const [value , setValue] = useState('')
  const [valueText , setValueText] = useState('')

  const clearBtn = () =>{
    setValue("")
    setValueText('')
  }
  return (
    <>
      <label htmlFor='123'>ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={value}
          onChange = {(e)=> setValue(e.target.value)}
        />
      </div>
      <div>
        <textarea
          id="456"
          placeholder="こんにちは"
          value={valueText}
          onChange = {(e)=> setValueText(e.target.value)}
        />
        <p>{value}</p>
        <p>{valueText}</p>
      </div>
      <button onClick={clearBtn}>クリア</button>
    </>
  );
};

export default Example;

import {useState} from 'react'

const Example = () => {
  const [click , setClick] = useState(false)
  return (
    <>
    <label>チェック :
      <input
        type="checkbox"
        checked={click}
        onChange={() => setClick(p=>!p)}
      />
    </label>
    <p>{click == true? 'OK!': 'No'}</p>
    </>
  );
};

export default Example;

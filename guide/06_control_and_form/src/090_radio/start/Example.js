import {useState} from 'react'

const Example = () => {
  const [fruit, setFruit] = useState('Apple')
  const fruitArray = ['Apple', 'Banana' , 'Cherry']

  const onChange = (e)=> setFruit(e.target.value)
  return (
    <>
    {fruitArray.map(fruitItem =>{
      return(
        <label key={fruitItem}>
          <input
          type='radio'
          value={fruitItem}
          checked = {fruitItem === fruit}
          onChange={onChange}
          />{fruitItem}
        </label>
      )
    })}
      {/* <label>
        <input
          type="radio"
          value="Apple"
          checked = {fruit === "Apple"}
          onChange={onChange}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          value="Banana"
          checked = {fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked = {fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3><b>私は{fruit}が食べたい</b></h3>
    </>
  );
};

export default Example;


// radioボタンを変更すると、setStateが呼び出されvalueの値が変更される

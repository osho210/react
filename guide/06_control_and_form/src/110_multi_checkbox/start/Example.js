import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);
  // let sumVal = 0;


  // このeが選択された値
  const handleChange  = (e) =>{
    const newFruits = fruits.map(fruit =>{
      const newFruit = {...fruit}
      if(newFruit.label === e.target.value){
        newFruit.checked = !fruit.checked
        // 関数が呼び込まれた際にクリックされている状態なら加算の処理、異なる場合は原産の処理
        // setSum(prevSum => newFruit.checked ? prevSum + newFruit.value : prevSum - newFruit.value);
      }
      return newFruit
    })
    let sumVal = newFruits
    .filter(fruit => fruit.checked)
    .reduce((sumVal, fruit) => sumVal + fruit.value, 0)

    setSum(sumVal)
    // checkboxのイベントが変更される
    setFruits(newFruits)
  }

  return (
    <div>
      {fruits.map((fruit)=>{
        return(
          <div key={fruit.label}>
            <label>
              <input
              type="checkbox"
              checked={fruit.checked}
              value={fruit.label}
              onChange={handleChange}
              />
              {fruit.label}
              :{fruit.value}
            </label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;

import { useState } from "react";
import Animal from './components/Animal'
import AnimalFilter from './components/AnimalFilter'

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  // 入力値を取得してフィルター処理を行う
  const newAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })

  return (
    <>
      {/* input要素の入力項目 */}
      <AnimalFilter filterArray = {[filterVal, setFilterVal]}/>
      <Animal animals={newAnimals}/>
    </>
  );
};

export default Example;

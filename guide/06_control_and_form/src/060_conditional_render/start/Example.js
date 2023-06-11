import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null , "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            console.log(animal)
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return(
              <li key={animal}>
                {
                  // POINT if文
                  // if(animal === "Dog") {
                  //   return <li key={animal}>{animal}★</li>
                  // } else {
                  //   return <li key={animal}>{animal}</li>
                  // }
                  // POINT 3項演算子
                  // animal + (animal === "Dog"
                  //  ? "★"
                  //  : "")
                  // POINT null合体演算子
                  animal ?? "null,undefinedでした"
                }
                {/* POINT &&演算子 */}
                {animal === "Dog" && "★"}
              </li>
            )
            // 三項演算子
            // return <li key={animal}>{animal === "Dog" ? animal+"⭐️": animal}</li>

            // 真偽地
            // return <li key={animal}>{animal}{(animal === "Dog" && "⭐️")}</li>

            // null型演算子
            // return <li key={animal}>{animal}{animal==="Dog"?? "⭐️"}</li>

            // if文
            // if(animal === 'Dog'){
            //   return <li key={animal}>{animal + "☆"}</li>
            // }else{
            //   return <li key={animal}>{animal}</li>
            // }
          })}
      </ul>
    </>
  );
};

export default Example;


// 現在のプログラムにも真偽地自体は存在しているが、画面上には表示されない仕組みになっているので
// 表示させる方法もある
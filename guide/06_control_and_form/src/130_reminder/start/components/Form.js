import {useState} from 'react'
import { customAlphabet } from 'nanoid';
const charactors = "1234567890abcdef";
// 生成する文字の長さ
const length = 5;

const nanoid = customAlphabet(charactors, 10);

const Form = ({TodosLists}) =>{
    const [newTodosList, setNewTodosList] = TodosLists
    const [value,setValue] = useState("")

    const addArray = ()=>{
        if(value.length===0){
            alert("1文字以上")
            return
        }
        setNewTodosList([...newTodosList ,{id:nanoid(10),content:value}])
        setValue("")
    }
    return(
        <>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <input type="button" onClick={addArray} value={"追加"}/>
        </>
    )
}

export default Form;

// nonoidというライブラリを利用することで乱数の生成を簡単に作成することができる
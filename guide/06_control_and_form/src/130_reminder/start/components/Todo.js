import List from './List'
import Form from './Form.js'
import { useState } from 'react';

const Todo = () => {

  const todosList = [
    {id: 1,content: "店予約する"},
    {id: 2,content: "卵買う"},
    {id: 3,content: "郵便出す"},
  ];
  const [newTodosList,setNewTodosList] = useState([...todosList])
  return(
    <>
    <List TodosLists={[newTodosList,setNewTodosList]}/>
    <Form TodosLists={[newTodosList,setNewTodosList]}/>
    </>
  )
};


export default Todo;
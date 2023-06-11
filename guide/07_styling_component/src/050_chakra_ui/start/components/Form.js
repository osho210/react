import { useState } from "react";
import { HStack, Input,Button,useToast } from "@chakra-ui/react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast()

  const addTodo = (e) => {
    e.preventDefault();

    if(!enteredTodo){
      toast({
        title:"新しいタスクを入力してください",
        status: "info",
        duration: 200,
        isClosable: true
      })
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;

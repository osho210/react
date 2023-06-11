import Todo from "./components/Todo"
import {ChakraBaseProvider} from "@chakra-ui/react"

const Example = () => {
  return (
    <>
    <ChakraBaseProvider>
      <Todo />
    </ChakraBaseProvider>
    </>
  );
};

export default Example;

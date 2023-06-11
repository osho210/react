import { VStack,StackDivider, HStack, IconButton,Text } from "@chakra-ui/react";
import {VscCheck} from 'react-icons/vsc'

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
        divider={<StackDivider/>}
        borderColor='red.200'
        p={5}
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing={5}>
                        <IconButton onClick={() => complete(todo.id)} icon={<VscCheck />}isRound bgColor={"cyan.100"} opacity={0.5}>
                            完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;
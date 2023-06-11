import Child from "./components/Child";

const Example = () =>{
    const hello = (arg) =>`function ${arg}`
    const o ={
        num: 123,
        color: "red"
    }
    return(
        <>
            <Child
            {...o}
            fn = {hello}
            bool
            obj={{
                name: 'tom', age: 18
            }}
            />
            {/* <Child color="red" /> */}
        </>
    )
}

export default Example;

const List = ({TodosLists}) => {
    const [newTodosList,setNewTodosList] = TodosLists

    const removeList = (e)=>{
        newTodosList.map((pre)=>{
            if(pre.id == e.target.value){
                // クリックしたid以外のものを残す
                setNewTodosList(newTodosList.filter(item => item.id != pre.id))
            }
        })
    }
    return(
    <>
        {
            newTodosList.map(todo =>{
            return(
                <div key={todo.id}>
                <button value={todo.id} onClick={removeList}>完了</button>
                {todo.content}
                </div>
            )
            })
        }
    </>
    )
};



export default List;
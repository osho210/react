const AnimalFilter = ({filterArray}) =>{
    const [filterVal, setFilterVal] = filterArray
    return(
        <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
    )
}

export default AnimalFilter
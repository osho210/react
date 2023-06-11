const AnimalItem = ({animal})=>{
    return(
        <li key={animal}>
            {animal}
            {animal === "Cat" && "★"}
        </li>
    )
}

export default AnimalItem
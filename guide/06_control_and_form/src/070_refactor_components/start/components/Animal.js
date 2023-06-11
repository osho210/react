import AnimalItem from './AnimalItem'
const Animal = ({animals})=>{
    if(animals.length === 0){
        return <h3>アニマルが見つかりません</h3>
    }
    return(<ul>
        {animals
            .map((animal) => {
                return (
                <AnimalItem animal={animal} key={animal}/>
                );
            }
        )}</ul>
    )
}


export default Animal
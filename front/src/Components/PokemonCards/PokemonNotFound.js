export const PokemonNotFound = (props) => {
    const elem = props.elem

    return (
        <div>
            <div className="card">
                <img className="img notFound" src={elem.pic}/>
                <div className="nameArea">
                    <p className="pokemon-name">{elem.name}</p>
                </div>
            </div>
        </div>
    )
}
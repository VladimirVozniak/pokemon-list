export const PokemonStats = (props) => {
    const stats = props.pokemonInfo.stats

    return (
        <>
            {stats.map((elem, index) => {
                return (
                    <span key={index}>
                        {[Object.keys(elem)[0]]}: {Object.values(elem)[0]}
                        <br/>
                    </span>)
            })}
        </>
    )
}
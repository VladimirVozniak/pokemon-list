export const PokemonGeneralInfo = (props) => {
    const generalInfo = props.pokemonInfo.general_info
    return (
        <>
            Types: {generalInfo.types.reduce(() => {
            const types = []
            generalInfo.types.map(elem => types.push(elem.type))
            return types.length === 1 ? types : types.join(', ')
        }, [])}
            <br/>
            Weight: {generalInfo.weight}
            <br/>
            Growth rate: {generalInfo.growth_rate}
            <br/>
            Generation: {generalInfo.generation}
            <br/>
            Color: {generalInfo.color}
        </>
    )
}
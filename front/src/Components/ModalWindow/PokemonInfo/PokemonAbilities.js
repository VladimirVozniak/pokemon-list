export const PokemonAbilities = (props) => {
    const abilities = props.pokemonInfo.abilities

    return (
        <>
            Abilities: {abilities.reduce(() => {
            const ability = []
            abilities.map(elem => ability.push(elem.ability))
            return ability.length === 1 ? ability[0] : ability.join(", ")
        }, [])}
        </>
    )
}
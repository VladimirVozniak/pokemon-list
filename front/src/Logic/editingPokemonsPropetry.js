export const editingPokemonsProperty = (pokemonList, displayOnlyFavorites) => {
    const numberPattern = /\d+/g

    if (displayOnlyFavorites)
        return pokemonList.forEach((elem, index) => {
            pokemonList[index] = {
                id: elem.id,
                name: elem.name,
                pic: elem.pic,
            }
        })

    return pokemonList.forEach((elem, index) => {
        // id в формате 000
        let formatId = elem.url.match(numberPattern)[1]
        if (formatId < 10)
            formatId = '00' + formatId
        else if (formatId < 100)
            formatId = '0' + formatId

        pokemonList[index] = {
            id: formatId,
            name: elem.name,
            pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elem.url.match(numberPattern)[1]}.png`,
        }
    })
}
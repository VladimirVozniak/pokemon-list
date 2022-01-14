export const notFoundPokemon = () => {
    const randomLetter = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)
    return [{
        name: 'Not found',
        pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-${randomLetter}.png`
    }]
}
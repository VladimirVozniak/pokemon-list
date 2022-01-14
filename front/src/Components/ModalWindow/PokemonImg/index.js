export const PokemonImg = (props) => {
    const {popupInfo, favoritePokemons, id} = props
    return (
        <div className={`favorite-uncheck ${favoritePokemons.find(e => e.id === id) && 'favorite-check'}`}>
            <div className='pokemon-info_img'>
                <img className='pokImg' src={popupInfo.pic}/>
            </div>
        </div>
    )
}